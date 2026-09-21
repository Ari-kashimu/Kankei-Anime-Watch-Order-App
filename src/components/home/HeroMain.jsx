import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const HeroMain = () => {
    return (
        <div className="px-12 max-[550px]:px-6 flex flex-col gap-6 max-[1200px]:gap-5 max-[850px]:gap-4 max-[600px]:items-center">
            <h1 className="text-6xl font-bold max-[600px]:text-center text-shadow-lg/10 max-[1200px]:text-5xl max-[850px]:text-4xl max-[550px]:text-3xl max-[415px]:text-2xl">
                Watch Anime the <br></br> Way It Was Meant to Be
            </h1>
            <p className="w-135 max-[600px]:text-center max-[610px]:w-100 max-[450px]:w-70 max-[1200px]:text-sm max-[610px]:text-xs">
                Follow the true story flow with accurate watch orders |
                Everything you need to watch anime in the correct sequence.
            </p>

            <Button
                variant="custom"
                className={`max-[1200px]:scale-90 max-[850px]:scale-80 max-[600px]:scale-70 w-fit  max-[600px]:origin-center max-[1200px]:origin-left`}>
                <Search className="w-5! h-5!" strokeWidth={3} />
                Discover Watch Order
            </Button>
        </div>
    );
};

export default HeroMain;
