import React, { useState } from "react";
import AiredOrderTile from "./AiredOrderTile.jsx";
import { Logs } from "lucide-react";
import { Music } from "lucide-react";
import { Waypoints } from "lucide-react";
import { Star } from "lucide-react";
import ChoroOrderTile from "./ChoroOrderTile.jsx";
import { useRelWatchOrderContext } from "@/context/relWatchOrderContext.jsx";
import { Skeleton } from "../ui/skeleton.jsx";
import CheckFilter from "../layout/CheckFilter.jsx";
import ChoroOrderSection from "./ChoroOrderSection.jsx";
import AiredOrderSection from "./AiredOrderSection.jsx";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import RelatedGroupSection from "./RelatedGroupSection.jsx";
import MusicSection from "./MusicSection.jsx";

const OrderListSection = () => {
    const { relWatchOrder } = useRelWatchOrderContext();

    // Filter to separate music ,pv and cm from release order
    const musicEntries = ["music", "pv", "cm"];
    const filteredMusic = relWatchOrder.filter((anime) => {
        return musicEntries.includes(anime.kind);
    });
    console.log(filteredMusic);

    const entriesWithoutMusic = [
        "tv",
        "special",
        "tv_special",
        "movie",
        "ova",
        "ona",
    ];
    const orderWithoutMusic = relWatchOrder.filter((anime) => {
        return entriesWithoutMusic.includes(anime.kind);
    });
    console.log(orderWithoutMusic);

    const [filters, setFilters] = useState({
        tv: false,
        special: false,
        tv_special: false,
        movie: false,
        ova: false,
        ona: false,
    });

    const filteredAnime = orderWithoutMusic.filter((anime) => {
        return !filters[anime.kind];
    });

    return (
        <div className="px-24 py-6 w-full h-fit  flex flex-col gap-6 border-t border-white/10">
            <Accordion
                className="flex flex-col "
                type="single"
                collapsible
                defaultValue="release order">
                {/* Release Section */}
                <AccordionItem value="release order">
                    <AccordionTrigger className="flex items-center gap-3 hover:no-underline hover:scale-101 duration-400 cursor-pointer">
                        <Logs size={32} />
                        <h2 className="text-4xl font-bold">Release Order</h2>
                    </AccordionTrigger>
                    <AccordionContent className="w-full h-full flex flex-col gap-6">
                        <div>
                            <CheckFilter
                                className="ml-auto"
                                filters={filters}
                                setFilters={setFilters}
                            />
                        </div>
                        <AiredOrderSection
                            filteredAnime={filteredAnime}
                            orderWithoutMusic={orderWithoutMusic}
                        />
                    </AccordionContent>
                </AccordionItem>

                {/* Choro Section */}
                {/* <AccordionItem value="choro order">
                    <AccordionTrigger className="flex items-center gap-3 hover:no-underline hover:scale-101 duration-400 cursor-pointer">
                        <Star size={32} />
                        <h2 className="text-4xl font-bold">
                            Recommended Order
                        </h2>
                    </AccordionTrigger>
                    <AccordionContent className="w-full h-full flex flex-col gap-6">
                        <ChoroOrderSection />
                    </AccordionContent>
                </AccordionItem> */}

                {/* Music Section */}
                {filteredMusic.length !== 0 && (
                    <AccordionItem value="music">
                        <AccordionTrigger className="flex items-center gap-3 hover:no-underline hover:scale-101 duration-400 cursor-pointer">
                            <Music size={32} />
                            <h2 className="text-4xl font-bold">
                                Related Music And Others
                            </h2>
                        </AccordionTrigger>
                        <AccordionContent className="w-full h-full flex flex-col gap-6">
                            <MusicSection filteredMusic={filteredMusic} />
                        </AccordionContent>
                    </AccordionItem>
                )}

                {/* Indirect Related Section */}
                {/* <AccordionItem className="no-scrollbar!" value="related groups">
                    <AccordionTrigger className="flex items-center gap-3 hover:no-underline hover:scale-101 duration-400 cursor-pointer">
                        <Waypoints size={32} />
                        <h2 className="text-4xl font-bold">
                            Indirect Relations
                        </h2>
                    </AccordionTrigger>
                    <AccordionContent className="w-full h-full flex flex-col gap-6">
                        <RelatedGroupSection />
                    </AccordionContent>
                </AccordionItem> */}
            </Accordion>
        </div>
    );
};

export default OrderListSection;
