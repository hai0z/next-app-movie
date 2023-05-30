import { Movie } from "@/service/TMDB.type";
import React from "react";
import Image from "next/image";
import MovieDetailTab from "@/app/components/MovieDetailTab";
import WatchTrailerButton from "@/app/components/WatchTrailerButton";
import Modal from "@/app/components/Modal";
import tmdb from "@/service/TMDB";
import ShadowImg from "@/app/components/ShadowImg";
interface MovieDetailProp {
    params: {
        movieId: string;
    };
    children: React.ReactNode;
}

export const metadata = {
    title: "Hai0z Movie",
};

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
            <div className="fixed">
                <Image
                    src={tmdb.getImage(movie.backdrop_path)}
                    width={1920}
                    height={1080}
                    priority
                    className="object-cover md:rounded-tl-[20px] md:h-[95vh]"
                    alt={movie.title}
                />
                <ShadowImg />
            </div>
            <div className="w-full relative pt-[35%]">
                <div className="flex flex-row  justify-between  relative bottom-0 md:pb-16">
                    <div className="flex w-4/12 justify-center drop-shadow-md z-10 mb-3">
                        <Image
                            src={tmdb.getImage(movie.poster_path, "w500")}
                            width={500}
                            height={100}
                            priority
                            className="md:w-[350px] md:rounded-[32px] rounded-md w-28"
                            alt={movie.title}
                        />
                    </div>
                    <div className="w-8/12 z-10">
                        <div className="flex flex-col ml-8">
                            <p className="md:text-[4rem] font-semibold text-base-content drop-shadow-2xl">
                                {movie.title}
                            </p>
                            <p className="text-base-content mt-4 text-[16px] lg:text-lg italic">
                                {movie?.tagline}
                            </p>
                            <button className="btn btn-secondary w-fit md:btn-md  rounded-full  ring-4 ring-primary mt-4 hidden md:block">
                                {movie.release_date} •{" "}
                                {convertToHourMinute(movie.runtime)}
                            </button>
                            <div className="md:flex flex-row gap-4 mt-4 flex-wrap hidden">
                                {movie.genres.map((genres) => {
                                    return (
                                        <div
                                            key={genres.id}
                                            className="btn btn-secondary md:btn-md "
                                        >
                                            <span>{genres.name}</span>
                                        </div>
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
                    <button className="btn btn-secondary w-fit md:btn-md  rounded-full  ring-2 ring-primary my-2 btn-sm">
                        {movie.release_date} •{" "}
                        {convertToHourMinute(movie.runtime)}
                    </button>
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
            <Modal />
        </div>
    );
}

export default Layout;
