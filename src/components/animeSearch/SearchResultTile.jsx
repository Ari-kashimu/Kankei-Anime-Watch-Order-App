import React from "react";
import { Link } from "react-router";

const SearchResultTile = ({ img, name, releaseDate, type, id }) => {
    // console.log(id);
    return (
        <Link
            onClick={() => console.log(id)}
            to="/watch-order"
            className="p-2 flex gap-5 items-center text-white rounded transition-colors hover:bg-black/40 cursor-pointer">
            <div>
                <img
                    className="w-15 h-22 object-cover rounded"
                    src={img}
                    alt={`${name} Image`}
                />
            </div>
            <div>
                <h3 className="font-semibold tracking-wider">{name}</h3>
                <p className="text-neutral-400">
                    {releaseDate} | {type}
                </p>
            </div>
        </Link>
    );
};

export default SearchResultTile;
