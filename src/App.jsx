import React from "react";
import Searchsection from "./components/Searchsection";
import Tile from "./components/Tile";

const App = () => {
    return (
        <div className="bg-neutral-950 h-fit text-white">
            <div className="w-full min-h-screen flex flex-col justify-center items-center p-15 gap-10">
                {/* //* Search Section */}
                <Searchsection />

                {/* //* Anime List */}
                <ul className="w-full h-4/5 flex flex-col gap-5">
                    <Tile />
                </ul>
            </div>
        </div>
    );
};

export default App;
