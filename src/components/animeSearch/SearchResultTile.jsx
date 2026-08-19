import { useRelWatchOrderContext } from "@/context/relWatchOrderContext";
import { useRelWatchOrderQuery } from "@/logic/services/relWatchOrderQuery";
import React from "react";
import { Link } from "react-router";

const SearchResultTile = ({
    clearStates,
    setOpen,
    img,
    eng_name,
    name,
    airedOn,
    kind,
    malId,
    score,
    status,
}) => {
    const { getRelWatchOrder } = useRelWatchOrderContext();

    return (
        <Link
            onClick={() => {
                setOpen(false);
                clearStates();
                getRelWatchOrder(malId);
                console.log(malId);
            }}
            to={`/watch-order/anime/${malId}`}
            className="p-2 flex gap-5 items-center text-white rounded transition-colors hover:bg-black/40 cursor-pointer">
            <div>
                <img
                    className="w-15 h-22 object-cover rounded"
                    src={img}
                    alt={`${eng_name} Image`}
                />
            </div>
            <div>
                <h3 className="font-semibold tracking-wider">
                    {eng_name ? eng_name : name}
                </h3>
                <p className="text-neutral-400">
                    {airedOn} | {kind} | ★ {score} | {status}
                </p>
            </div>
        </Link>
    );
};

export default SearchResultTile;
