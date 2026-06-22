import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from "@/components/ui/dialog";
import { DialogOverlay } from "@/components/ui/dialog";
import SearchBoxButton from "./SearchBoxButton";
import { useAniSearch } from "./useAniSearch";
import SearchResultTile from "../animeSearch/SearchResultTile";
import { Skeleton } from "@/components/ui/skeleton";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const SearchBox = ({ homeRef, position }) => {
    const [aniName, setAniName] = useState("");

    const { search, aniSearchResult, isLoading } = useAniSearch();

    useEffect(() => {
        const timer = setTimeout(() => {
            search(aniName);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [aniName]);

    console.log(aniSearchResult);

    return (
        <Dialog>
            <DialogOverlay className="bg-black/40 backdrop-blur-lg transition-opacity duration-150" />

            <DialogTrigger asChild>
                <SearchBoxButton position={position} homeRef={homeRef} />
            </DialogTrigger>

            <DialogContent className="bg-white/10 backdrop-blur-2xl duration-150 max-w-2xl! border data-open:slide-in-from-top-5 border-white/20 top-[10%] translate-y-0 transition-opacity">
                <VisuallyHidden>
                    <DialogTitle>Search anime</DialogTitle>
                    <DialogDescription>
                        Search for your favorite anime.
                    </DialogDescription>
                </VisuallyHidden>
                {/*  */}
                <div className="border-b border-neutral-500 px-4 py-3">
                    <input
                        value={aniName}
                        onChange={(e) => {
                            setAniName(e.target.value);
                        }}
                        type="text"
                        placeholder="Search anime watch orders..."
                        className="w-full bg-transparent outline-none text-white placeholder:text-neutral-400"
                    />
                </div>

                {isLoading ? (
                    <div className="min-h-100 overflow-y-auto flex gap-1 flex-col">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div
                                key={i}
                                className="p-2 flex gap-5 items-center">
                                <Skeleton className="w-16 h-22 rounded bg-white/20" />
                                <div className="flex flex-col gap-2 flex-1">
                                    <Skeleton className="h-4 w-3/4 bg-white/20" />
                                    <Skeleton className="h-3 w-1/4 bg-white/20" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    aniSearchResult.length > 0 && (
                        <div className="min-h-100 overflow-y-auto flex gap-1 flex-col">
                            {aniSearchResult.map((ani) => (
                                <SearchResultTile
                                    key={ani.mal_id}
                                    img={ani.images.jpg.image_url}
                                    name={ani.title}
                                    releaseDate={ani.aired.prop.from.year}
                                    id={ani.mal_id}
                                    type={ani.type}
                                />
                            ))}
                        </div>
                    )
                )}
            </DialogContent>
        </Dialog>
    );
};

export default SearchBox;

// TODO: Make routing for paging
