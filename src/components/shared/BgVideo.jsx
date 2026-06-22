import React from "react";

const bg = [
    "/Videos/demon slayer.mp4",
    "/Videos/gojo.mp4",
    "/Videos/itachi.mp4",
    "/Videos/kakashi.mp4",
    "/Videos/konan.mp4",
    "/Videos/Levi.mp4",
    "/Videos/mikasa goth.mp4",
    "/Videos/Miku nakano.mp4",
    "/Videos/pain.mp4",
    "/Videos/sasuke.mp4",
    "/Videos/sasuke.mp4",
    "/Videos/shinobu.mp4",
    "/Videos/Silver.mp4",
    "/Videos/kaneki.mp4",
];

const randomVideo = bg[Math.floor(Math.random() * bg.length)];

const BgVideo = () => {
    return (
        <div className="absolute top-0 w-full h-screen z-10">
            <div className="relative before:absolute before:inset-0 before:bg-black/60 before:z-10 pointer-events-none overflow-hidden">
                <video
                    className="w-full h-screen object-cover pointer-events-auto"
                    autoPlay
                    muted
                    loop
                    playsInline>
                    <source src={randomVideo} type="video/mp4" />
                    This video doesn't support our broswer.
                </video>
            </div>
        </div>
    );
};

export default BgVideo;
