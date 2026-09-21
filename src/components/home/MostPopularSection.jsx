import React from "react";
import MostPopularCard from "./MostPopularCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flame } from "lucide-react";
import { popularAnimeList } from "../../logic/data/animeList";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

const MostPopularSection = () => {
    return (
        <div className="w-full h-fit px-12 max-[550px]:px-6 py-6 flex flex-col gap-10 border-t border-white/30">
            <div className="flex gap-2 items-center">
                <Flame size={30} color="#D3B0F8" />
                <h1 className="text-2xl font-bold">Most Popular</h1>
            </div>
            <Swiper
                className="w-full h-fit"
                effect={"coverflow"}
                loop={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}>
                {popularAnimeList.map((anime, idx) => {
                    return (
                        <SwiperSlide
                            key={idx}
                            className="max-[1000px]:w-1/2! max-[750px]:w-2/3! max-[500px]:w-3/4! max-[400px]:w-5/6! w-3/5! h-fit! will-change-transform transition-all">
                            <MostPopularCard
                                id={anime.id}
                                name={anime.name}
                                src={anime.src}
                                score={anime.score}
                                duration={anime.duration}
                                episodes={anime.episode}
                                releaseDate={anime.releaseDate}
                                intro={anime.introduction}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default MostPopularSection;
