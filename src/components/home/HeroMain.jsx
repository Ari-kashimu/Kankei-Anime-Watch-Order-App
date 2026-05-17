import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const HeroMain = () => {
    return (
        <div className="px-12 flex flex-col gap-6">
            <h1 className="text-6xl font-bold">
                Watch Anime the <br></br> Way It Was Meant to Be
            </h1>
            <p>
                Follow the true story flow with accurate watch orders |
                Everything you need to <br></br> watch anime in the correct
                sequence.
            </p>

            <Button variant="custom">
                <Search className="w-5! h-5!" strokeWidth={3} />
                Discover Watch Order
            </Button>
        </div>
    );
};

export default HeroMain;
