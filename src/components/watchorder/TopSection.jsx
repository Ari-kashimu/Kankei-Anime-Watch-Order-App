import React from "react";
import { Button } from "../ui/button";
import { House } from "lucide-react";
import SearchBox from "../animeSearch/SearchBox";
import Navbar from "../layout/Navbar";
import { Link } from "react-router";

const TopSection = () => {
    return (
        <div className="w-full py-4 px-6 flex items-center fixed z-10 ">
            <SearchBox position="left-1/2 -translate-x-1/2" />

            <Button
                className="bg-white/20 py-4 hover:scale-105 duration-300 will-change-transform text-white border-2 hover:bg-transparent cursor-pointer
                        border-white/80"
                asChild
                variant="secondary">
                <Link to="/">
                    <House />
                    Home
                </Link>
            </Button>
        </div>
    );
};

export default TopSection;
