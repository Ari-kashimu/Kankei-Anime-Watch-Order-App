import React, { useEffect, useRef, useState } from "react";
import Searchsection from "./components/Searchsection";
import Tile from "./components/Tile";
import Loader from "./Loader";

const App = () => {
    //* Anime Name That User Types
    const [aniName, setAniName] = useState("");

    //* Result That User gets
    const [searchResult, setSearchResult] = useState([]);

    // * All relation array
    const [allRelations, setAllRelations] = useState([]);

    // * Visited arr to avoid infinite loop
    const visited = useRef(new Set());

    // * Loader
    const [loading, setloading] = useState(false);

    //* Helper Function For Input Value Change (Two Way Binding)
    function setAniNameHelper(e) {
        setAniName(e.target.value);
    }
    //* Helper Function to empty input after clicking one anime
    function emptyInput() {
        setAniName("");
    }

    //* Delay Function to aviod Api Limits
    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    //* Async Function to Fetch Anime Data For Search franchise
    async function getAniDataForSearch() {
        const res = await fetch(
            `https://api.jikan.moe/v4/anime?q=${aniName}&limit=2`,
        );
        const data = await res.json();

        setSearchResult(data.data);
    }

    //* useEffect For Request Anime Data While Typing(After 500s)
    useEffect(() => {
        if (!aniName) {
            setSearchResult([]);
            return;
        }

        if (aniName.length > 2) {
            const timer = setTimeout(() => {
                getAniDataForSearch();
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [aniName]);

    //* Function to Find the prequel (The First Anime of the Franchise)
    async function getPrequel(id) {
        let currentId = id;

        while (true) {
            await delay(150);

            const res = await fetch(
                `https://api.jikan.moe/v4/anime/${currentId}/relations`,
            );
            const data = await res.json();

            const prequel = data.data.find(
                (r) =>
                    r.relation === "Prequel" ||
                    r.relation === "Parent Story" ||
                    r.relation === "Full Story",
            );

            if (!prequel) break;

            currentId = prequel.entry.find((e) => e.type === "anime")?.mal_id;
        }

        return currentId;
    }

    //* Function to Find the all relation from the The First Anime of the Franchise

    async function getAllRelations(rootAnime) {
        //
        const queue = [rootAnime.mal_id];
        const result = [];
        const rootTitle = rootAnime.title.toLowerCase();

        const max = 60;

        // Allowed anime types (keeps real content)
        const allowedTypes = [
            "TV",
            "Movie",
            "OVA",
            "ONA",
            "Special",
            "TV Special",
            "PV",
        ];

        // Only allow useful relations
        const validRelations = [
            "Sequel",
            "Prequel",
            "Side Story",
            "Alternative Version",
            "Parent Story",
            "Full Story",
            "Alternative Setting",
            "Spin-Off",
            "Other",
        ];

        const blockedRelations = [
            "Character",
            "Music",
            "Theme Song",
            "Reference",
            "Commercial",
            "Promo",
            "Guide",
        ];

        // Always first anime(rootAnime)  so that we can see anime with only on season : Golden time
        result.push(rootAnime);

        while (queue.length > 0 && result.length < max) {
            //Take First Anime From queue
            const currentId = queue.shift();

            // Check if anime is already visited or not if visited skip this if not then visit and add to visited
            if (visited.current.has(currentId)) continue;
            visited.current.add(currentId);

            await delay(100); //  To avoid api call limits 3calls/s

            //  Fetch Current anime relation
            const res = await fetch(
                `https://api.jikan.moe/v4/anime/${currentId}/relations`,
            );
            const data = await res.json();

            if (!data.data) continue; // 🛡️ prevent crash

            // Loop Relations Used for of loop because await doesnt work in forEach
            for (const rel of data.data) {
                for (const entry of rel.entry) {
                    //
                    if (entry.type === "anime") {
                        //
                        await delay(200); // To avoid api call limits 3calls/s

                        const fullRes = await fetch(
                            `https://api.jikan.moe/v4/anime/${entry.mal_id}/full`,
                        );
                        const fullData = await fullRes.json();
                        const anime = fullData.data;

                        // Correct filtering
                        if (!allowedTypes.includes(anime.type)) continue;

                        if (
                            anime.relations.length > 0 &&
                            !anime.relations.some((rel) =>
                                validRelations.includes(rel.relation),
                            )
                        ) {
                            continue;
                        }

                        // Block relation = Charcters
                        if (blockedRelations.includes(rel.relation)) continue;

                        // Smart Alternative Setting Filter
                        if (
                            rel.relation === "Alternative Setting" ||
                            rel.relation === "Other"
                        ) {
                            const title = anime.title.toLowerCase();

                            // Compare Alternative anime title to RootTitle
                            if (!title.includes(rootTitle)) {
                                continue;
                            }
                        }

                        if (!result.some((a) => a.mal_id === anime.mal_id)) {
                            //  Add animes to result
                            result.push(anime);
                        }

                        //  if this is not visited add to queue
                        if (!visited.current.has(anime.mal_id)) {
                            queue.push(anime.mal_id);
                        }
                    }
                }
            }
        }
        // Sort the Result by aried date
        result.sort((a, b) => {
            const dateA = a.aired?.from
                ? new Date(a.aired.from)
                : new Date(8640000000000000); // max date
            const dateB = b.aired?.from
                ? new Date(b.aired.from)
                : new Date(8640000000000000);
            return dateA - dateB;
        });

        console.log(result);
        setAllRelations(result);
    }

    useEffect(() => {
        console.log(allRelations);
    }, [allRelations]);

    async function getWatchOrder(id) {
        if (loading) return;

        //  Start Loading
        setloading(true);

        //  Reset old data before new fetch like reset naruto add before fetching bleach
        setAllRelations([]);
        visited.current.clear();

        // Fins root Anime
        const rootId = await getPrequel(id);
        const res = await fetch(`https://api.jikan.moe/v4/anime/${rootId}`);
        const data = await res.json();
        const rootAnime = data.data;

        await getAllRelations(rootAnime);

        //  End Loading
        setloading(false);

        console.log(rootAnime.mal_id);
    }

    return (
        <div className="bg-neutral-950 h-fit text-white">
            <div className="w-full min-h-screen flex flex-col justify-center items-center p-15 gap-10">
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        {/* //* Search Section */}
                        <Searchsection
                            aniName={aniName}
                            setAniName={setAniNameHelper}
                            searchResult={searchResult}
                            getWatchOrder={getWatchOrder}
                            emptyInput={emptyInput}
                        />

                        {/* //* Anime List */}
                        {allRelations.length > 0 && (
                            <>
                                <ul className="w-full h-4/5 flex flex-col gap-5">
                                    {allRelations.map((ani) => {
                                        return (
                                            <Tile
                                                key={ani.mal_id}
                                                img={ani.images.jpg.image_url}
                                                name={ani.title}
                                                eng_name={ani.title_english}
                                                type={ani.type}
                                                ep={ani.episodes}
                                                duration={ani.duration}
                                                score={ani.score}
                                                fromTo={ani.aired.string}
                                                mal_url={ani.url}
                                            />
                                        );
                                    })}
                                </ul>
                                <div>
                                    <p className="text-4xl font-semibold text-rose-400">
                                        Total Entries Found:
                                        {allRelations.length}
                                    </p>
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default App;
