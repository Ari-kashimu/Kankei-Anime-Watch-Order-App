import React from "react";

import HeroMain from "./HeroMain";
import RecentlyAddedSection from "./RecentlyAddedSection";
import Navbar from "../layout/Navbar";

const HeroContent = ({ homeRef }) => {
    return (
        <div className="w-full h-screen flex flex-col justify-between">
            <Navbar homeRef={homeRef} />
            <HeroMain />
            <RecentlyAddedSection />
        </div>
    );
};

export default HeroContent;
