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
            className="card card-side bg-primary/5 shadow-xl w-full hover:ring-1 hover:ring-primary hover:bg-primary/10 transition-all duration-300 my-1 mx-1"
            initial={{
                opacity: 0,
                translateX: index % 2 === 0 ? -150 : 150,
                translateY: index % 2 === 0 ? -150 : 150,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{
                duration: 0.75,
                delay: index * 0.25,
            }}
            exit={{
                opacity: 0,
                translateX: index % 2 === 0 ? -150 : 150,
                translateY: index % 2 === 0 ? -150 : 150,
            }}
        >
            <figure>
                <Link href={"/movie/" + m.id + "#top"}>
                    <Image
                        src={tmdb.getImage(m.poster_path)}
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
                    <Link href={"/movie/" + m.id}> {m.title}</Link>
                </motion.h2>
                <div>
                    <p className="badge badge-info font-semibold">
                        TMDB {m.vote_average.toFixed(1)}
                    </p>
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
            className="card w-96 bg-primary/5 shadow-md hover:ring-2 hover:ring-primary my-1 group overflow-hidden hover:shadow-primary card-compact"
            layout
            initial={{
                opacity: 0,
                translateX: index % 2 === 0 ? -150 : 150,
                translateY: index % 2 === 0 ? -150 : 150,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{
                duration: 0.75,
                delay: index * 0.1,
            }}
            exit={{
                opacity: 0,
                translateX: index % 2 === 0 ? -150 : 150,
                translateY: index % 2 === 0 ? -150 : 150,
            }}
        >
            <figure>
                <motion.div>
                    <Link href={"/movie/" + m.id + "#top"}>
                        <Image
                            src={tmdb.getImage(m.backdrop_path)}
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
                    <motion.h2>{m.title}</motion.h2>
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
                translateX: Math.random() > 0.5 ? -150 : 150,
                translateY: Math.random() > 0.5 ? -150 : 150,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{
                duration: 0.75,
                delay: Math.random() * 2 * 0.11,
            }}
            exit={{
                opacity: 0,
                translateX: Math.random() > 0.5 ? -150 : 150,
                translateY: Math.random() > 0.5 ? -150 : 150,
            }}
            key={m.id}
            layout
            className="transition-all duration-300 rounded-lg shadow-md cursor-pointer w-[45%] md:w-56 lg:w-64 bg-primary/5 hover:ring-1 hover:ring-primary hover:scale-[1.01] hover:shadow-primary group card my-1"
        >
            <figure className="overflow-hidden rounded-t-lg">
                <Link href={"/movie/" + m.id + "#top"}>
                    <Image
                        src={tmdb.getImage(m.poster_path, "w500")}
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
                    <p className="line-clamp-2 font-semibold"> {m.title}</p>
                </Link>
            </div>
        </motion.div>
    );
}
function MovieCard({ m }: { m: Movie }) {
    return (
        <motion.div className="transition-all duration-300 rounded-lg shadow-md cursor-pointer w-52 md:w-56 lg:w-60 bg-base-200 hover:ring-1 hover:ring-primary hover:scale-[1.01] hover:shadow-primary group card my-1">
            <figure className="overflow-hidden rounded-t-lg">
                <Link href={"/movie/" + m.id + "#top"}>
                    <Image
                        src={tmdb.getImage(m.poster_path, "w500")}
                        width={500}
                        height={500}
                        alt="cast"
                        loading="lazy"
                        className="object-cover transition-all duration-300 md:w-56 group-hover:scale-110 lg:w-60 "
                    />
                </Link>
            </figure>
            <div className="card-body">
                <Link href={"/movie/" + m.id}>
                    <p className="line-clamp-2 font-semibold"> {m.title}</p>
                </Link>
            </div>
        </motion.div>
    );
}
export { MovieCard2, MovieCard3, MovieCard1 };
export default MovieCard;
