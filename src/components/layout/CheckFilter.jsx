import React, { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";

const CheckFilter = ({ filters, setFilters }) => {
    return (
        <div className="ml-auto max-[450px]:scale-80 origin-right max-[940px]:flex-wrap justify-end  flex gap-5 max-[1200px]:gap-2.5 items-center w-fit">
            Hide Entries | {/* Music */}
            <div
                className={`flex items-center select-none gap-2.5 border-2 rounded-xl px-4 py-1 max-[1200px]:px-2 max-[1200px]:py-1 max-[1200px]:text-[10px]
                    ${filters.tv ? "bg-white/20" : ""}`}>
                <Checkbox
                    checked={filters.tv}
                    onCheckedChange={(checked) =>
                        setFilters((perv) => {
                            return { ...perv, tv: checked };
                        })
                    }
                    className="data-checked:bg-white data-checked:text-black data-checked:border-none max-[1200px]:w-3 max-[1200px]:h-3"
                    id="tv"
                />
                <label htmlFor="tv">TV</label>
            </div>
            {/* CM */}
            <div
                className={`flex items-center select-none  gap-2.5 border-2 rounded-xl px-4 py-1 max-[1200px]:px-2 max-[1200px]:py-1 max-[1200px]:text-[10px] ${filters.special ? "bg-white/20" : ""}`}>
                <Checkbox
                    checked={filters.special}
                    onCheckedChange={(checked) =>
                        setFilters((perv) => {
                            return { ...perv, special: checked };
                        })
                    }
                    className="data-checked:bg-white data-checked:text-black data-checked:border-none max-[1200px]:w-3 max-[1200px]:h-3"
                    id="special"
                />
                <label htmlFor="special">Special</label>
            </div>
            {/* PV */}
            <div
                className={`flex items-center select-none gap-2.5 border-2 rounded-xl px-4 py-1 max-[1200px]:px-2 max-[1200px]:py-1 max-[1200px]:text-[10px] ${filters.tv_special ? "bg-white/20" : ""}`}>
                <Checkbox
                    checked={filters.tv_special}
                    onCheckedChange={(checked) =>
                        setFilters((perv) => {
                            return { ...perv, tv_special: checked };
                        })
                    }
                    className="data-checked:bg-white data-checked:text-black data-checked:border-none max-[1200px]:w-3 max-[1200px]:h-3"
                    id="tv_special"
                />
                <label htmlFor="tv_special">TV Special</label>
            </div>
            {/* Movie */}
            <div
                className={`flex items-center select-none gap-2.5 border-2 rounded-xl px-4 py-1 max-[1200px]:px-2 max-[1200px]:py-1 max-[1200px]:text-[10px] ${filters.movie ? "bg-white/20" : ""}`}>
                <Checkbox
                    checked={filters.movie}
                    onCheckedChange={(checked) =>
                        setFilters((perv) => {
                            return { ...perv, movie: checked };
                        })
                    }
                    className="data-checked:bg-white data-checked:text-black data-checked:border-none max-[1200px]:w-3 max-[1200px]:h-3"
                    id="movie"
                />
                <label htmlFor="movie">Moive</label>
            </div>
            {/* ova */}
            <div
                className={`flex items-center select-none gap-2.5 border-2 rounded-xl px-4 py-1 max-[1200px]:px-2 max-[1200px]:py-1 max-[1200px]:text-[10px] ${filters.ova ? "bg-white/20" : ""}`}>
                <Checkbox
                    checked={filters.ova}
                    onCheckedChange={(checked) =>
                        setFilters((perv) => {
                            return { ...perv, ova: checked };
                        })
                    }
                    className="data-checked:bg-white data-checked:text-black data-checked:border-none max-[1200px]:w-3 max-[1200px]:h-3"
                    id="ova"
                />
                <label htmlFor="ova">OVA</label>
            </div>
            {/* Movie */}
            <div
                className={`flex items-center select-none gap-2.5 border-2 rounded-xl px-4 py-1 max-[1200px]:px-2 max-[1200px]:py-1 max-[1200px]:text-[10px] ${filters.ona ? "bg-white/20" : ""}`}>
                <Checkbox
                    checked={filters.ona}
                    onCheckedChange={(checked) =>
                        setFilters((perv) => {
                            return { ...perv, ona: checked };
                        })
                    }
                    className="data-checked:bg-white data-checked:text-black data-checked:border-none max-[1200px]:w-3 max-[1200px]:h-3"
                    id="ona"
                />
                <label htmlFor="ona">ONA</label>
            </div>
        </div>
    );
};

export default CheckFilter;
