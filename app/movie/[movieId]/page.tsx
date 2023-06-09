import React from "react";
import { Movie } from "@/service/TMDB.type";
import Link from "next/link";
import tmdb from "@/service/TMDB";
import { Metadata } from "next";

import ListMovie from "@/app/components/CardSlide";
import PeopleCard from "@/app/components/PeopleCard";
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
        results: listRecommendations.results.slice(0, 9),
    };
    return (
        <div className="flex flex-col lg:flex-row h-full px-2 md:px-4 gap-2 lg:mt-20 mt-8 justify-center pb-20">
            <div className="lg:w-6/12 xl:w-3/12 flex w-full gap-4 md:justify-center">
                <div className="bg-primary/5 shadow-lg p-4 rounded-lg space-y-4 lg:max-w-[75%] h-fit w-full flex flex-col">
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
                    <div className="flex flex-wrap gap-4">
                        {cast?.slice(0, 5).map((cast) => (
                            <div key={cast.id} className="carousel-item">
                                <PeopleCard people={cast as any} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="md:text-3xl text-base-content pt-4">
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
                    <div className="flex justify-center">
                        <ListMovie data={slicedRecommendations} type="movie" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
