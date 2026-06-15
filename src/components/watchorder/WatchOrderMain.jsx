import React from "react";
import RootAnimeSection from "./RootAnimeSection";
import OrderListSection from "./OrderListSection";

const WatchOrderMain = () => {
    return (
        <div className="w-full py-16 px-16">
            <div className="bg-white/10 h-fit overflow-hidden backdrop-blur-xl rounded-4xl">
                {/* Banner */}
                <img
                    className="w-full h-75 blur-lg brightness-75 object-cover"
                    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116589-KawXHB6sApFt.jpg"
                    alt=""
                />

                <div className="-translate-y-25 flex flex-col justify-between gap-8">
                    <RootAnimeSection />
                    <OrderListSection />
                </div>
            </div>
        </div>
    );
};

export default WatchOrderMain;
