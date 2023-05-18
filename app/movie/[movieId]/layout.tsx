import { Movie } from "@/app/page";
import React from "react";
import Image from "next/image";
import MovieDetailTab from "@/app/components/MovieDetailTab";
import WatchTrailerButton from "@/app/components/WatchTrailerButton";
import Modal from "@/app/components/Modal";
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
    const movie: Movie = await getData();
    function convertToHourMinute(minutes: number) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        const formattedTime = `${hours}h ${remainingMinutes}m`;
        return formattedTime;
    }
    return (
        <div className="w-full flex flex-col bg-base-100 h-screen rounded-tl-[20px]">
            <div className="fixed img-shadow">
                <Image
                    src={`${ImagePath}/original/${movie.backdrop_path}`}
                    width={1920}
                    height={1080}
                    priority
                    className="object-cover rounded-tl-[20px]"
                    alt={movie.title}
                />
            </div>
            <div className="w-full relative mt-96">
                <div className="flex flex-row mx-28 justify-between">
                    <div className="flex w-4/12 justify-center">
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
                        <div className="flex flex-col ml-8">
                            <p className="text-[4rem] font-semibold text-base-content drop-shadow-2xl">
                                {movie.title}
                            </p>
                            <p className="text-base-content mt-4 text-[16px] lg:text-lg italic">
                                {movie?.tagline}
                            </p>
                            <button className="btn btn-secondary w-fit md:btn-md  rounded-full  ring-4 ring-primary mt-4">
                                {movie.release_date} •{" "}
                                {convertToHourMinute(movie.runtime)}
                            </button>
                            <div className="flex flex-row gap-4 mt-4 flex-wrap">
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
                            <div className="mt-16">
                                <WatchTrailerButton videoId={params.movieId} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-200">
                    <MovieDetailTab />
                    <div className="w-full divider px-24"></div>
                    {children}
                </div>
            </div>
            <Modal />
        </div>
    );
}

export default Layout;
