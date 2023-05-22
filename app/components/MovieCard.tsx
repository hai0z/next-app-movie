import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/service/TMDB.type";
import tmdb from "@/service/TMDB";
function MovieCard({ m }: { m: Movie }) {
    return (
        <div
            key={m.id}
            className="cursor-pointer md:w-48 xl:w-56 bg-base-300 rounded-lg hover:ring-1 hover:ring-primary w-40 hover:scale-105 transition-all duration-150  hover:shadow-primary shadow-md"
        >
            <div className="overflow-hidden rounded-lg">
                <Link href={"/movie/" + m.id + "#top"}>
                    <Image
                        src={tmdb.getImage(m.poster_path, "w500")}
                        width={500}
                        height={500}
                        alt="cast"
                        priority={true}
                        className="object-cover md:w-48 xl:w-56 hover:scale-105 transition-all duration-150 w-40"
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
