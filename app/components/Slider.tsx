"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { MovieList } from "../page";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Autoplay } from "swiper";
function Slider({ movie }: { movie: MovieList }) {
    const ImagePath = "https://image.tmdb.org/t/p/";
    return (
        <AnimatePresence>
            <Swiper
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                grabCursor={true}
                modules={[Autoplay]}
            >
                {movie.results.map((m, index) => (
                    <SwiperSlide key={index}>
                        <motion.div layout>
                            <Image
                                src={`${ImagePath}/original/${m.backdrop_path}`}
                                alt="film"
                                className="w-full brightness-50"
                                width={1920}
                                height={1080}
                                priority
                            />
                            <div className="absolute top-36 flex flex-row left-16 ">
                                <div className="w-6/12 flex flex-col justify-center">
                                    <div>
                                        <motion.p
                                            className="text-[5rem] text-white font-semibold"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            {m.title}
                                        </motion.p>
                                        <p className="text-[1rem]">
                                            {m.overview}
                                        </p>
                                    </div>
                                    <div className="flex flex-row py-8 gap-6">
                                        <Link
                                            href={"/"}
                                            className="px-16 py-4 rounded-full bg-red-600 shadow-3xl hover:shadow-hover transition-shadow duration-300"
                                        >
                                            <span className="text-[20px]">
                                                Watch now
                                            </span>
                                        </Link>
                                        <Link
                                            href={"/"}
                                            className="px-16 py-4 rounded-full border-solid border-white border-[3px] hover:bg-white hover:text-red-600 transition-all duration-200"
                                        >
                                            <span className="text-[20px]">
                                                Watch trailer
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-6/12 pl-16">
                                    <motion.img
                                        layout
                                        src={`${ImagePath}/original//${m.poster_path}`}
                                        alt="film"
                                        className="w-[400px] rounded-3xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </AnimatePresence>
    );
}

export default Slider;
