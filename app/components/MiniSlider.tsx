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
            width={1920}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            slidesPerView={7}
            watchSlidesProgress={true}
            grabCursor={true}
            modules={[Autoplay, EffectCreative]}
        >
            <AnimatePresence initial={false}>
                {movie.results.map((m, index) => {
                    return (
                        <SwiperSlide key={m.id} className="p-2">
                            <div
                                className={`w-60 rounded-md flex justify-center items-center  ${
                                    index === currentIndex &&
                                    "ring-4 ring-primary"
                                }`}
                            >
                                <Image
                                    src={`${ImagePath}/w500/${m.backdrop_path}`}
                                    alt="film"
                                    className={`w-60 rounded-md `}
                                    width={500}
                                    height={500}
                                    priority
                                />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </AnimatePresence>
        </Swiper>
    );
}

export default MiniSlider;
