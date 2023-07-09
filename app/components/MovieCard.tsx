"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/service/TMDB.type";
import tmdb from "@/service/TMDB";
import { motion } from "framer-motion";
function MovieCard2({ m, index }: { m: Movie; index: number }) {
    return (
        <motion.div
            className="card card-side bg-base-200 shadow-xl w-full hover:ring-1 hover:ring-primary hover:bg-primary/10 transition-all duration-300 my-1 mx-1 cursor-pointer"
            initial={{
                opacity: 0,
            }}
            key={m.id}
            transition={{ duration: 0.5 }}
            exit={{
                opacity: 0,
            }}
            animate={{ opacity: 1 }}
        >
            <figure>
                <Link href={"/movie/" + m.id + "#top"}>
                    <Image
                        src={
                            m.poster_path
                                ? tmdb.getImage(m.poster_path)
                                : "//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                        }
                        width={250}
                        height={250}
                        alt="cast"
                        loading="lazy"
                        className="object-cover w-52 h-full"
                    />
                </Link>
            </figure>
            <div className="card-body w-full">
                <motion.h2 className="card-title">
                    <Link href={"/movie/" + m.id}> {m.name ?? m.title}</Link>
                </motion.h2>
                <div>
                    <div>
                        <span className="badge badge-info font-semibold">
                            TMDB {m.vote_average.toFixed(1)}
                        </span>
                        <span className="ml-4 font-bold">{m.release_date}</span>
                    </div>
                    <p className="line-clamp-2  md:line-clamp-4 lg:line-clamp-none text-justify">
                        {m.overview}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
function MovieCard3({ m, index }: { m: Movie; index: number }) {
    return (
        <motion.div
            className="card w-96 bg-base-200 shadow-md hover:ring-2 hover:ring-primary my-1 group overflow-hidden hover:shadow-primary card-compact hover:bg-primary/10"
            layout
            initial={{
                opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{
                opacity: 0,
            }}
        >
            <figure>
                <motion.div>
                    <Link href={"/movie/" + m.id + "#top"}>
                        <Image
                            src={
                                m.backdrop_path
                                    ? tmdb.getImage(m.backdrop_path)
                                    : "//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                            }
                            width={250}
                            height={250}
                            alt="cast"
                            loading="lazy"
                            className="group-hover:scale-110 transition-all duration-300 w-96"
                        />
                    </Link>
                </motion.div>
            </figure>
            <div className="card-body ">
                <Link
                    href={"/movie/" + m.id}
                    className="card-title line-clamp-1"
                >
                    <motion.h2> {m.name ?? m.title}</motion.h2>
                </Link>
                <p className="overflow-ellipsis line-clamp-4 text-justify">
                    {m.overview}
                </p>
            </div>
        </motion.div>
    );
}
function MovieCard1({ m }: { m: Movie }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
            }}
            key={m.id}
            transition={{ duration: 0.5 }}
            layout
            className="transition-all duration-300 rounded-lg shadow-md cursor-pointer w-[45%] md:w-56 lg:w-64 bg-base-200 hover:ring-1 hover:ring-primary hover:scale-[1.01] hover:shadow-primary group card my-1 hover:bg-primary/10"
        >
            <figure className="overflow-hidden rounded-t-lg">
                <Link href={"/movie/" + m.id + "#top"}>
                    <Image
                        src={
                            m.poster_path
                                ? tmdb.getImage(m.poster_path, "w500")
                                : "//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                        }
                        width={500}
                        height={500}
                        alt="cast"
                        loading="lazy"
                        className="object-cover transition-all duration-300 md:w-56 group-hover:scale-110 lg:w-64 "
                    />
                </Link>
            </figure>
            <div className="card-body">
                <Link href={"/movie/" + m.id}>
                    <p className="line-clamp-2 font-semibold">
                        {m.name ?? m.title}
                    </p>
                </Link>
            </div>
        </motion.div>
    );
}
function MovieCard({ m }: { m: Movie }) {
    return (
        <motion.div className="transition-all duration-300 rounded-lg shadow-md cursor-pointer w-60 lg:w-64 bg-base-200 hover:ring-1 hover:ring-primary hover:scale-[1.01] hover:shadow-primary group card my-1 hover:bg-primary/10">
            <figure className="overflow-hidden rounded-t-lg">
                <Link href={"/movie/" + m.id + "#top"}>
                    <Image
                        src={
                            m.poster_path
                                ? tmdb.getImage(m.poster_path)
                                : "//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                        }
                        width={500}
                        height={500}
                        alt="cast"
                        loading="lazy"
                        className="object-cover transition-all duration-300 w-60  group-hover:scale-110 lg:w-64 "
                    />
                </Link>
            </figure>
            <div className="card-body">
                <Link href={"/movie/" + m.id}>
                    <p className="line-clamp-2 font-semibold">
                        {" "}
                        {m.name ?? m.title}
                    </p>
                </Link>
            </div>
        </motion.div>
    );
}
export { MovieCard2, MovieCard3, MovieCard1 };
export default MovieCard;
