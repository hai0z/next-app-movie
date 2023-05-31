"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Autoplay } from "swiper";
import "swiper/css/pagination";
import Link from "next/link";
import { Genres, MovieList } from "@/service/TMDB.type";
import tmdb from "@/service/TMDB";
import ShadowImg from "./ShadowImg";

function Slider({ movie }: { movie: MovieList }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [listLogo, setListLogo] = useState<any>([]);
    const [listGenres, setListGenres] = useState<Genres[]>([]);
    useEffect(() => {
        const getListGenres = async () => {
            const data = await tmdb.getListGenres("movie");
            setListGenres(data.genres);
        };
        const promises = [];
        for (const m of movie.results) {
            promises.push(tmdb.getPhotos("movie", m.id));
        }
        Promise.all(promises)
            .then((data) => {
                setListLogo(data);
            })
            .catch((error) => {
                console.error(error);
            });
        getListGenres();
    }, [movie.results]);
    const getGenres = (m: any) => {
        const genres = listGenres.filter((g) => m.genre_ids.includes(g.id));
        return genres;
    };
    return (
        <Swiper
            onActiveIndexChange={(index) => setCurrentIndex(index.activeIndex)}
            autoplay={{
                delay: 10000,
            }}
            initialSlide={currentIndex}
            slidesPerView={1}
            centeredSlides
            grabCursor={true}
            modules={[Autoplay]}
            className="mb-6"
        >
            <AnimatePresence>
                {movie.results.slice(0, 10).map((m, index) => (
                    <SwiperSlide key={m.id}>
                        <motion.div
                            initial={{
                                scale: 1.1,
                                translateX: 300,
                            }}
                            animate={{
                                scale: 1,
                                translateX: 0,
                            }}
                            exit={{ scale: 1.1, translateX: 300 }}
                            transition={{
                                duration: 0.85,
                            }}
                            key={currentIndex}
                        >
                            <Image
                                src={tmdb.getImage(m.backdrop_path)}
                                alt="film"
                                className="w-full brightness-50  object-cover h-[50vh] lg:h-[95vh] rounded-tl-[20px]"
                                width={1920}
                                height={1080}
                                priority
                            />
                        </motion.div>
                        <ShadowImg />
                        <div className="absolute bottom-0 md:top-0 flex flex-col md:justify-around lg:px-8 md:flex-row w-full px-8 justify-center items-center xl:-mt-20">
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
                                        x: 100,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    exit={{ opacity: 0, x: 100 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.5,
                                    }}
                                    key={currentIndex}
                                >
                                    <motion.div className="lg:text-[3rem] md:text-[2rem] text-[1.5rem] text-base-content font-semibold drop-shadow-2xl shadow-black w-full">
                                        {listLogo?.[index]?.logos[0]
                                            ?.file_path ? (
                                            <Image
                                                src={tmdb.getImage(
                                                    listLogo?.[index]?.logos[0]
                                                        ?.file_path,
                                                    "w300"
                                                )}
                                                width={500}
                                                height={500}
                                                priority
                                                className="md:w-auto md:h-auto mb-4 w-40"
                                                alt="img"
                                            />
                                        ) : (
                                            <p>{m.title}</p>
                                        )}
                                    </motion.div>
                                    <div className="flex items-center mb-6">
                                        <p className="badge badge-info font-bold">
                                            TMDB
                                        </p>
                                        <span className="font-bold ml-2">
                                            {m.vote_average.toPrecision(2)}
                                        </span>
                                        <div className="flex gap-2 ml-6 flex-wrap">
                                            {getGenres(m).map((x) => (
                                                <div
                                                    key={x.id}
                                                    className="badge badge-secondary font-bold"
                                                >
                                                    {x.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <motion.p
                                        initial={{
                                            opacity: 0,
                                            x: 50,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        exit={{ opacity: 0, x: 50 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.7,
                                        }}
                                        key={currentIndex}
                                        className="hidden drop-shadow-2xl shadow-black text-[1rem]  w-full text-left  text-base-content md:block"
                                    >
                                        {m.overview}
                                    </motion.p>
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: 50,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        exit={{ opacity: 0, x: 50 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.9,
                                        }}
                                        key={currentIndex + m.title}
                                        className={`flex flex-row py-8`}
                                    >
                                        <Link
                                            href={`${"/movie/" + m.id}#top`}
                                            className="btn btn-primary capitalize"
                                        >
                                            <span>Xem chi tiết</span>
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
                                    className="rounded-3xl w-[300px]"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 1 }}
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
