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

import SearchResultTile from "../animeSearch/SearchResultTile";
import { Skeleton } from "@/components/ui/skeleton";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useAniSearchQuery } from "@/logic/services/aniSearchQuery";

const SearchBox = ({ homeRef, position }) => {
    const [aniName, setAniName] = useState("");
    const [open, setOpen] = useState(false);

    const {
        search,
        aniSearchResult,
        setAniSearchResult,
        isLoading,
        hasSearched,
        setHasSearched,
    } = useAniSearchQuery();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (aniName.length >= 3) {
                search(aniName);
            }
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [aniName]);

    function clearStates() {
        setTimeout(() => {
            setAniName("");
            setAniSearchResult([]);
            setHasSearched(false);
        }, 700);
    }

    return (
        <Dialog
            open={open}
            onOpenChange={(isOpen) => {
                setOpen(isOpen);

                if (!isOpen) {
                    clearStates();
                }
            }}>
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
                    (aniSearchResult.length > 0 && (
                        <div className="min-h-100 overflow-y-auto flex gap-1 flex-col">
                            {aniSearchResult.map((ani) => (
                                <SearchResultTile
                                    clearStates={clearStates}
                                    setOpen={setOpen}
                                    key={ani.id}
                                    malId={ani.malId}
                                    eng_name={ani.english}
                                    name={ani.name}
                                    kind={ani.kind}
                                    score={ani.score}
                                    status={ani.status}
                                    airedOn={ani.airedOn.year}
                                    img={
                                        ani.poster?.main2xUrl ||
                                        "https://i.ibb.co/pvbTzg70/default.jpg"
                                    }
                                />
                            ))}
                        </div>
                    )) ||
                    (hasSearched && aniSearchResult.length === 0 && (
                        <div className="w-full flex flex-col text-white  items-center justify-center">
                            <h3 className="font-bold text-lg mb-3">
                                ˚‧º·( ˃̣̣̥⌓˂̣̣̥ )‧º·˚
                            </h3>
                            <h3 className="font-bold text-lg">
                                No such anime exists
                            </h3>
                            <p className="text-neutral-300 text-sm">
                                Mind looking at what you've written
                            </p>
                        </div>
                    ))
                )}
            </DialogContent>
        </Dialog>
    );
};

export default SearchBox;
