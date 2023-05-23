"use client";

import React, { useEffect, useState } from "react";

import { Movie, MovieList } from "@/service/TMDB.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import MovieCard from "./MovieCard";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
function ListMovie({ movie }: { movie: MovieList }) {
    const { width } = useWindowDimensions();
    return (
        <Swiper
            modules={[Navigation]}
            grabCursor
            spaceBetween={15}
            freeMode={true}
            slidesPerGroup={1}
            slidesPerGroupAuto
            navigation={true}
            slidesPerView={width > 1700 ? 1700 / 235 : Math.floor(width / 235)}
            className="w-full"
        >
            {movie.results.slice(0, 10).map((m: any) => (
                <SwiperSlide key={m.id} className="md:py-8 py-3 px-2 w-auto">
                    <MovieCard m={m} />
                </SwiperSlide>
            ))}
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

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return windowDimensions;
}
export default ListMovie;
