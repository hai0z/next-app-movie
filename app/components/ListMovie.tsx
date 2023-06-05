"use client";

import React from "react";
import { MovieList } from "@/service/TMDB.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import MovieCard from "./MovieCard";
import "swiper/css";
import "swiper/css/navigation";
import useWindowDimensions from "@/hooks/useWindowDemensions";
function ListMovie({ movie }: { movie: MovieList }) {
    const { width } = useWindowDimensions();
    return (
        <Swiper
            modules={[Navigation]}
            grabCursor
            freeMode={true}
            slidesPerGroup={1}
            slidesPerGroupAuto
            navigation={true}
            slidesPerView={width > 1700 ? 1700 / 275 : width / 275}
            className="w-full"
        >
            {movie.results.slice(0, 10).map((m: any) => (
                <SwiperSlide key={m.id} className="w-auto px-2 py-3 md:py-8">
                    <MovieCard m={m} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ListMovie;
