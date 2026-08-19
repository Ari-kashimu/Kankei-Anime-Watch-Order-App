import React from "react";
import AiredOrderTile from "./AiredOrderTile";

const MusicSection = ({ filteredMusic }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-6">
            {filteredMusic.map((entry, idx) => {
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
            <div className="text-white/80">
                Related Music features anime openings, endings, promotional
                videos, and commercial songs related to the series.
            </div>
        </div>
    );
};

export default MusicSection;
