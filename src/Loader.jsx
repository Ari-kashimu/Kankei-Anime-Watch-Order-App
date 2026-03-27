import React from "react";

const Loader = () => {
    return (
        <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-transparent text-rose-500 text-4xl animate-spin flex items-center justify-center border-t-rose-500 rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-rose-500 text-2xl animate-spin flex items-center justify-center border-t-rose-400 rounded-full"></div>
            </div>
            <p className=" text-rose-400 animate-pulse capitalize">
                Loading Anime Relations ... it Might Take a While
            </p>
        </div>
    );
};

export default Loader;
