import HeroContent from "@/components/home/HeroContent";
import MiddleSection from "@/components/home/MiddleSection";
import MostPopularSection from "@/components/home/MostPopularSection";
import Footer from "@/components/layout/Footer";
import { GitBranch } from "lucide-react";
import { ZodiacSagittarius } from "lucide-react";
import { complexAnimeList, simpleAnimeList } from "@/logic/data/animeList";

import React, { useRef } from "react";

const HomePage = () => {
    const homeRef = useRef(null);

    return (
        <div
            className="w-full h-screen overflow-auto relative z-15 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-neutral-950
                [&::-webkit-scrollbar-thumb]:bg-white/80 [&::-webkit-scrollbar-thumb]:rounded-full"
            ref={homeRef}>
            <HeroContent homeRef={homeRef} />

            <MiddleSection
                sectionName="Most Complex"
                icon={<GitBranch size={30} color="#D5B1FA" />}
                animeList={complexAnimeList}
            />
            <MiddleSection
                sectionName="Most Simple"
                icon={<ZodiacSagittarius size={30} color="#D5B1FA" />}
                animeList={simpleAnimeList}
            />

            <MostPopularSection />
            <Footer />
        </div>
    );
};

export default HomePage;
