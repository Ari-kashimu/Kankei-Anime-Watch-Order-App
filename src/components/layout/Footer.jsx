import React from "react";
import VersionBadge from "../shared/VersionBadge";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="w-full h-fit flex flex-col gap-15 bg-black/50 backdrop-blur-xl  px-30 py-6 border-t border-white/30">
            <div className="flex justify-between">
                {/*  */}
                <div className="flex flex-col gap-2.5">
                    <div className="flex gap-1.5 items-center">
                        <div className="flex gap-1.5 items-center">
                            <img
                                className="w-8 h-8 "
                                src="Kankei-2.png"
                                alt="Logo"
                            />
                            <span className="text-xl font-bold">Kankei</span>
                        </div>
                        <VersionBadge />
                    </div>
                    <p className="text-xs text-neutral-200">
                        Follow the true story flow with accurate watch orders |
                        Everything you need to <br></br> watch anime in the
                        correct sequence.
                    </p>
                </div>

                {/*  */}
                <div className="flex flex-col gap-2 item-center">
                    <div>
                        <h4 className="font-semibold text-neutral-300 uppercase">
                            Browse
                        </h4>
                    </div>
                    <div className="flex flex-col text-neutral-400 gap-2 text-sm">
                        <a
                            className="hover:translate-x-1.5 ease-in-out transition-all duration-200 will-change-transform"
                            href="https://github.com/Ari-kashimu/Kankei-Anime-Watch-Order-App"
                            target="_blank">
                            Github
                        </a>
                        <a
                            className="hover:translate-x-1.5 ease-in-out transition-all duration-200 will-change-transform"
                            href="https://ko-fi.com/"
                            target="_blank">
                            Kofi
                        </a>
                        <a
                            className="hover:translate-x-1.5 ease-in-out transition-all duration-200 will-change-transform"
                            href="#">
                            Contact
                        </a>

                        <Link
                            className="hover:translate-x-1.5 ease-in-out transition-all duration-200 will-change-transform"
                            to="/about">
                            About
                        </Link>
                    </div>
                </div>

                {/*  */}
                <div className="flex flex-col gap-2 item-center">
                    <div>
                        <h4 className="font-semibold text-neutral-200 uppercase">
                            Legal
                        </h4>
                    </div>
                    <div className="flex flex-col text-neutral-400 gap-2 text-sm">
                        <Link
                            className="hover:translate-x-1.5 ease-in-out transition-all duration-200 will-change-transform"
                            to="/about">
                            Disclaimer
                        </Link>
                        <Link
                            className="hover:translate-x-1.5 ease-in-out transition-all duration-200 will-change-transform"
                            to="/about">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="border-t border-white/30 py-2">
                <p className="text-xs text-neutral-400">
                    All watch orders, data, and media metadata are managed and
                    served by Kankei. <br></br> Powered by
                    <span>
                        <a
                            className="underline mx-1"
                            href="https://jikan.moe/"
                            target="_blank">
                            Jikan-Api
                        </a>
                    </span>
                    which is base on
                    <span>
                        <a
                            className="underline mx-1"
                            href="https://myanimelist.net/"
                            target="_blank">
                            MyAnimeList
                        </a>
                    </span>
                    © 2026-27 Kankei. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
