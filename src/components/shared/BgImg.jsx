import React from "react";

const bg = [
    "/backgrounds/1.jpg",
    "/backgrounds/2.jpg",
    "/backgrounds/3.png",
    "/backgrounds/4.png",
    "/backgrounds/5.jpg",
    "/backgrounds/6.jpeg",
    "/backgrounds/7.png",
    "/backgrounds/8.jpg",
    "/backgrounds/9.jpg",
    "/backgrounds/10.jpg",
    "/backgrounds/11.png",
    "/backgrounds/12.jpg",
    "/backgrounds/13.png",
    "/backgrounds/14.png",
    "/backgrounds/15.png",
    "/backgrounds/16.png",
    "/backgrounds/17.png",
    "/backgrounds/18.png",
    "/backgrounds/19.png",
    "/backgrounds/20.jpg",
    "/backgrounds/21.jpg",
    "/backgrounds/22.jpg",
    "/backgrounds/23.jpg",
    "/backgrounds/24.jpg",
    "/backgrounds/25.jpg",
    "/backgrounds/26.png",
    "/backgrounds/27.jpg",
    "/backgrounds/28.jpg",
    "/backgrounds/29.jpg",
    "/backgrounds/30.jpg",
    "/backgrounds/31.jpg",
    "/backgrounds/32.jpg",
    "/backgrounds/33.jpg",
    "/backgrounds/34.jpg",
    "/backgrounds/35.jpg",
    "/backgrounds/36.jpg",
    "/backgrounds/37.jpg",
    "/backgrounds/38.jpg",
    "/backgrounds/39.jpg",
    "/backgrounds/40.jpg",
    "/backgrounds/41.png",
    "/backgrounds/42.jpg",
    "/backgrounds/43.jpg",
    "/backgrounds/44.jpg",
    "/backgrounds/45.png",
    "/backgrounds/46.png",
    "/backgrounds/47.png",
    "/backgrounds/48.png",
    "/backgrounds/49.png",
    "/backgrounds/50.jpg",
    "/backgrounds/51.jpg",
];

const randomImg = bg[Math.floor(Math.random() * bg.length)];

const BgImg = () => {
    return (
        <div className="absolute top-0 w-full h-screen z-10">
            <div className="relative before:absolute before:inset-0 before:bg-black/40 before:z-10 pointer-events-none overflow-hidden">
                <img
                    className="w-full h-screen object-cover pointer-events-auto"
                    src={randomImg}
                    alt="Site Background Image : Try Refreshing if didn't load."
                />
            </div>
        </div>
    );
};

export default BgImg;
