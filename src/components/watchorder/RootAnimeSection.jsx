import React, { useEffect, useState } from "react";
import { TextAlignStart } from "lucide-react";
import { Badge } from "../ui/badge";
import { Calendar } from "lucide-react";
import { Star } from "lucide-react";
import { Clock } from "lucide-react";
import { Play } from "lucide-react";
import { Button } from "../ui/button";
import { useRelWatchOrderContext } from "@/context/relWatchOrderContext";
import { fetchRootAnime } from "@/logic/services/apiRequests";
import { Skeleton } from "../ui/skeleton";

const RootAnimeSection = ({ rootAnime, isLoading }) => {
    const [rootAnimeFromJikan, setRootAnimeFromJikan] = useState({});

    useEffect(() => {
        async function loadAnime() {
            if (!rootAnime) return;

            const data = await fetchRootAnime(rootAnime.malId);
            setRootAnimeFromJikan(data);
        }
        loadAnime();
    }, [rootAnime]);

    return isLoading ? (
        <Skeleton className="px-24 h-90 flex w-full justify-between gap-5 bg-transparent ">
            <Skeleton className="w-65 h-full rounded-2xl  bg-white/30" />
            <Skeleton className="w-[85%] h-full flex flex-col gap-5 justify-center rounded-2xl  bg-transparent">
                <div className="flex flex-col gap-2">
                    <Skeleton className="w-100 h-16 bg-white/30" />
                    <Skeleton className="w-60 h-3 bg-white/30" />
                </div>

                <div className="w-full">
                    <Skeleton className="w-full h-25 bg-white/30" />
                </div>

                <div className="flex gap-2.5">
                    <Skeleton className="w-22 h-7.5 bg-white/30 rounded-full" />
                    <Skeleton className="w-22 h-7.5 bg-white/30 rounded-full" />
                    <Skeleton className="w-22 h-7.5 bg-white/30 rounded-full" />
                    <Skeleton className="w-22 h-7.5 bg-white/30 rounded-full" />
                </div>

                <div className="flex gap-5">
                    <Skeleton className="w-28 h-11 bg-white/30" />
                    <Skeleton className="w-28 h-11 bg-white/30" />
                </div>
            </Skeleton>
        </Skeleton>
    ) : (
        <div className="px-24 flex h-90 w-full justify-between gap-5 ">
            <div>
                <img
                    className="rounded-2xl h-full w-65  object-cover"
                    src={rootAnime?.poster.main2xUrl}
                    alt={rootAnime?.name}
                />
            </div>

            <div className="w-[85%] flex flex-col justify-center gap-5">
                <div>
                    <h1 className="text-5xl font-semibold mb-2.5 ">
                        {rootAnime?.english || rootAnime?.name}
                    </h1>
                    <p>{rootAnime?.japanese || rootAnime?.name}</p>
                </div>

                <div>
                    <p className="h-25 overflow-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-neutral-900 [&::-webkit-scrollbar-thumb]:bg-white/80 [&::-webkit-scrollbar-thumb]:rounded-full">
                        {rootAnimeFromJikan?.synopsis}
                    </p>
                </div>

                <div className="flex gap-2.5">
                    <Badge variant="custom">
                        <Calendar className="w-4! h-4!" color="#fff" />
                        {rootAnime?.airedOn.year}
                    </Badge>
                    <Badge variant="custom">
                        <Play className="w-4! h-4!" color="#fff" />
                        Episodes: {rootAnime?.episodes}
                    </Badge>
                    <Badge variant="custom">
                        <Clock className="w-4! h-4!" color="#fff" />
                        {rootAnime?.duration} min
                    </Badge>
                    <Badge variant="custom">
                        <Star className="w-4! h-4!" color="#fff" />
                        {rootAnime?.score}
                    </Badge>
                </div>

                <div className="flex gap-5">
                    <Button variant="custom" asChild>
                        <a target="_blank" href={rootAnimeFromJikan?.url}>
                            Visit MAL
                        </a>
                    </Button>
                    <Button variant="custom" asChild>
                        <a target="_blank" href={rootAnime?.url}>
                            Visit Shiki
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RootAnimeSection;
