"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie, MovieList } from "../page";
import { Swiper, SwiperSlide } from "swiper/react";

function MovieCard({ movie }: { movie: MovieList }) {
    const ImagePath = "https://image.tmdb.org/t/p/";
    return (
        <Swiper slidesPerView={6}>
            {movie.results.map((m, index) => (
                <SwiperSlide key={index}>
                    <Link
                        href={"/movie/" + m.id}
                        className="mt-4 flex flex-col relative group mx-1"
                    >
                        <div className="flex justify-center items-center">
                            {" "}
                            <Image
                                src={`${ImagePath}/original//${m.poster_path}`}
                                alt="film"
                                className="w-[220px] rounded-3xl group-hover:brightness-50 relative"
                                width={500}
                                priority
                                height={200}
                            />
                            <Link
                                href={"/"}
                                className="w-24 py-4 rounded-full bg-red-600 shadow-3xl hover:shadow-hover transition-all duration-500 absolute justify-center items-center opacity-0 group-hover:opacity-100 flex scale-0 group-hover:scale-100"
                            >
                                <i className="fa-solid fa-play"></i>
                            </Link>
                        </div>
                        <p className="font-bold  pt-4 w-[220px] text-ellipsis group-hover:text-red-600">
                            {m.title ?? m.name}
                        </p>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default MovieCard;
