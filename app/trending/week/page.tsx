import React from "react";
import tmdb from "@/service/TMDB";
import { MovieList } from "@/service/TMDB.type";
import MovieCard from "@/app/components/MovieCard";
import Pagination from "@/app/components/Pagination";
async function page({ searchParams }: { searchParams: { page: number } }) {
    const movie: MovieList = await tmdb.getTrending(
        "movie",
        "week",
        searchParams.page ?? 1
    );
    return (
        <div>
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
