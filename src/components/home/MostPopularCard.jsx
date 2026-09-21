import React from "react";
import { Badge } from "../ui/badge";
import { Calendar } from "lucide-react";
import { Star } from "lucide-react";
import { Clock } from "lucide-react";
import { Play } from "lucide-react";
import { Button } from "../ui/button";
import { TextAlignStart } from "lucide-react";
import { useRelWatchOrderContext } from "@/context/relWatchOrderContext";
import { Link } from "react-router";

const MostPopularCard = ({
    name,
    src,
    score,
    releaseDate,
    duration,
    episodes,
    intro,
    id,
}) => {
    const { getRelWatchOrder } = useRelWatchOrderContext();

    return (
        <div className="bg-white/10 supports-backdrop-filter:backdrop-blur-2xl border border-white/50 rounded-4xl h-full w-full max-[1200px]:p-4 p-8 flex justify-between items-center gap-7 shadow-sm max-[1000px]:flex-col">
            <div className="w-1/3 max-[1000px]:w-full max-[1000px]:h-45 h-full rounded-2xl overflow-hidden border-2 border-white/80">
                <img
                    className="w-full h-full object-cover"
                    src={src}
                    alt="Anime Image"
                />
            </div>
            <div className="flex flex-col h-fit justify-center max-[1200px]:gap-1 max-[1000px]:gap-3 gap-[1vw] w-2/3 max-[1000px]:w-full ">
                <h1 className="text-[3vw] max-[550px]:text-[5vw] font-bold capitalize">
                    {name}
                </h1>
                <div className="flex flex-wrap gap-2.5 origin-left">
                    <Badge
                        className={`p-[1vw] text-[1vw] max-[750px]:py-[2.1vw] max-[750px]:text-[1.5vw] max-[500px]:text-[2vw]`}
                        variant="custom">
                        <Calendar
                            className="w-[1vw]! h-[1vw]! max-[750px]:w-[1.5vw]! max-[750px]:h-[1.5vw]! max-[500px]:w-[2.2vw]! max-[500px]:h-[2.2vw]!"
                            color="#D5B1FA"
                        />
                        {releaseDate}
                    </Badge>
                    <Badge
                        className={`p-[1vw] text-[1vw] max-[750px]:py-[2.1vw] max-[750px]:text-[1.5vw] max-[500px]:text-[2vw]`}
                        variant="custom">
                        <Play
                            className="w-[1vw]! h-[1vw]! max-[750px]:w-[1.5vw]! max-[750px]:h-[1.5vw]! max-[500px]:w-[2.2vw]! max-[500px]:h-[2.2vw]!"
                            color="#D5B1FA"
                        />
                        Episodes: {episodes}
                    </Badge>
                    <Badge
                        className={`p-[1vw] text-[1vw] max-[750px]:py-[2.1vw] max-[750px]:text-[1.5vw] max-[500px]:text-[2vw]`}
                        variant="custom">
                        <Clock
                            className="w-[1vw]! h-[1vw]! max-[750px]:w-[1.5vw]! max-[750px]:h-[1.5vw]! max-[500px]:w-[2.2vw]! max-[500px]:h-[2.2vw]!"
                            color="#D5B1FA"
                        />
                        {duration}
                    </Badge>
                    <Badge
                        className={`p-[1vw] text-[1vw] max-[750px]:py-[2.1vw] max-[750px]:text-[1.5vw] max-[500px]:text-[2vw]`}
                        variant="custom">
                        <Star
                            className="w-[1vw]! h-[1vw]! max-[750px]:w-[1.5vw]! max-[750px]:h-[1.5vw]! max-[500px]:w-[2.2vw]! max-[500px]:h-[2.2vw]!"
                            color="#D5B1FA"
                        />
                        {score}
                    </Badge>
                </div>
                <div className="flex gap-1 flex-col ">
                    <div className="flex gap-2 items-center ">
                        <TextAlignStart
                            className="w-[1vw]! h-[1vw]! max-[1000px]:w-[1.3vw]! max-[1000px]:h-[1.3vw]!  max-[500px]:w-[3vw]! max-[500px]:h-[3vw]!"
                            size={20}
                            color="#D5B1FA"
                        />
                        <h3 className="font-semibold text-[1vw] max-[1000px]:text-[1.5vw] max-[500px]:text-[2.5vw]">
                            Introduction
                        </h3>
                    </div>
                    <p
                        className="h-28 max-[1250px]:h-18 max-[1500px]:h-25 max-[1000px]:h-16 overflow-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-neutral-900 [&::-webkit-scrollbar-thumb]:bg-violet-300 [&::-webkit-scrollbar-thumb]:rounded-full max-[1000px]:text-[1.5vw] text-[1vw]
                    max-[500px]:text-[2vw]">
                        {intro}
                    </p>
                </div>
                <div>
                    <Button
                        asChild
                        className="text-[1.1vw] p-[1.1vw] max-[1000px]:text-[1.4vw] max-[550px]:text-[2.8vw] max-[1200px]:scale-70 max-[1200px]:hover:scale-80 max-[1000px]:scale-100 max-[1000px]:hover:scale-105 origin-left"
                        variant="custom"
                        onClick={() => {
                            getRelWatchOrder(id);
                        }}>
                        <Link to={`/watch-order/anime/${id}`}>
                            See Watch Order
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MostPopularCard;
