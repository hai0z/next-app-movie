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
            pagination={true}
            grabCursor={true}
            modules={[Autoplay, EffectCreative, Pagination]}
        >
            <AnimatePresence initial={false}>
                {movie.results.map((m, index) => (
                    <SwiperSlide key={m.id}>
                        <Image
                            src={`${ImagePath}/original/${m.backdrop_path}`}
                            alt="film"
                            className="w-full brightness-50 object-cover h-[50vh] lg:h-screen rounded-tl-[20px]"
                            width={1920}
                            height={1080}
                            priority
                        />
                        <div className="absolute top-20 md:top-32 flex flex-col items-center justify-center lg:left-16 md:flex-row w-full">
                            <div
                                className={`${
                                    currentIndex === index
                                        ? "opacity-100"
                                        : "opacity-0"
                                } w-full lg:w-6/12 flex flex-col`}
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
                                    <p className="lg:text-[4.5rem] md:text-[3rem] text-[2rem] text-white font-semibold drop-shadow-2xl shadow-black w-full px-8">
                                        {m.title}
                                    </p>
                                    <p className="drop-shadow-2xl shadow-black text-[0.5rem] md:text-[1rem] w-full text-left px-8 text-white">
                                        {m.overview}
                                    </p>
                                    <motion.div
                                        className={`flex flex-row py-8 px-8`}
                                    >
                                        <Link
                                            href={`${"/movie/" + m.id}#top`}
                                            className="btn btn-sm btn-primary md:btn-md lg:btn-lg"
                                        >
                                            <span className="md:text-[20px]">
                                                Xem chi tiết
                                            </span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </div>
                            <div
                                className={`w-6/12 pl-16 ${
                                    currentIndex === index
                                        ? "opacity-100"
                                        : "opacity-0"
                                } hidden lg:block`}
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
