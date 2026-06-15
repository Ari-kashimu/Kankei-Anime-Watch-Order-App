import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogOverlay } from "@/components/ui/dialog";
import SearchBoxButton from "./SearchBoxButton";

const SearchBox = ({ homeRef, position }) => {
    return (
        <Dialog>
            <DialogOverlay className="bg-black/40 backdrop-blur-lg transition-opacity duration-150" />

            <DialogTrigger asChild>
                <SearchBoxButton position={position} homeRef={homeRef} />
            </DialogTrigger>

            <DialogContent className="bg-white/10 backdrop-blur-2xl duration-150 max-w-2xl! border data-open:slide-in-from-top-5 border-white/20 top-[10%] translate-y-0 transition-opacity">
                <div className="border-b border-neutral-500 px-4 py-3">
                    <input
                        type="text"
                        placeholder="Search anime watch orders..."
                        className="w-full bg-transparent outline-none text-white placeholder:text-neutral-400"
                    />
                </div>

                <div className="max-h-100 overflow-y-auto flex gap-1 flex-col">
                    <div className="p-2 flex gap-5 items-center transition-all text-white rounded hover:bg-black/30  cursor-pointer">
                        <div>
                            <img
                                className="w-15 rounded"
                                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124194-TJlqMMR7BGn9.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold tracking-wider">
                                Fruit Basket
                            </h3>
                            <p className="text-neutral-400">
                                2007 | TV | ★ 8.62
                            </p>
                        </div>
                    </div>

                    <div className="p-2 flex gap-5 items-center transition-all text-white rounded hover:bg-black/30 cursor-pointer">
                        <div>
                            <img
                                className="w-15 rounded"
                                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124194-TJlqMMR7BGn9.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold tracking-wider ">
                                Fruit Basket
                            </h3>
                            <p className="text-neutral-400">
                                2007 | TV | ★ 8.62
                            </p>
                        </div>
                    </div>

                    <div className="p-2 flex gap-5 items-center transition-all text-white rounded hover:bg-black/30  cursor-pointer">
                        <div>
                            <img
                                className="w-15 rounded"
                                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124194-TJlqMMR7BGn9.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold tracking-wider ">
                                Fruit Basket
                            </h3>
                            <p className="text-neutral-400">
                                2007 | TV | ★ 8.62
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SearchBox;
