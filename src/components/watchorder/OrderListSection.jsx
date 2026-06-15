import React from "react";
import AiredOrderTile from "./AiredOrderTile.jsx";
import { Logs } from "lucide-react";
import ChoroOrderTile from "./ChoroOrderTile.jsx";

const OrderListSection = () => {
    return (
        <div className="px-24 py-6 w-full h-fit flex flex-col gap-6 border-t border-white/10">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                    <Logs size={22} />
                    <h2 className="text-2xl font-semibold">Release Order</h2>
                </div>

                <div className="flex flex-col gap-6">
                    <AiredOrderTile />
                    <AiredOrderTile />
                    <AiredOrderTile />
                    <AiredOrderTile />
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                    <Logs size={22} />
                    <h2 className="text-2xl font-semibold">
                        Chronological Order
                    </h2>
                </div>

                <div className="flex flex-col gap-6">
                    <ChoroOrderTile />
                    <ChoroOrderTile />
                    <ChoroOrderTile />
                    <ChoroOrderTile />
                </div>
            </div>

            <div className="w-full font-bold text-2xl flex justify-center items-center">
                Total Entries : 4 | Total Episodes : 40
            </div>
        </div>
    );
};

export default OrderListSection;
