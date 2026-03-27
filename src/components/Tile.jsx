import React from "react";

const Tile = ({
    name,
    img,
    type,
    ep,
    duration,
    score,
    fromTo,
    mal_url,
    eng_name,
}) => {
    return (
        <li className="h-45 rounded-2xl bg-neutral-900 p-4 flex justify-between items-center">
            {/* //* Image and Anime Name */}
            <div className="h-full flex gap-10">
                <div className="h-full rounded overflow-hidden">
                    <img
                        className="h-full w-26 object-cover"
                        src={img}
                        alt="Anime Cover Image"
                    />
                </div>
                <div className="h-full flex flex-col justify-evenly">
                    <div>
                        <h3 className="text-4xl">{name}</h3>
                        <p className="text-rose-400 text-sm mt-1.5 tracking-wider">
                            {eng_name}
                        </p>
                    </div>
                    <p className="text-neutral-400 flex gap-2.5">
                        <span className="py-1 px-2 bg-neutral-950 rounded">
                            {fromTo}
                        </span>
                        <span className="py-1 px-2 bg-neutral-950 rounded text-rose-300">
                            {type}
                        </span>
                        <span className="py-1 px-2 text-blue-200 bg-neutral-950 rounded">
                            Episodes: {ep}
                        </span>
                        <span className="py-1 px-2 bg-neutral-950 rounded">
                            {duration.toLowerCase().includes("unknow")
                                ? "Not Yet Release"
                                : duration}
                        </span>
                        <span className="text-orange-300 py-1 px-2 bg-neutral-950 rounded">
                            ★{score}
                        </span>
                    </p>
                </div>
            </div>

            {/* //* Explore Link */}
            <div>
                <a
                    target="_blank"
                    href={mal_url}
                    class="bg-gray-100 text-center w-40 rounded-2xl h-14 relative text-black text-xl font-semibold group cursor-pointer flex items-center justify-center">
                    <div class="bg-rose-500 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-1 group-hover:w-38 z-10 duration-500">
                        <svg
                            class="rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1024 1024"
                            height="25px"
                            width="25px">
                            <path
                                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                                fill="#fff"></path>
                            <path
                                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                                fill="#fff"></path>
                        </svg>
                    </div>

                    <p class="translate-x-2">Explore</p>
                </a>
            </div>
        </li>
    );
};

export default Tile;
