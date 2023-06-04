"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import { MovieList } from "@/service/TMDB.type";
import { AnimatePresence } from "framer-motion";
import { Autoplay, Navigation, FreeMode } from "swiper";
import useStore from "../(store)/store";
import tmdb from "@/service/TMDB";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import useWindowDimensions from "@/hooks/useWindowDemensions";
function MiniSlider({ movie }: { movie: MovieList }) {
    const currentIndex = useStore((state) => state.currentSlideIndex);
    const { width } = useWindowDimensions();
    const setSlideIndex = useStore((state) => state.setCurrentSlideIndex);
    return (
        <div className="flex w-full items-center justify-start">
            <Swiper
                modules={[Navigation, FreeMode]}
                grabCursor
                spaceBetween={15}
                freeMode
                slidesPerGroup={1}
                navigation={true}
                onSlideChange={(i) => setSlideIndex(i.realIndex)}
                slidesPerView={width > 1700 ? 1700 / 250 : width / 250}
                className="w-full"
            >
                <AnimatePresence>
                    {movie.results.slice(0, 10).map((m, index) => {
                        return (
                            <SwiperSlide
                                key={m.id}
                                className="p-2 group"
                                virtualIndex={index}
                            >
                                <div
                                    className={`md:w-56 rounded-md relative flex justify-center items-center  ${
                                        index === currentIndex &&
                                        "ring-4 ring-primary"
                                    } overflow-hidden cursor-pointer hover:ring-4 hover:ring-primary`}
                                >
                                    <Image
                                        src={tmdb.getImage(
                                            m.backdrop_path,
                                            "w500"
                                        )}
                                        alt="film"
                                        className={`md:w-56 rounded-md group-hover:scale-110 group-hover:w-56 transition-all duration-150 hover:brightness-50`}
                                        width={500}
                                        height={500}
                                        priority
                                    />
                                    <p
                                        className="absolute top-6 left-2 opacity-0 group-hover:opacity-95 transition-all duration-200 w-32
                            font-bold pointer-events-none"
                                    >
                                        {m.title}
                                    </p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </AnimatePresence>
            </Swiper>
        </div>
    );
}

export default MiniSlider;
