import { Movie } from "@/service/TMDB.type";
import React from "react";
import Image from "next/image";
import MovieDetailTab from "@/app/components/MovieDetailTab";
import WatchTrailerButton from "@/app/components/WatchTrailerButton";
import Modal from "@/app/components/Modal";
import tmdb from "@/service/TMDB";
import ShadowImg from "@/app/components/ShadowImg";
import Link from "next/link";
import { Metadata } from "next";
interface MovieDetailProp {
    params: {
        movieId: string;
    };
    children: React.ReactNode;
}

export async function generateMetadata({
    params,
}: {
    params: { movieId: string };
}): Promise<Metadata> {
    const movie: Movie = await tmdb.getMovieOrTV(+params.movieId, "movie");
    return {
        title: movie.title,
    };
}

async function Layout({ params, children }: MovieDetailProp) {
    const movie: Movie = await tmdb.getMovieOrTV(+params.movieId, "movie");
    function convertToHourMinute(minutes: number) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        const formattedTime = `${hours}h ${remainingMinutes}m`;
        return formattedTime;
    }
    return (
        <div className="w-full flex flex-col md:rounded-tl-[20px]">
            <div className="fixed w-full">
                <ShadowImg />
                <Image
                    src={tmdb.getImage(movie.backdrop_path)}
                    width={1920}
                    height={1080}
                    priority
                    className="object-cover md:rounded-tl-[20px] md:h-[95vh] "
                    alt={movie.title}
                />
                <ShadowImg />
            </div>
            <div className="w-full relative md:px-4 mt-[35%]">
                <div className="flex flex-row justify-around  relative bottom-0 md:pb-16">
                    <div className="flex w-4/12 justify-center drop-shadow-md z-10 mb-3">
                        <Image
                            src={tmdb.getImage(movie.poster_path, "w500")}
                            width={500}
                            height={100}
                            priority
                            className="md:w-[250px] lg:w-[300px] h-fit md:rounded-xl rounded-md w-32"
                            alt={movie.title}
                        />
                    </div>
                    <div className="w-8/12 z-10">
                        <div className="flex flex-col ml-8">
                            <p className="md:text-[4rem] font-bold text-base-content drop-shadow-2xl text-[1.2rem]">
                                {movie.title}
                            </p>
                            <p className="text-base-content mt-4 text-[16px] lg:text-lg italic font-semibold">
                                {movie?.tagline}
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-secondary w-fit rounded-full ring-2 ring-primary mt-4 hidden md:block capitalize font-bold text-secondary-content p-1">
                                    <span className="badge badge-primary">
                                        TMDB
                                    </span>{" "}
                                    {movie.vote_average.toFixed(1)}
                                </button>
                                <button className="bg-secondary w-fit rounded-full ring-2 ring-primary mt-4 hidden md:block capitalize font-bold text-secondary-content p-1">
                                    {movie.release_date} •{" "}
                                    {convertToHourMinute(movie.runtime)}
                                </button>
                            </div>
                            <div className="md:flex flex-row gap-4 mt-4 flex-wrap hidden">
                                {movie.genres.map((genres) => {
                                    return (
                                        <Link
                                            href={`discover/movies?with_genres=${genres.id}`}
                                            key={genres.id}
                                            className="btn btn-secondary capitalize"
                                        >
                                            <span>{genres.name}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className="mt-16 hidden md:block">
                                <WatchTrailerButton videoId={params.movieId} />
                            </div>
                        </div>
                    </div>
                </div>
                <ShadowImg />
            </div>
            <div className=" w-full bg-base-100 z-10">
                <div className="md:hidden p-4 md:p-0 z-10">
                    <div>
                        <button className="btn btn-secondary w-fit md:btn-md  rounded-full  ring-2 ring-primary my-2 btn-sm mr-2 gap-1">
                            <span className="badge badge-primary">TMDB</span>{" "}
                            {movie.vote_average.toFixed(1)}
                        </button>
                        <button className="btn btn-secondary w-fit md:btn-md  rounded-full  ring-2 ring-primary my-2 btn-sm">
                            {movie.release_date} •{" "}
                            {convertToHourMinute(movie.runtime)}
                        </button>
                    </div>
                    <div className="flex flex-row gap-2 flex-wrap">
                        {movie.genres.map((genres) => {
                            return (
                                <div
                                    key={genres.id}
                                    className="btn btn-secondary md:btn-md w-fit btn-xs"
                                >
                                    <span>{genres.name}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-2">
                        <WatchTrailerButton videoId={params.movieId} />
                    </div>
                </div>
                <MovieDetailTab />
                {children}
            </div>
            {/* <Modal /> */}
        </div>
    );
}

export default Layout;
