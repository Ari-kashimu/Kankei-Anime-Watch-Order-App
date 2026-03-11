import React from "react";

const Searchsection = () => {
    return (
        <div className="w-fit flex flex-col gap-5">
            {/* //* Heading */}
            <h1 className="capitalize text-6xl font-semibold">
                Find Out Watch order
            </h1>

            {/* //* Input Area */}
            <div className="flex gap-5  tracking-wide">
                <input
                    className="bg-gray-50 w-full px-4 py-2 text-neutral-950 border-none outline-none rounded"
                    type="text"
                    name="animeName"
                    placeholder="Search Anime"
                />
                <button className="px-4 py-2 bg-rose-500 font-medium flex justify-center items-center rounded cursor-pointer active:scale-95 transition-all duration-200">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Searchsection;
