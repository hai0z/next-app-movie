"use client";

import React from "react";

import { Movie, MovieList } from "../page";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";

function ListMovie({ movie }: { movie: MovieList }) {
    return (
        <Swiper
            breakpoints={{
                340: {
                    slidesPerView: 2,
                },
                540: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 5,
                },
            }}
        >
            {movie.results.map((m: any) => (
                <SwiperSlide key={m.id} className="p-1 w-auto">
                    <MovieCard m={m} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ListMovie;
