"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { MovieList } from "../page";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Autoplay } from "swiper";
import WatchTrailerButton from "./WatchTrailerButton";
function Slider({ movie }: { movie: MovieList }) {
    const ImagePath = "https://image.tmdb.org/t/p/";
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(currentIndex);
    return (
        <Swiper
            onActiveIndexChange={(index) => setCurrentIndex(index.activeIndex)}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            grabCursor={true}
            modules={[Autoplay]}
        >
            <AnimatePresence initial={false}>
                {movie.results.map((m, index) => (
                    <SwiperSlide key={m.id}>
                        <Image
                            src={`${ImagePath}/original/${m.backdrop_path}`}
                            alt="film"
                            className="w-full brightness-50"
                            width={1920}
                            height={1080}
                            priority
                        />
                        <div className="absolute top-32 flex flex-row left-16 ">
                            <div
                                className={`${
                                    currentIndex === index
                                        ? "opacity-100"
                                        : "opacity-0"
                                } w-6/12 flex flex-col justify-center`}
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
                                    <motion.p className="text-[5rem] text-white font-semibold">
                                        {m.title}
                                    </motion.p>
                                    <motion.p>{m.overview}</motion.p>
                                    <motion.div
                                        className={`flex flex-row py-8 gap-6`}
                                    >
                                        <Link
                                            href={"/movie/" + m.id}
                                            className="px-16 py-4 rounded-full bg-red-600 shadow-3xl hover:shadow-hover transition-shadow duration-300"
                                        >
                                            <span className="text-[20px]">
                                                Watch now
                                            </span>
                                        </Link>
                                        <WatchTrailerButton
                                            videoId={String(m.id)}
                                        />
                                    </motion.div>
                                </motion.div>
                            </div>

                            <div
                                className={`w-6/12 pl-16 ${
                                    currentIndex === index
                                        ? "opacity-100"
                                        : "opacity-0"
                                } `}
                            >
                                <motion.img
                                    key={currentIndex}
                                    src={`${ImagePath}/original//${m.poster_path}`}
                                    alt="film"
                                    className="w-[400px] rounded-3xl"
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

export default Slider;
