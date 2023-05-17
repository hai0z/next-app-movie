import { Movie } from "@/app/page";
import React from "react";
import Image from "next/image";
import Link from "next/link";
interface MovieDetailProp {
    params: {
        movieId: string;
    };
    children: React.ReactNode;
}

export const metadata = {
    title: "Movie",
};
async function Layout({ params, children }: MovieDetailProp) {
    const ImagePath = "https://image.tmdb.org/t/p/";

    const getData = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.TMDB}&language=vi-VN`,
            {
                cache: "default",
            }
        );
        const data = await respone.json();

        return data;
    };
    const getCast = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=${process.env.TMDB}&language=vi-VN`,
            { cache: "default" }
        );
        const data = await respone.json();
        return data;
    };
    const movie: Movie = await getData();
    // const { cast }: Cast = await getCast();
    return (
        <div className="w-full flex flex-col min-h-screen bg-base-100">
            <div className="fixed">
                <Image
                    src={`${ImagePath}/original/${movie.backdrop_path}`}
                    width={1920}
                    height={500}
                    priority
                    className="h-screen object-cover "
                    alt={movie.title}
                />
            </div>
            <div className="w-full pt-96 relative backdrop-blur-sm">
                <div className="flex flex-row mx-28 justify-between">
                    <div className="flex w-4/12 justify-center ">
                        <Image
                            src={`${ImagePath}/w500/${movie.poster_path}`}
                            width={500}
                            height={500}
                            priority
                            className="w-[350px] rounded-[32px]"
                            alt={movie.title}
                        />
                    </div>
                    <div className="w-8/12">
                        <div className="flex flex-col">
                            <p className="text-[4rem] font-semibold text-base-content drop-shadow-2xl">
                                {movie.title}
                            </p>
                            <p className="text-base-content mt-4 text-[16px] italic">
                                {movie?.tagline}
                            </p>
                            <div className="flex flex-row gap-4 mt-4">
                                {movie.genres.map((genres) => {
                                    return (
                                        <div
                                            key={genres.id}
                                            className="btn btn-secondary"
                                        >
                                            <span>{genres.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-200 h-[2000px]">
                    <div className="tabs tabs-boxed  px-24 mt-16">
                        <Link
                            href={`/movie/${params.movieId}`}
                            className="tab tab-active"
                        >
                            Overview
                        </Link>
                        <Link
                            href={`/movie/${params.movieId}/cast`}
                            className="tab "
                        >
                            Cast
                        </Link>
                        <a className="tab">Photos</a>
                        <a className="tab">Video</a>
                    </div>
                    <div className="w-full divider px-24"></div>

                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
