import React from "react";

const ResultTile = ({
    img,
    name,
    releaseDate,
    id,
    getWatchOrder,
    emptyInput,
}) => {
    return (
        <button
            className="h-25 p-2 w-full rounded bg-neutral-950 flex items-center gap-2.5 cursor-pointer hover:scale-102 transition-all hover:bg-rose-500"
            onClick={() => {
                getWatchOrder(id);
                emptyInput();
            }}>
            {/* //* Image*/}
            <img
                className="h-22 w-16 object-cover"
                src={img}
                alt="ResultImage"
            />
            {/* //* Anime Name & Release Date */}
            <div className="flex flex-col gap-1 min-w-0 items-start">
                <h4 className="text-xl truncate">{name}</h4>
                <p className="text-rose-200 text-xs">{releaseDate}</p>
            </div>
        </button>
    );
};

export default ResultTile;
