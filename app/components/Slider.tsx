"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Autoplay } from "swiper";
import { EffectCreative } from "swiper";
import "swiper/css/pagination";
import Link from "next/link";
import useStore from "../(store)/store";
import { MovieList } from "@/service/TMDB.type";
import tmdb from "@/service/TMDB";
import ShadowImg from "./ShadowImg";

function Slider({ movie }: { movie: MovieList }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Swiper
            onActiveIndexChange={(index) => setCurrentIndex(index.activeIndex)}
            autoplay={{
                delay: 10000,
            }}
            initialSlide={currentIndex}
            slidesPerView={1}
            grabCursor={true}
            modules={[Autoplay, EffectCreative]}
            className="mb-6"
        >
            <AnimatePresence>
                {movie.results.slice(0, 10).map((m, index) => (
                    <SwiperSlide key={m.id}>
                        <Image
                            src={tmdb.getImage(m.backdrop_path)}
                            alt="film"
                            className="w-full md:brightness-50  object-cover h-[50vh] lg:h-[95vh] rounded-tl-[20px]"
                            width={1920}
                            height={1080}
                            loading="lazy"
                        />
                        <ShadowImg />
                        <div className="absolute bottom-0 md:top-32 flex flex-col md:justify-around lg:px-8 md:flex-row w-full px-8 justify-center">
                            <div
                                className={`${
                                    currentIndex === index
                                        ? "opacity-100"
                                        : "opacity-0"
                                } w-full lg:w-8/12 flex flex-col`}
                            >
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: -100,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{ opacity: 0, y: -100 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.5,
                                    }}
                                    key={currentIndex}
                                >
                                    <p className="lg:text-[3rem] md:text-[2rem] text-[1.5rem] text-white font-semibold drop-shadow-2xl shadow-black w-full">
                                        {m.title}
                                    </p>
                                    <p className="hidden drop-shadow-2xl shadow-black text-[1rem]  w-full text-left  text-white md:block">
                                        {m.overview}
                                    </p>
                                    <motion.div
                                        className={`flex flex-row py-8`}
                                    >
                                        <Link
                                            href={`${"/movie/" + m.id}#top`}
                                            className="btn btn-sm btn-primary "
                                        >
                                            <span className="md:text-lg">
                                                Xem chi tiết
                                            </span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </div>
                            <div
                                className={`${
                                    currentIndex === index
                                        ? "opacity-100"
                                        : "opacity-0"
                                } hidden lg:block`}
                            >
                                <motion.img
                                    key={currentIndex}
                                    src={tmdb.getImage(m.poster_path)}
                                    alt="film"
                                    style={{ width: 300 }}
                                    className="rounded-3xl"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.75 }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </AnimatePresence>
        </Swiper>
    );
}
function getWindowDimensions() {
    if (typeof window !== "undefined") {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    }
    return {
        width: 0,
        height: 0,
    };
}

export default Slider;
