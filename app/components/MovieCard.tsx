import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie, MovieList } from "../page";
function MovieCard({ m }: { m: Movie }) {
    const ImagePath = "https://image.tmdb.org/t/p/";

    return (
        <div className="mt-4 flex flex-col relative group mx-1 w-64">
            <div className="flex justify-center items-center">
                <Link href={"/movie/" + m.id}>
                    <Image
                        src={`${ImagePath}/original//${m.poster_path}`}
                        alt="film"
                        className="w-64 rounded-3xl group-hover:brightness-50 relative"
                        width={500}
                        priority
                        height={200}
                    />
                </Link>
                <Link
                    href={"/movie/" + m.id}
                    className="w-24 py-4 rounded-full bg-red-600 shadow-3xl hover:shadow-hover transition-all duration-500 absolute justify-center items-center opacity-0 group-hover:opacity-100 flex scale-0 group-hover:scale-100"
                >
                    <i className="fa-solid fa-play"></i>
                </Link>
            </div>
            <Link
                href={"/movie/" + m.id}
                className="font-bold  pt-4 w-fit text-ellipsis group-hover:text-primary-focus text-base-content"
            >
                {m.title ?? m.name}
            </Link>
        </div>
    );
}

export default MovieCard;
