import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import React from "react";

export const ExternalLinksForAnime = ({ externalLinks }) => {
    const fliteredLinks = externalLinks.filter(
        (link) =>
            link.kind === "myanimelist" ||
            link.kind === "official_site" ||
            link.kind === "anime_db",
    );

    return (
        <NavigationMenu>
            <NavigationMenuItem className={`list-none`}>
                <NavigationMenuTrigger className="border  data-open:hover:bg-white/20 data-open:focus:bg-white/20 border-white py-0 px-3 h-7 text-sm rounded-full bg-white/20 hover:bg-white/20 focus:bg-white/20 data-popup-open:bg-white/20 data-popup-open:hover:bg-white/20 data-open:bg-white/20">
                    Links
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-0 bg-white/20">
                    {fliteredLinks.length > 0 && (
                        <ul className="flex p-2 gap-5 text-white text-sm ">
                            {fliteredLinks.map((link) => {
                                return (
                                    <li>
                                        <a
                                            target="_blank"
                                            href={link.url}
                                            className="capitalize hover:underline! no-underline!  hover:text-white! ">
                                            {link.kind}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenu>
    );
};
