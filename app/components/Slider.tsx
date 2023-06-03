"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import Link from "next/link";
import { Genres, MovieList } from "@/service/TMDB.type";
import tmdb from "@/service/TMDB";
import ShadowImg from "./ShadowImg";
import useWindowDimensions from "@/hooks/useWindowDemensions";
import "swiper/css/pagination";
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
    const getGenresOfMovie = (m: any) => {
        const genres = listGenres.filter((g) => m.genre_ids.includes(g.id));
        return genres;
    };
    const { width } = useWindowDimensions();
    return (
        <Swiper
            onSlideChange={(e) => setCurrentIndex(e.realIndex)}
            autoplay={{
                delay: 10000,
            }}
            pagination
            initialSlide={currentIndex}
            slidesPerView={width < 768 ? 1.2 : 1}
            grabCursor={true}
            modules={[Autoplay, Pagination]}
            className="mb-6"
            spaceBetween={15}
            centeredSlides
            loop
        >
            <AnimatePresence>
                {movie.results.slice(0, 10).map((m, index) => (
                    <SwiperSlide
                        key={m.id}
                        className={`${
                            width <= 768 && "pt-24 transition-all duration-200"
                        }`}
                    >
                        <motion.div
                            className="w-full"
                            initial={{
                                scale: 1.05,
                            }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 1.05 }}
                            transition={{ duration: 1 }}
                            key={currentIndex}
                        >
                            <Link href={`${"/movie/" + m.id}#top`}>
                                <Image
                                    src={
                                        width < 768
                                            ? tmdb.getImage(m.poster_path)
                                            : tmdb.getImage(m.backdrop_path)
                                    }
                                    alt="film"
                                    className="md:w-full w-full md:brightness-50 object-cover h-[55vh] lg:h-[95vh] md:rounded-tl-[20px] rounded-xl"
                                    width={1920}
                                    height={1080}
                                    priority
                                />
                            </Link>
                            <ShadowImg />
                        </motion.div>
                        <div className="absolute bottom-0 md:top-0 flex flex-col md:justify-around lg:px-8 md:flex-row w-full px-8 justify-center items-center xl:-mt-20 ">
                            <div
                                className={`${
                                    currentIndex === index
                                        ? "opacity-100"
                                        : "opacity-0"
                                } w-full lg:w-8/12 flex flex-col justify-end items-center`}
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
                                    className="text-center"
                                >
                                    <motion.div className="lg:text-[3rem] md:text-[2rem] text-[1.5rem] text-base-content font-semibold drop-shadow-2xl shadow-black w-full">
                                        {listLogo?.[index]?.logos[0]
                                            ?.file_path && width > 768 ? (
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
                                    <div className="md:flex items-center mb-6 hidden">
                                        <p className="badge badge-info font-bold">
                                            TMDB
                                        </p>
                                        <span className="font-bold ml-2">
                                            {m.vote_average.toFixed(1)}
                                        </span>
                                        <div className="md:flex gap-2 ml-6 flex-wrap hidden">
                                            {getGenresOfMovie(m).map((x) => (
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
                                            className="md:btn md:btn-primary capitalize hidden"
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
                                    className="rounded-3xl w-72"
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

export default Slider;
