import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

const SearchBoxButton = ({ homeRef, ...props }) => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const currentRef = homeRef?.current;
        if (!currentRef) return;

        const handleScroll = () => {
            const scrollTop = currentRef.scrollTop;
            const scrollableHeight =
                currentRef.scrollHeight - currentRef.clientHeight;
            const scrollPercentage = scrollTop / scrollableHeight;

            setScroll(scrollPercentage > 0.023);
        };

        currentRef.addEventListener("scroll", handleScroll);

        return () => {
            currentRef.removeEventListener("scroll", handleScroll);
        };
    }, [homeRef]);

    return (
        <button
            type="button"
            {...props}
            className={` ${scroll ? "left-1/2 -translate-x-1/2" : "left-[50.5%] -translate-x-3/4"} fixed z-30 w-100 bg-white/20 backdrop-blur-2xl px-6 py-3 rounded-2xl flex items-center gap-3 scale-80 cursor-pointer hover:scale-90 transition-all duration-300 will-change-transform `}>
            <Search size={20} color="#D8B4FE" />
            Search Anime...
        </button>
    );
};

export default SearchBoxButton;
