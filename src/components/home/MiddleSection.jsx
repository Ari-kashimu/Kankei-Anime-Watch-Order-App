import React from "react";

import MiddleSectionCard from "./MiddleSectionCard";

const MiddleSection = ({ sectionName, icon, animeList }) => {
    return (
        <div className="w-full h-fit  flex flex-col gap-10 px-12 py-6 max-[550px]:px-6 border-t border-white/30">
            <div className="flex gap-2 items-center">
                {icon}
                <h1 className="text-2xl font-bold">{sectionName}</h1>
            </div>

            <div className="grid grid-cols-4 max-[1300px]:grid-cols-2 max-[630px]:grid-cols-1  gap-5">
                {animeList.map((anime, idx) => {
                    return (
                        <MiddleSectionCard
                            id={anime.id}
                            key={idx}
                            name={anime.name}
                            src={anime.src}
                            entries={anime.entries}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MiddleSection;
