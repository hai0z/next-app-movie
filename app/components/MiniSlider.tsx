"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { MovieList } from "@/service/TMDB.type";
import { AnimatePresence } from "framer-motion";
import { Autoplay } from "swiper";
import { EffectCreative } from "swiper";
import useStore from "../(store)/store";
import tmdb from "@/service/TMDB";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-creative";
function MiniSlider({ movie }: { movie: MovieList }) {
    const currentIndex = useStore((state) => state.currentSlideIndex);

    return (
        <Swiper
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 5,
                },
            }}
            modules={[Autoplay, EffectCreative]}
        >
            <AnimatePresence>
                {movie.results.map((m, index) => {
                    return (
                        <SwiperSlide key={m.id} className="p-2 group">
                            <div
                                className={`w-60 rounded-md relative flex justify-center items-center  ${
                                    index === currentIndex &&
                                    "ring-4 ring-primary"
                                } overflow-hidden cursor-pointer hover:ring-4 hover:ring-primary`}
                            >
                                <Image
                                    src={tmdb.getImage(m.backdrop_path, "w500")}
                                    alt="film"
                                    className={`w-60 rounded-md group-hover:scale-110 group-hover:w-64 transition-all duration-150 hover:brightness-50`}
                                    width={500}
                                    height={500}
                                    priority
                                />
                                <p
                                    className="absolute top-6 left-2 opacity-0 group-hover:opacity-95 transition-all duration-200 w-32
                            font-bold "
                                >
                                    {m.title}
                                </p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </AnimatePresence>
        </Swiper>
    );
}

export default MiniSlider;
