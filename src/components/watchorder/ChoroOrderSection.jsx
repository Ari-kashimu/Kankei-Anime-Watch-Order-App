import React from "react";
import ChoroOrderTile from "./ChoroOrderTile";
import { Logs } from "lucide-react";

const ChoroOrderSection = () => {
    return (
        <div className="flex flex-col gap-6 items-center">
            <ChoroOrderTile />
            <ChoroOrderTile />
            <ChoroOrderTile />
            <div className="w-200 text-center text-white/80">
                The Recommended Order section provides the best possible watch
                order for both first-time viewers and rewatchers. Depending on
                the anime, the recommended order may vary—for some series, Like
                some animes are best to watch in release order and other in
                chorological order.
            </div>
        </div>
    );
};

export default ChoroOrderSection;
