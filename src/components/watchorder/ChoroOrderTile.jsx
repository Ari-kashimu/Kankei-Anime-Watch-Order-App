import React from "react";
import { Badge } from "../ui/badge";
import { Calendar } from "lucide-react";
import { Star } from "lucide-react";
import { Clock } from "lucide-react";
import { Play } from "lucide-react";
import { Button } from "../ui/button";

const ChoroOrderTile = () => {
    return (
        <div className="border p-2 border-white/20 rounded-2xl h-40  flex gap-5 items-center ">
            <img
                className="h-full rounded-xl"
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116589-KawXHB6sApFt.jpg"
                alt=""
            />
            <div className="flex flex-col gap-5 h-fit min-w-0">
                <div>
                    <h1 className="text-3xl font-semibold mb-1 truncate">
                        Eighty Six
                    </h1>
                    <p className="text-xs truncate">
                        86 Special Edition: Senya ni Akaku Hinageshi no Saku
                    </p>
                </div>

                <div className="flex gap-2.5">
                    <Badge className="text-xs p-2.5" variant="custom">
                        <Calendar className="w-3! h-3!" color="#fff" />
                        2021
                    </Badge>
                    <Badge className="text-xs p-2.5" variant="custom">
                        <Play className="w-3! h-3!" color="#fff" />
                        Episodes: 24
                    </Badge>
                    <Badge className="text-xs p-2.5" variant="custom">
                        <Clock className="w-3! h-3!" color="#fff" />
                        23 min
                    </Badge>
                    <Badge className="text-xs p-2.5" variant="custom">
                        <Star className="w-3! h-3!" color="#fff" />
                        8.3
                    </Badge>
                    <Badge className="text-xs p-2.5 bg-white/20" variant="custom" asChild>
                        <a href="#">Vist MAL</a>
                    </Badge>
                </div>
            </div>

            <div className="bg-white/30 ml-auto w-30 flex justify-center items-center font-bold text-3xl h-full rounded-b-2xl rounded-tr-3xl rounded-tl-[150px]">
                1
            </div>
        </div>
    );
};

export default ChoroOrderTile;
