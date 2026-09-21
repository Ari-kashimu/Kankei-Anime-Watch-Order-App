import React from "react";
import AiredOrderTile from "./AiredOrderTile.jsx";
import { useRelWatchOrderContext } from "@/context/relWatchOrderContext.jsx";
import { Skeleton } from "../ui/skeleton.jsx";

const AiredOrderSection = ({ filteredAnime, orderWithoutMusic }) => {
    const { isLoading } = useRelWatchOrderContext();

    return (
        <div>
            {isLoading ? (
                <div className="flex flex-col gap-6">
                    <Skeleton className="h-38 w-full bg-white/30 rounded-2xl" />
                    <Skeleton className="h-38 w-full bg-white/30 rounded-2xl" />
                    <Skeleton className="h-38 w-full bg-white/30 rounded-2xl" />
                    <Skeleton className="h-38 w-full bg-white/30 rounded-2xl" />
                </div>
            ) : (
                <>
                    {filteredAnime.length > 0 && (
                        <div className="flex flex-col gap-6">
                            {filteredAnime.map((entry, idx) => {
                                return (
                                    <AiredOrderTile
                                        liNum={idx + 1}
                                        key={entry.malId}
                                        airedOn={entry.airedOn.year}
                                        duration={entry.duration}
                                        english={entry.english}
                                        episodes={entry.episodes}
                                        externalLinks={entry.externalLinks}
                                        japanese={entry.japanese}
                                        kind={entry.kind}
                                        name={entry.name}
                                        poster={entry.poster.main2xUrl}
                                        score={entry.score}
                                        status={entry.status}
                                        url={entry.url}
                                    />
                                );
                            })}
                        </div>
                    )}

                    <div className="w-full mt-6 mb-3 font-bold text-2xl max-[1300px]:text-xl max-[450px]:text-[13px] flex justify-center items-center">
                        Total Entries : {filteredAnime.length} | Hidden Entries
                        : {orderWithoutMusic.length - filteredAnime.length}
                    </div>
                </>
            )}
        </div>
    );
};

export default AiredOrderSection;
