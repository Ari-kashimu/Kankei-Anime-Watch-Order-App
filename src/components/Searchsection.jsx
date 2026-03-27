import React, { useState } from "react";
import ResultTile from "./ResultTile";

const Searchsection = ({
    aniName,
    setAniName,
    searchResult,
    getWatchOrder,
    emptyInput,
}) => {
    return (
        <div className="w-150 flex flex-col gap-5 items-center">
            {/* //* Heading */}
            <h1 className="capitalize text-6xl font-semibold text-rose-400">
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
                    <div className="h-fit w-full bg-neutral-900 rounded p-2.5 flex flex-col justify-between items-center overflow-auto gap-2 no-scrollbar">
                        {searchResult.map((ani) => {
                            return (
                                <ResultTile
                                    key={ani.mal_id}
                                    img={ani.images.jpg.image_url}
                                    name={ani.title}
                                    releaseDate={ani.aired.string}
                                    id={ani.mal_id}
                                    getWatchOrder={getWatchOrder}
                                    emptyInput={emptyInput}
                                />
                            );
                        })}
                        <p className="text-sm text-neutral-500 capitalize w-fit">
                            Slect the Main franchise(1st Season) to Get Correct
                            Watch order | eg : (Naruto, Attack on titan)
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Searchsection;
