import React from "react";
import Image from "next/image";
import { Movie, MovieList } from "@/app/page";
import Link from "next/link";
import MovieCard from "@/app/components/MovieCard";
export interface Cast {
    cast: {
        id: number;
        profile_path: string;
        name: string;
    }[];
}
async function Page({
    params,
}: {
    params: {
        movieId: string;
    };
}) {
    const ImagePath = "https://image.tmdb.org/t/p/";

    const getCast = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=${process.env.TMDB}&language=vi-VN`,
            { cache: "default" }
        );
        const data = await respone.json();
        return data;
    };
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
    const getRecomendations = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/${params.movieId}/recommendations?api_key=${process.env.TMDB}&language=vi-VN`,
            {
                cache: "default",
            }
        );
        const data = await respone.json();

        return data;
    };
    const movie: Movie = await getData();
    const { cast }: Cast = await getCast();
    const { results: recommenList }: MovieList = await getRecomendations();
    return (
        <div className="mx-24 bg-base-200 flex flex-row h-full">
            <div className="w-3/12 flex ">
                <div className="bg-base-100 contrast-75 p-4 rounded-lg space-y-4 max-w-[75%] h-fit">
                    <div>
                        <p className="font-bold">Original Title</p>
                        <p className="font-mono font-extralight">
                            {movie.original_title}
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">Status</p>
                        <p className="font-mono font-extralight">
                            {movie.status}
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">Production Companies</p>
                        {movie.production_companies.map((company) => (
                            <p
                                className="font-mono font-extralight"
                                key={company.name}
                            >
                                {company.name}
                            </p>
                        ))}
                    </div>
                    <div>
                        <p className="font-bold">Budget</p>
                        <p className="font-mono font-extralight">
                            {movie.budget.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                        </p>
                    </div>
                    <div>
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
            <div className="flex flex-col w-9/12 ">
                <div className="bg-base-100 contrast-75 p-6 rounded-md space-y-3">
                    <p> {movie.overview}</p>
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
                    <p className="text-3xl  text-base-content pt-4">
                        Top Diễn Viên
                    </p>
                    <Link
                        href={`movie/${params.movieId}/cast`}
                        className="btn btn-primary btn-outline w-40 my-4"
                    >
                        Xem Thêm
                    </Link>
                    <div className="flex flex-row gap-4">
                        {cast?.slice(0, 5).map((cast) => (
                            <div
                                key={cast.id}
                                className="text-white cursor-pointer"
                            >
                                <Image
                                    src={`${ImagePath}/w500/${cast.profile_path}`}
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
                    <p className="text-3xl  text-base-content pt-4">
                        Phim Đề Xuất
                    </p>
                    <Link
                        href={`movie/${params.movieId}/recommendations`}
                        className="btn btn-primary btn-outline w-40 my-4"
                    >
                        Xem Thêm
                    </Link>
                    <div className="flex flex-row gap-4">
                        {recommenList?.slice(0, 5).map((r: any) => (
                            <MovieCard m={r} key={r.id} />
                        ))}
                    </div>
                </div>
                <div className="h-screen"></div>
            </div>
        </div>
    );
}

export default Page;
