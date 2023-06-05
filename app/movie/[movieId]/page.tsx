import React from "react";
import Image from "next/image";
import { Movie } from "@/service/TMDB.type";
import Link from "next/link";
import MovieCard from "@/app/components/MovieCard";
import tmdb from "@/service/TMDB";
import { Metadata } from "next";
import MediaList from "@/app/components/MediaList/MediaList";
import ChangeMediaListBtn from "@/app/components/MediaList/ChangeMediaListBtn";
export interface Cast {
    id: number;
    profile_path: string;
    name: string;
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
async function Page({
    params,
}: {
    params: {
        movieId: number;
    };
}) {
    const movie: Movie = await tmdb.getMovieOrTV(params.movieId, "movie");
    const { cast }: { cast: Cast[] } = await tmdb.getCast(
        params.movieId,
        "movie"
    );
    const listRecommendations: { results: Movie[] } =
        await tmdb.getRecomendations(params.movieId, "movie");
    const slicedRecommendations = {
        results: listRecommendations.results.slice(0, 4),
    };
    return (
        <div className="lg:mx-24 flex flex-col lg:flex-row h-full px-2 md:px-4 gap-2 lg:mt-20 mt-8">
            <div className="lg:w-6/12 xl:w-3/12 flex w-full gap-4">
                <div className=" bg-primary/5 shadow-lg p-4 rounded-lg space-y-4 lg:max-w-[75%] h-fit w-full flex flex-col">
                    <div className="grid grid-cols-2 lg:flex-col  lg:flex">
                        <p className="font-bold">Original Title</p>
                        <p className="font-mono font-extralight">
                            {movie.original_title}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:flex-col lg:flex">
                        <p className="font-bold">Status</p>
                        <p className="font-mono font-extralight">
                            {movie.status}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:flex-col lg:flex">
                        <p className="font-bold">Production Companies</p>
                        <div>
                            {movie.production_companies.map((company) => (
                                <p
                                    className="font-mono font-extralight"
                                    key={company.name}
                                >
                                    {company.name}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:flex-col lg:flex">
                        <p className="font-bold">Budget</p>
                        <p className="font-mono font-extralight">
                            {movie.budget.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:flex-col lg:flex">
                        <p className="font-bold">Revenue</p>
                        <p className="font-mono font-extralight">
                            {movie.revenue.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:w-7/12 xl:w-9/12 w-full">
                <div className="bg-primary/5 shadow-lg p-6 rounded-md space-y-3">
                    <p className="text-justify"> {movie.overview}</p>
                    <div className="flex flex-row gap-4">
                        <div>
                            <p className="font-bold">Production Countries</p>
                            {movie.production_countries.map((country) => (
                                <p key={country.name}>{country.name}</p>
                            ))}
                        </div>
                        <div>
                            Spoken Languages
                            {movie.spoken_languages.map((l) => (
                                <p key={l.name}>{l.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <p className="md:text-3xl  text-base-content pt-4">
                        Top Diễn Viên
                    </p>
                    <Link
                        href={`movie/${params.movieId}/cast`}
                        className="btn btn-primary btn-outline w-40 my-4"
                    >
                        Xem Thêm
                    </Link>
                    <div className="flex flex-row gap-4 flex-wrap">
                        {cast?.slice(0, 5).map((cast) => (
                            <div
                                key={cast.id}
                                className="text-white cursor-pointer"
                            >
                                <Image
                                    src={tmdb.getImage(
                                        cast.profile_path,
                                        "w500"
                                    )}
                                    width={500}
                                    height={500}
                                    alt="cast"
                                    className="object-cover w-32"
                                />
                                <span className="font-thin text-base-content">
                                    {cast.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="md:text-3xl  text-base-content pt-4">
                        <p> Phim Đề Xuất</p>
                    </div>
                    {!!slicedRecommendations.results.length && (
                        <Link
                            href={`movie/${params.movieId}/recommendations`}
                            className="btn btn-primary btn-outline w-40 my-4"
                        >
                            Xem Thêm
                        </Link>
                    )}

                    <div className="ml-auto w-full flex sticky top-14 py-4 justify-end z-50 overflow-hidden">
                        {!!slicedRecommendations.results.length && (
                            <ChangeMediaListBtn />
                        )}
                    </div>
                    <div className="flex flex-row items-center overflow-hidden px-1">
                        <MediaList movie={slicedRecommendations} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
