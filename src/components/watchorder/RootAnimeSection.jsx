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
        <Skeleton className="px-24 max-[1300px]:px-12 h-90 max-[880px]:h-fit flex max-[880px]:flex-col w-full max-[880px]:items-center justify-between gap-5 bg-transparent ">
            <Skeleton className="w-65 max-[1000px]:w-80 max-[880px]:w-60 h-full max-[880px]:h-80 rounded-2xl  bg-white/30" />
            <Skeleton className="w-[85%] max-[880px]:w-full h-full flex flex-col max-[880px]:items-center gap-5 justify-center rounded-2xl  bg-transparent">
                <div className="flex flex-col max-[880px]:items-center gap-2">
                    <Skeleton className="w-100 h-16 max-[450px]:w-60 max-[450px]:h-8 bg-white/30" />
                    <Skeleton className="w-60 h-3 max-[450px]:w-40 bg-white/30" />
                </div>

                <div className="w-full">
                    <Skeleton className="w-full h-25 bg-white/30" />
                </div>

                <div className="flex gap-2.5 max-[880px]:justify-center flex-wrap">
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
        <div className="px-24 max-[1300px]:px-12 max-[980px]:px-6  flex max-[880px]:flex-col h-90 max-[880px]:h-fit max-[880px]:items-center w-full justify-between gap-5 ">
            <div>
                <img
                    className="rounded-2xl h-full w-65 max-[1000px]:w-80  max-[880px]:w-60 object-cover"
                    src={rootAnime?.poster.main2xUrl}
                    alt={rootAnime?.name}
                />
            </div>

            <div className="w-[85%] max-[880px]:w-full flex flex-col justify-center max-[880px]:items-center gap-5">
                <div className="max-[880px]:text-center">
                    <h1 className="text-5xl font-semibold mb-2.5 max-[450px]:text-3xl ">
                        {rootAnime?.english || rootAnime?.name}
                    </h1>
                    <p className="max-[450px]:text-sm">
                        {rootAnime?.japanese || rootAnime?.name}
                    </p>
                </div>

                <div>
                    <p className="h-25 max-[450px]:text-sm max-[880px]:text-center overflow-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-neutral-900 [&::-webkit-scrollbar-thumb]:bg-white/80 [&::-webkit-scrollbar-thumb]:rounded-full">
                        {rootAnimeFromJikan?.synopsis}
                    </p>
                </div>

                <div className="flex gap-2.5 flex-wrap max-[880px]:justify-center">
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
