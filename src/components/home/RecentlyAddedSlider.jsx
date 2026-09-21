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
                slidesPerView={"auto"}
                spaceBetween={70}
                breakpoints={{
                    240: {
                        spaceBetween: 15,
                    },
                    320: {
                        spaceBetween: 25,
                    },
                    750: {
                        spaceBetween: 50,
                    },
                    1200: {
                        spaceBetween: 70,
                    },
                }}
                autoplay={{ delay: 3000 }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="w-full h-fit  overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <SwiperSlide
                        className="w-50! max-[1200px]:w-42.5!  max-[1200px]:h-60! max-[1000px]:w-35!  max-[1000px]:h-50! max-[500px]:w-30!  max-[500px]:h-42! overflow-hidden rounded-2xl border-4 border-white/40 transition-all cursor-pointer"
                        key={i}
                        onClick={() => {
                            console.log("clicked");
                        }}>
                        <div className="bg-neutral-900 rounded-xl h-full flex items-center justify-center group text-white relative">
                            <img
                                className="group-hover:scale-110 w-full h-full object-cover  group-hover:opacity-50 opacity-85 transition-all duration-400  "
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
