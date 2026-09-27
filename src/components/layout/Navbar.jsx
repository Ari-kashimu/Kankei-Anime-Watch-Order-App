import React from "react";
import { Button } from "../ui/button";
import { Coffee } from "lucide-react";
import SearchBox from "@/components/animeSearch/SearchBox";
import { Link } from "react-router";

const Navbar = ({ homeRef }) => {
    return (
        <div className="w-full py-6 px-12 max-[550px]:px-6 flex justify-between items-center ">
            <Link to="/">
                <div className="flex gap-1.5 items-center">
                    <img
                        className="w-8 h-8 max-[1200px]:w-6 max-[1200px]:h-6"
                        src="Kankei-2.png"
                        alt="Logo"
                    />
                    <span className="text-xl max-[1200px]:text-sm font-bold">
                        Kankei
                    </span>
                </div>
            </Link>

            <SearchBox
                position="left-[50.5%] -translate-x-3/4 max-[900px]:left-[54.5%] max-[700px]:left-[64.5%] max-[560px]:left-[69%] 
                max-[490px]:left-[50%] max-[490px]:bottom-[3%] max-[490px]:-translate-x-1/2"
                homeRef={homeRef}
            />

            <div className="flex items-center gap-20 max-[950px]:gap-10 max-[900px]:gap-0">
                <Button
                    className=" bg-[rgba(255,255,255,0.3)] gap-1.5 hover:bg-[rgba(255,255,255,0.3)] hover:-translate-y-1   backdrop-blur-2xl text-white transition-all  duration-300 max-[1200px]:scale-85 "
                    variant="secondary"
                    size="sm"
                    asChild>
                    <a
                        target="_blank"
                        href="https://github.com/Ari-kashimu/Kankei-Anime-Watch-Order-App">
                        <span>
                            <img
                                className="w-4"
                                src="https://i.ibb.co/jBr6MTT/github-1.png"
                                alt="Github Logo"
                            />
                        </span>
                        <span className="max-[700px]:hidden">Github</span>
                    </a>
                </Button>
                <Button
                    className="bg-[rgba(255,255,255,0.3)] gap-1.5 hover:bg-[rgba(255,255,255,0.3)] hover:-translate-y-1  backdrop-blur-2xl text-white  transition-all  duration-300 max-[1200px]:scale-85 "
                    variant="secondary"
                    size="sm"
                    asChild>
                    <a
                        target="_blank"
                        href="https://www.patreon.com/cw/Ari_ken">
                        <Coffee />
                        <span className="max-[700px]:hidden">
                            Buy me a coffee
                        </span>
                    </a>
                </Button>
            </div>
        </div>
    );
};

export default Navbar;
