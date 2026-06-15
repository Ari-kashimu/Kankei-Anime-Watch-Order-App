import React from "react";
import { TextAlignStart } from "lucide-react";
import { Badge } from "../ui/badge";
import { Calendar } from "lucide-react";
import { Star } from "lucide-react";
import { Clock } from "lucide-react";
import { Play } from "lucide-react";
import { Button } from "../ui/button";

const RootAnimeSection = () => {
    return (
        <div className="px-24 flex w-full justify-between gap-5 ">
            <div>
                <img
                    className="rounded-2xl h-full  object-cover"
                    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116589-KawXHB6sApFt.jpg"
                    alt=""
                />
            </div>

            <div className="w-[85%] flex flex-col justify-between gap-5">
                <div>
                    <h1 className="text-5xl font-semibold mb-2.5 ">
                        Eighty Six
                    </h1>
                    <p>86</p>
                </div>

                <div>
                    <p className="h-25 overflow-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-neutral-900 [&::-webkit-scrollbar-thumb]:bg-white/80 [&::-webkit-scrollbar-thumb]:rounded-full">
                        Called “Juggernaut,” these are the unmanned combat
                        drones developed by the Republic of San Magnolia in
                        answer to the attacks by the autonomous unmanned drones
                        of the neighboring Empire of Giad, the “Legion”. But
                        they’re only unmanned in name. In reality, they are
                        piloted by the Eighty-sixers—those considered to be less
                        than human and treated as mere tools. Determined to
                        achieve his own mysterious ends, Shin, the captain of
                        Spearhead Squadron, which is comprised of Eighty-sixers,
                        continues to fight a hopeless war on a battlefield where
                        only death awaits him.
                    </p>
                </div>

                <div className="flex gap-2.5">
                    <Badge variant="custom">
                        <Calendar className="w-4! h-4!" color="#fff" />
                        2021
                    </Badge>
                    <Badge variant="custom">
                        <Play className="w-4! h-4!" color="#fff" />
                        Episodes: 24
                    </Badge>
                    <Badge variant="custom">
                        <Clock className="w-4! h-4!" color="#fff" />
                        24 min per Ep
                    </Badge>
                    <Badge variant="custom">
                        <Star className="w-4! h-4!" color="#fff" />
                        8.3
                    </Badge>
                </div>

                <div>
                    <Button variant="custom" asChild>
                        <a href="#">Vist MAL</a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RootAnimeSection;
