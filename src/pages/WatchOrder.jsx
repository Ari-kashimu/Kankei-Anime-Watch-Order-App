import SearchBox from "@/components/animeSearch/SearchBox";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TopSection from "@/components/watchorder/TopSection";
import WatchOrderMain from "@/components/watchorder/WatchOrderMain";
import React from "react";

const WatchOrder = () => {
    return (
        <div
            className="w-full h-screen overflow-auto relative z-15 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-neutral-950
                [&::-webkit-scrollbar-thumb]:bg-white/80 [&::-webkit-scrollbar-thumb]:rounded-full">
            <TopSection />
            <WatchOrderMain />
            <Footer />
        </div>
    );
};

export default WatchOrder;
