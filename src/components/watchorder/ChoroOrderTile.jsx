import React from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

const ChoroOrderTile = () => {
    return (
        <div className="border p-2 w-full border-white/20 rounded-2xl h-80  flex gap-5 items-center justify-between ">
            <div className="flex  h-full gap-5 items-center">
                <img
                    className="h-full rounded-xl w-50 object-cover"
                    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116589-KawXHB6sApFt.jpg"
                    alt=""
                />
                <div className="flex flex-col gap-5 justify-center">
                    <h1 className="text-3xl font-semibold mb-1 wrap-break-wordbreak-words ">
                        Steins;Gate 0: Valentine's of Crystal Polymorphism
                        -Bittersweet Intermedio-
                    </h1>

                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="why"
                        className="max-w-xl">
                        <AccordionItem value="why">
                            <AccordionTrigger className={`capitalize`}>
                                Why Watch Here?
                            </AccordionTrigger>
                            <AccordionContent className={` h-fit`}>
                                This is the first sea
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="fillers">
                            <AccordionTrigger className={`capitalize`}>
                                Does it have any fillers?
                            </AccordionTrigger>
                            <AccordionContent className={` h-fit`}>
                                Returns accepted within 30 days. Items must be
                                unused and in original packaging. Refunds
                                processed within 5-7
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="flex gap-5">
                        <Button
                            asChild
                            variant="custom"
                            className=" hover:text-white! no-underline!">
                            <a href="#">Visit MAL</a>
                        </Button>
                        <Button
                            asChild
                            variant="custom"
                            className=" hover:text-white! no-underline!">
                            <a href="#">Visit Shiki</a>
                        </Button>
                    </div>
                </div>
            </div>

            <div className=" p-20 flex justify-center items-center font-bold text-3xl h-full ">
                1
            </div>
        </div>
    );
};

export default ChoroOrderTile;
