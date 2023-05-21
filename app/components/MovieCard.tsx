import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/service/TMDB.type";
import tmdb from "@/service/TMDB";
function MovieCard({ m }: { m: Movie }) {
    return (
        <div
            key={m.id}
            className="cursor-pointer md:w-48 xl:w-56 bg-base-100 rounded-lg hover:ring-1 hover:ring-primary w-40"
        >
            <div className="overflow-hidden rounded-lg">
                <Link href={"/movie/" + m.id + "#top"}>
                    <Image
                        src={tmdb.getImage(m.poster_path, "w500")}
                        width={500}
                        height={500}
                        alt="cast"
                        className="object-cover md:w-48 xl:w-56 hover:scale-110 transition-all duration-150 w-40"
                    />
                </Link>
            </div>
            <div className="font-semibold text-base-content py-4 px-2">
                <p className="w-fit">{m.title}</p>
            </div>
        </div>
    );
}

export default MovieCard;
