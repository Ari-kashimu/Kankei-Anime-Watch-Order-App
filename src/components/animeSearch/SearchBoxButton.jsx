import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

const SearchBoxButton = ({ position, homeRef, ...props }) => {
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
            className={` ${scroll ? "left-1/2 -translate-x-1/2 max-[490px]:bottom-[3%]" : position} fixed z-30 w-100 bg-white/20 backdrop-blur-2xl px-6 py-3 rounded-2xl flex items-center gap-3 scale-80 cursor-pointer hover:scale-90 transition-all duration-300 will-change-transform max-[1200px]:scale-65 max-[1200px]:hover:scale-75
            max-[900px]:scale-55 max-[900px]:hover:scale-65 max-[560px]:scale-45 max-[560px]:hover:scale-55 max-[490px]:scale-70 max-[400px]:scale-60`}>
            <Search
                className="max-[1200px]:size-4.5"
                size={20}
                color="#D8B4FE"
            />
            Search Anime...
        </button>
    );
};

export default SearchBoxButton;
