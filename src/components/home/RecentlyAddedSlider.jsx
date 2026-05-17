import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { ExternalLink } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const RecentlyAddedSlider = () => {
    return (
        <div>
            <Swiper
                slidesPerView="auto"
                spaceBetween={70}
                autoplay={{ delay: 3000 }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="w-full h-70 overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <SwiperSlide
                        className="w-50! overflow-hidden rounded-2xl border-4 border-white/40 transition-all cursor-pointer"
                        key={i}
                        onClick={() => {
                            console.log("clicked");
                        }}>
                        <div className="bg-neutral-900 rounded-xl h-full flex items-center justify-center group text-white relative">
                            <img
                                className="group-hover:scale-110 group-hover:opacity-50 opacity-85 transition-all duration-400"
                                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116589-KawXHB6sApFt.jpg"
                                alt=""
                            />
                            <ExternalLink className="absolute opacity-0 group-hover:opacity-100" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RecentlyAddedSlider;
