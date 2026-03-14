import React, { useState } from "react";
import ResultTile from "./ResultTile";

const Searchsection = ({ aniName, setAniName, searchResult }) => {
    return (
        <div className="w-150 flex flex-col gap-5 items-center">
            {/* //* Heading */}
            <h1 className="capitalize text-6xl font-semibold">
                Find Out Watch order
            </h1>

            {/* //* Input Area */}
            <div className="flex flex-col gap-5 tracking-wide w-full">
                <input
                    className="bg-gray-50 w-full px-4 py-2 text-neutral-950 border-none outline-none rounded"
                    value={aniName}
                    onChange={(e) => setAniName(e)}
                    type="text"
                    name="animeName"
                    placeholder="Search Anime"
                />
                {searchResult.length > 0 && (
                    <div className="h-83.5 w-full bg-neutral-900 rounded p-2.5 flex flex-col justify-between overflow-auto gap-2 no-scrollbar">
                        {searchResult.map((ani) => {
                            return (
                                <ResultTile
                                    key={ani.mal_id}
                                    img={ani.images.jpg.image_url}
                                    name={ani.title}
                                    releaseDate={ani.aired.string}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Searchsection;
