import MovieCard from "@/app/components/MovieCard";
import Pagination from "@/app/components/Pagination";
import React from "react";
import tmdb from "@/service/TMDB";
import { MovieList } from "@/service/TMDB.type";

async function page({ searchParams }: any) {
    const movie: MovieList = await tmdb.getTrending(
        "movie",
        "day",
        searchParams.page ?? 1
    );
    return (
        <div className="pb-16">
            <div className="flex flex-row flex-wrap items-center justify-around gap-8 pb-6 md:justify-between md:gap-4 md:pb-8">
                {movie.results.map((m: any) => (
                    <MovieCard m={m} key={m.id} />
                ))}
            </div>
            <div className="flex flex-row items-center justify-center pb-10">
                <Pagination totalPages={movie.total_pages} />
            </div>
        </div>
    );
}

export default page;
