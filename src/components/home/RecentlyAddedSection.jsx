import { Search } from "lucide-react";
import React from "react";
import { ListPlus } from "lucide-react";
import RecentlyAddedSlider from "./RecentlyAddedSlider";

const RecentlyAdded = () => {
    return (
        <div className="flex flex-col gap-2.5 px-12 py-6">
            <div className="flex gap-2 items-center">
                <ListPlus size={18} />
                <h1 className="font-semibold text-sm">Recently Added</h1>
            </div>
            <div>
                <RecentlyAddedSlider />
            </div>
        </div>
    );
};

export default RecentlyAdded;
