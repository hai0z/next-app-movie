import React from "react";
import tmdb from "@/service/TMDB";
import { MovieList } from "@/service/TMDB.type";
import MovieCard from "@/app/components/MovieCard";
import Pagination from "@/app/components/Pagination";

async function page({ searchParams }: any) {
    const movie: MovieList = await tmdb.getTrending(
        "movie",
        "day",
        searchParams.page ?? 1
    );
    return (
        <div className="pb-16">
            <div className="flex flex-row md:justify-between justify-around items-center flex-wrap gap-8 md:gap-4 md:pb-8 pb-6">
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
