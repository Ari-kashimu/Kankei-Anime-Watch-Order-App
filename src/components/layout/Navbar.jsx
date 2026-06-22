import React from "react";
import { Button } from "../ui/button";
import { Coffee } from "lucide-react";
import SearchBox from "@/components/animeSearch/SearchBox";
import { Link } from "react-router";

const Navbar = ({ homeRef }) => {
    return (
        <div className="w-full py-6 px-12 flex justify-between items-center  bg-linear-to-t from-transparent to-neutral-950 ">
            <Link to="/">
                <div className="flex gap-1.5 items-center">
                    <img className="w-8 h-8 " src="Kankei-2.png" alt="Logo" />
                    <span className="text-xl font-bold">Kankei</span>
                </div>
            </Link>

            <SearchBox
                position="left-[50.5%] -translate-x-3/4"
                homeRef={homeRef}
            />

            <div className="flex items-center gap-20">
                <Button
                    className="bg-[rgba(255,255,255,0.3)] gap-1.5 hover:bg-[rgba(255,255,255,0.3)] hover:-translate-y-1   backdrop-blur-2xl text-white transition-all  duration-300"
                    variant="secondary"
                    size="sm"
                    asChild>
                    <a
                        target="_blank"
                        href="https://github.com/Ari-kashimu/Kankei-Anime-Watch-Order-App">
                        <span>
                            <img
                                className="w-4"
                                src="src\assets\github-1.png"
                                alt="Github Logo"
                            />
                        </span>
                        Github
                    </a>
                </Button>
                <Button
                    className="bg-[rgba(255,255,255,0.3)] gap-1.5 hover:bg-[rgba(255,255,255,0.3)] hover:-translate-y-1  backdrop-blur-2xl text-white  transition-all  duration-300"
                    variant="secondary"
                    size="sm"
                    asChild>
                    <a target="_blank" href="https://ko-fi.com/">
                        <Coffee />
                        Buy me a coffee
                    </a>
                </Button>
            </div>
        </div>
    );
};

export default Navbar;
