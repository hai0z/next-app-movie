import { Movie } from "@/app/page";
import React from "react";
import Image from "next/image";
interface MovieDetailProp {
    params: {
        movieId: string;
    };
}
interface Cast {
    cast: {
        id: number;
        profile_path: string;
        name: string;
    }[];
}
async function MovieDetail({ params }: MovieDetailProp) {
    const ImagePath = "https://image.tmdb.org/t/p/";

    const getData = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.TMDB}&language=en-US`
        );
        const data = await respone.json();
        return data;
    };
    const getCast = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=${process.env.TMDB}&language=en-US`
        );
        const data = await respone.json();
        return data;
    };
    const movie: Movie = await getData();
    const listCast: Cast = await getCast();
    return (
        <div className="w-full flex flex-col min-h-screen">
            <Image
                src={`${ImagePath}/original/${movie.backdrop_path}`}
                width={1920}
                height={500}
                priority
                className="h-[50vh] object-cover brightness-50"
                alt={movie.title}
            />
            <div className="w-full -top-52 relative">
                <div className="flex flex-row mx-28">
                    <div className="flex">
                        <Image
                            src={`${ImagePath}/original/${movie.poster_path}`}
                            width={1920}
                            height={500}
                            priority
                            className="w-[400px] rounded-[32px]"
                            alt={movie.title}
                        />
                    </div>
                    <div className="w-8/12 ml-8">
                        <div className="flex flex-col">
                            <p className="text-[4rem] text-white font-semibold">
                                {movie.title}
                            </p>
                            <div className="flex flex-row gap-4">
                                {movie.genres.map((genres) => {
                                    return (
                                        <div
                                            key={genres.id}
                                            className="rounded-full border-[2px] border-white px-6 py-2 border-solid cursor-pointer bg-black"
                                        >
                                            <span>{genres.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="text-[1.2rem] py-4 font-mono">
                                {movie.overview}
                            </p>
                            <p>Casts</p>
                            <div className="flex flex-row gap-4">
                                {listCast?.cast?.slice(0, 5).map((cast) => (
                                    <div key={cast.id} className="text-white">
                                        <Image
                                            src={`${ImagePath}/w500/${cast.profile_path}`}
                                            width={500}
                                            height={500}
                                            alt="cast"
                                            className="object-cover w-32"
                                        />
                                        <span className="font-thin">
                                            {cast.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
