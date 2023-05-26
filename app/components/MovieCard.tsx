import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/service/TMDB.type";
import tmdb from "@/service/TMDB";
function MovieCard({ m }: { m: Movie }) {
    return (
        <div
            key={m.id}
            className="cursor-pointer md:w-56 lg:w-60 bg-primary/5 rounded-lg hover:ring-1 hover:ring-primary hover:scale-105 transition-all duration-150  hover:shadow-primary shadow-lg w-52"
        >
            <div className="overflow-hidden rounded-t-lg">
                <Link href={"/movie/" + m.id + "#top"}>
                    <Image
                        src={tmdb.getImage(m.poster_path, "w500")}
                        width={500}
                        height={500}
                        alt="cast"
                        priority
                        className="object-cover md:w-56 hover:scale-105 transition-all duration-150 lg:w-60 "
                    />
                </Link>
            </div>
            <div className="font-semibold text-base-content py-4 px-2">
                <Link href={"/movie/" + m.id} className="w-fit">
                    {m.title}
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;
