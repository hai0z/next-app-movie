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
            className="card card-side bg-primary/5 shadow-xl w-full"
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
                        priority
                        className="h-full object-cover"
                    />
                </Link>
            </figure>
            <div className="card-body w-full">
                <motion.h2 className="card-title" layoutId={m.id + "title"}>
                    {m.title}
                </motion.h2>
                <div>
                    <p className="overflow-ellipsis line-clamp-2 md:line-clamp-3">
                        {m.overview}
                    </p>
                    <p className="badge badge-info font-semibold">
                        TMDB {m.vote_average.toFixed(1)}
                    </p>
                </div>
                <div className="card-actions justify-end">
                    <Link
                        href={"/movie/" + m.id}
                        className="btn btn-primary btn-outline"
                    >
                        Xem chi tiết
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
function MovieCard3({ m, index }: { m: Movie; index: number }) {
    return (
        <motion.div
            className="card w-96 bg-primary/5 shadow-md hover:ring-2 hover:ring-primary my-1 group overflow-hidden hover:shadow-primary "
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
                            priority
                            className="group-hover:scale-110 transition-all duration-300 w-full"
                        />
                    </Link>
                </motion.div>
            </figure>
            <div className="card-body">
                <Link
                    href={"/movie/" + m.id}
                    className="card-title line-clamp-1"
                >
                    <motion.h2 layoutId={m.id + "title"}>{m.title}</motion.h2>
                </Link>
                <p className="overflow-ellipsis line-clamp-3">{m.overview}</p>
            </div>
        </motion.div>
    );
}
function MovieCard({ m }: { m: Movie }) {
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
            className="transition-all duration-300 rounded-lg shadow-md cursor-pointer w-52 md:w-56 lg:w-60 bg-primary/5 hover:ring-1 hover:ring-primary hover:scale-[1.01] hover:shadow-primary group card my-1"
        >
            <figure className="overflow-hidden rounded-t-lg">
                <Link href={"/movie/" + m.id + "#top"}>
                    <Image
                        src={tmdb.getImage(m.poster_path, "w500")}
                        width={500}
                        height={500}
                        alt="cast"
                        priority
                        className="object-cover transition-all duration-300 md:w-56 group-hover:scale-110 lg:w-60 "
                    />
                </Link>
            </figure>
            <div className="card-body">
                <Link href={"/movie/" + m.id}>
                    <p className="truncate overflow-ellipsis"> {m.title}</p>
                </Link>
            </div>
        </motion.div>
    );
}
export { MovieCard2, MovieCard3 };
export default MovieCard;
