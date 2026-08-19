import React from "react";
import { TableOfContents } from "lucide-react";
import { Link } from "react-router";
import { useRelWatchOrderContext } from "@/context/relWatchOrderContext";

const MiddleSectionCard = ({ name, src, entries, id }) => {
    const { getRelWatchOrder } = useRelWatchOrderContext();

    return (
        <Link
            to={`/watch-order/anime/${id}`}
            onClick={() => {
                getRelWatchOrder(id);
            }}>
            <div className="flex flex-col h-70 p-1 bg-white/10 supports-backdrop-filter:backdrop-blur-2xl border border-white/30 rounded-3xl overflow-hidden relative shadow-xl will-change-transform cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                <div className="w-full h-40">
                    <img
                        className="w-full h-full object-cover rounded-2xl"
                        src={src}
                        alt="Image"
                    />
                </div>
                <div className="flex flex-col gap-5 px-8 py-5 ">
                    <div>
                        <h2 className="text-xl font-semibold border-b border-b-white/20 py-1 truncate">
                            {name}
                        </h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <TableOfContents size={18} color="#D5B1FA" />
                        <p className="text-xs font-semibold align-baseline mt-px">
                            {entries} Entries in watch order
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MiddleSectionCard;
