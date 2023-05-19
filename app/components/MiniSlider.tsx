"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import Image from "next/image";
import { MovieList } from "../page";
import { motion, AnimatePresence } from "framer-motion";
import { Autoplay } from "swiper";
import { EffectCreative } from "swiper";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import { Pagination } from "swiper";
import Link from "next/link";
import useStore from "../(store)/store";
import { useSwiper } from "swiper/react";
function MiniSlider({ movie }: { movie: MovieList }) {
    const ImagePath = "https://image.tmdb.org/t/p/";
    const currentIndex = useStore((state) => state.currentSlideIndex);

    return (
        <Swiper
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 7,
                },
            }}
            slidesPerView={7}
            modules={[Autoplay, EffectCreative]}
        >
            <AnimatePresence initial={false}>
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
                                    src={`${ImagePath}/w500/${m.backdrop_path}`}
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
