import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/service/TMDB.type";
import tmdb from "@/service/TMDB";
function MovieCard({ m }: { m: Movie }) {
    return (
        <div
            key={m.id}
            className="transition-all duration-300 rounded-lg shadow-md cursor-pointer w-52 md:w-56 lg:w-60 bg-primary/5 hover:ring-1 hover:ring-primary hover:scale-[1.01] hover:shadow-primary group"
        >
            <div className="overflow-hidden rounded-t-lg">
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
            </div>
            <div className="px-2 py-4 font-semibold text-base-content">
                <Link href={"/movie/" + m.id} className="w-fit">
                    {m.title}
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;
