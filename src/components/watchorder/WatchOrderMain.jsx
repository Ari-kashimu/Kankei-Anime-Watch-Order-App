import React, { useEffect } from "react";
import RootAnimeSection from "./RootAnimeSection";
import OrderListSection from "./OrderListSection";
import { useRelWatchOrderContext } from "@/context/relWatchOrderContext";
import { useParams } from "react-router";

const WatchOrderMain = () => {
    const { relWatchOrder, isLoading, getRelWatchOrder } =
        useRelWatchOrderContext();

    const { id } = useParams();

    useEffect(() => {
        if (!id) return;

        getRelWatchOrder(id);
    }, [id]);

    let rootAnime =
        relWatchOrder?.find(
            (ani) => ani.kind === "tv" || ani.kind === "movie",
        ) ?? relWatchOrder?.[0];

    return (
        <div className="w-full py-16 px-16 max-[1200px]:px-8 max-[550px]:px-4">
            <div className="bg-white/5 h-fit overflow-hidden backdrop-blur-2xl rounded-4xl">
                {/* Banner */}
                <img
                    className="w-full h-75 blur-lg brightness-75 object-cover"
                    src={rootAnime?.poster.main2xUrl}
                    alt={rootAnime?.name}
                />

                <div className="-translate-y-25 flex flex-col justify-between gap-8">
                    <RootAnimeSection
                        rootAnime={rootAnime}
                        isLoading={isLoading}
                    />
                    <OrderListSection />
                </div>
            </div>
        </div>
    );
};

export default WatchOrderMain;
