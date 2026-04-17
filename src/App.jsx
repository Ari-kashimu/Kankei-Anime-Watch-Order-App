import React, { useEffect, useRef, useState } from "react";
import Searchsection from "./components/Searchsection";
import Tile from "./components/Tile";
import Loader from "./components/Loader";
import VersionBadge from "./components/VersionBadge";
import { delay } from "./helpers/delay";
import { useSearch } from "./hooks/useSearch";
import { getRootAnime } from "./helpers/getPrequel";
import { filterResults } from "./helpers/filterResults";

const App = () => {
    //* Anime Name That User Types
    const [aniName, setAniName] = useState("");

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

    //* Async Function to Fetch Anime Data For Search franchise

    const { search, searchResult } = useSearch();

    //* useEffect For Request Anime Search (After 200s)
    useEffect(() => {
        const timer = setTimeout(() => {
            search(aniName);
        }, 300);

        return () => clearTimeout(timer);
    }, [aniName]);

    //* Function to Find the all relation from the The First Anime of the Franchise

    async function getAllRelations(rootAnime) {
        //
        const queue = [rootAnime.mal_id];
        const result = [];
        const rootTitle = rootAnime.title.toLowerCase();

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
            "Summary",
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

        while (queue.length > 0) {
            //Take First Anime From queue
            const currentId = queue.shift();

            // Check if anime is already visited or not if visited skip this if not then visit and add to visited
            if (visited.current.has(currentId)) continue;
            visited.current.add(currentId);

            await delay(200); //  To avoid api call limits 3calls/s

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
                        await delay(650); // To avoid api call limits 3calls/s

                        const fullRes = await fetch(
                            `https://api.jikan.moe/v4/anime/${entry.mal_id}`,
                        );
                        const fullData = await fullRes.json();
                        const anime = fullData.data;

                        console.log(rel.relation);

                        // Correct filtering
                        if (!allowedTypes.includes(anime.type)) continue; // Filter by Types
                        if (!validRelations.includes(rel.relation)) continue; // Filter by Valid Relations
                        if (blockedRelations.includes(rel.relation)) continue; // Filter by Blocked Relations

                        //Filter by Comparing Title
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

        const filteredResult = filterResults(result);

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

        setAllRelations(filteredResult);
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

        // Find root Anime
        const rootAnime = await getRootAnime(id);

        await getAllRelations(rootAnime);

        //  End Loading
        setloading(false);

        console.log(rootAnime.mal_id);
    }

    return (
        <div className="bg-neutral-950 h-fit text-white relative">
            <VersionBadge />
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
                                                img={ani.img}
                                                name={ani.name}
                                                eng_name={ani.eng_name}
                                                type={ani.type}
                                                ep={ani.episodes}
                                                duration={ani.duration}
                                                score={ani.score}
                                                fromTo={ani.fromTo}
                                                mal_url={ani.mal_url}
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
