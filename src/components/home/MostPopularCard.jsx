import React from "react";
import { Badge } from "../ui/badge";
import { Calendar } from "lucide-react";
import { Star } from "lucide-react";
import { Clock } from "lucide-react";
import { Play } from "lucide-react";
import { Button } from "../ui/button";
import { TextAlignStart } from "lucide-react";

const MostPopularCard = ({
    name,
    src,
    score,
    releaseDate,
    duration,
    episodes,
    intro,
}) => {
    return (
        <div className="bg-white/10 supports-backdrop-filter:backdrop-blur-2xl border border-white/50 rounded-4xl h-full w-full p-8 flex justify-between items-center shadow-sm">
            <div className="w-80 h-full rounded-2xl overflow-hidden border-2 border-white/80">
                <img
                    className="w-full h-full object-cover"
                    src={src}
                    alt="Anime Image"
                />
            </div>
            <div className="flex flex-col h-fit justify-center gap-5 w-170 ">
                <h1 className="text-5xl font-bold capitalize">{name}</h1>
                <div className="flex gap-2.5">
                    <Badge variant="custom">
                        <Calendar className="w-4! h-4!" color="#D5B1FA" />
                        {releaseDate}
                    </Badge>
                    <Badge variant="custom">
                        <Play className="w-4! h-4!" color="#D5B1FA" />
                        Episodes: {episodes}
                    </Badge>
                    <Badge variant="custom">
                        <Clock className="w-4! h-4!" color="#D5B1FA" />
                        {duration}
                    </Badge>
                    <Badge variant="custom">
                        <Star className="w-4! h-4!" color="#D5B1FA" />
                        {score}
                    </Badge>
                </div>
                <div className="flex gap-1 flex-col ">
                    <div className="flex gap-2 items-center">
                        <TextAlignStart size={20} color="#D5B1FA" />
                        <h3 className="font-semibold">Introduction</h3>
                    </div>
                    <p className="h-30 overflow-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-neutral-900 [&::-webkit-scrollbar-thumb]:bg-violet-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                        {intro}
                    </p>
                </div>
                <div>
                    <Button className="" variant="custom">
                        See Watch Order
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MostPopularCard;
