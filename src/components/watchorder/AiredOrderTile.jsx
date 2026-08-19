import React from "react";
import { Badge } from "../ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
import { Star } from "lucide-react";
import { Clock } from "lucide-react";
import { Play } from "lucide-react";
import { Tv } from "lucide-react";
import { StepForward } from "lucide-react";
import { Link } from "lucide-react";
import { ExternalLinksForAnime } from "./ExternalLinksForAnime";

const AiredOrderTile = ({
    airedOn,
    duration,
    english,
    episodes,
    externalLinks,
    japanese,
    kind,
    name,
    poster,
    score,
    status,
    url,
    liNum,
}) => {
    return (
        <div className="border p-2 w-full border-white/20 rounded-2xl h-40 flex gap-5 items-center ">
            <img
                className="h-full rounded-xl w-25 object-cover"
                src={poster}
                alt={`${name} Image`}
            />
            <div className="flex flex-col gap-5 h-fit min-w-0">
                <div>
                    <h1 className="text-3xl font-semibold mb-1 truncate">
                        {english ? english : name}
                    </h1>
                    <p className="text-xs truncate">
                        {japanese} | {name}
                    </p>
                </div>

                <div className="flex gap-2.5">
                    <Badge className="text-xs p-3" variant="custom">
                        <Calendar className="w-4! h-4!" color="#fff" />
                        {airedOn ? airedOn : "Unknown"}
                    </Badge>
                    <Badge className="text-xs p-3" variant="custom">
                        <Play className="w-4! h-4!" color="#fff" />
                        Episodes: {episodes ? episodes : "UnKnown"}
                    </Badge>
                    <Badge className="text-xs p-3" variant="custom">
                        <Clock className="w-4! h-4!" color="#fff" />
                        {duration ? duration : "UnKnown"} min
                    </Badge>
                    <Badge className="text-xs p-3" variant="custom">
                        <Star className="w-4! h-4!" color="#fff" />
                        {score ? score : "UnKnown"}
                    </Badge>
                    <Badge className="text-xs p-3" variant="custom">
                        <Tv className="w-4! h-4!" color="#fff" />
                        {status ? status : "UnKnown"}
                    </Badge>
                    <Badge className="text-xs p-3" variant="custom">
                        <StepForward className="w-4! h-4!" color="#fff" />
                        {kind ? kind.toUpperCase() : "UnKnown"}
                    </Badge>

                    <ExternalLinksForAnime externalLinks={externalLinks} />
                </div>
            </div>

            <div className=" ml-auto  p-20 flex justify-center items-center font-bold text-3xl h-full  ">
                {liNum}
            </div>
        </div>
    );
};

export default AiredOrderTile;
