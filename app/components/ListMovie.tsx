"use client";

import React from "react";

import { Movie, MovieList } from "../page";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";

function ListMovie({ movie }: { movie: MovieList }) {
    return (
        <Swiper slidesPerView={5}>
            {movie.results.map((m: any) => (
                <SwiperSlide key={m.id}>
                    <MovieCard m={m} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ListMovie;
