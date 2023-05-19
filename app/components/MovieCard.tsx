import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie, MovieList } from "../page";
function MovieCard({ m }: { m: Movie }) {
    const ImagePath = "https://image.tmdb.org/t/p/";

    return (
        <div
            key={m.id}
            className="cursor-pointer w-64 bg-base-100 rounded-lg hover:ring-1 hover:ring-primary"
        >
            <div className="overflow-hidden rounded-lg">
                <Link href={"/movie/" + m.id + "#top"}>
                    <Image
                        src={`${ImagePath}/w500/${m.poster_path}`}
                        width={500}
                        height={500}
                        alt="cast"
                        className="object-cover w-64 hover:scale-110 transition-all duration-150"
                    />
                </Link>
            </div>
            <div className="font-semibold text-base-content py-4 px-2 ">
                {m.title}
            </div>
        </div>
    );
}

export default MovieCard;
