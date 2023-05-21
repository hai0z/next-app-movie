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
        <div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-4 pb-32 md:pb-8">
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
