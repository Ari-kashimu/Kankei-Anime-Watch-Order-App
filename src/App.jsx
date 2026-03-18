import React, { useEffect, useState } from "react";
import Searchsection from "./components/Searchsection";
import Tile from "./components/Tile";

const App = () => {
    //* Anime Name That User Types
    const [aniName, setAniName] = useState("");

    //* Result That User gets
    const [searchResult, setSearchResult] = useState([]);

    //* Helper Function For Input Value Change (Two Way Binding)
    function setAniNameHelper(e) {
        setAniName(e.target.value);
    }
    //* Delay Function to aviod Api Limits
    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    //* Async Function to Fetch Anime Data For Search franchise
    async function getAniDataForSearch() {
        const res = await fetch(
            `https://api.jikan.moe/v4/anime?q=${aniName}&limit=5`,
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
            await delay(400);

            const res = await fetch(
                `https://api.jikan.moe/v4/anime/${currentId}/relations`,
            );
            const data = await res.json();

            const prequel = data.data.find(
                (r) =>
                    r.relation === "Prequel" || r.relation === "Parent Story",
            );

            if (!prequel) break;

            currentId = prequel.entry.find((e) => e.type === "anime")?.mal_id;
        }

        return currentId;
    }

    async function getWatchOrder(id) {
        const rootId = await getPrequel(id);
        console.log(rootId);
        return rootId;
    }

    return (
        <div className="bg-neutral-950 h-fit text-white">
            <div className="w-full min-h-screen flex flex-col justify-center items-center p-15 gap-10">
                {/* //* Search Section */}
                <Searchsection
                    aniName={aniName}
                    setAniName={setAniNameHelper}
                    searchResult={searchResult}
                    getWatchOrder={getWatchOrder}
                />

                {/* //* Anime List */}
                {/* <ul className="w-full h-4/5 flex flex-col gap-5"></ul> */}
            </div>
        </div>
    );
};

export default App;
