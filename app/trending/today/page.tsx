import MovieCard from "@/app/components/MovieCard";
import Pagination from "@/app/components/Pagination";
import React from "react";
import tmdb from "@/service/TMDB";
import { Movie } from "@/service/TMDB.type";

interface IPageProps {
    searchParams: {
        page: number;
    };
}
async function Page({ searchParams }: IPageProps) {
    const movie: { results: Movie[]; total_pages: number } =
        await tmdb.getTrending("movie", "day", searchParams.page ?? 1);
    return (
        <div className="pb-16">
            <div className="flex flex-row flex-wrap items-center justify-around gap-8 pb-6 md:justify-between md:gap-4 md:pb-8">
                {movie.results.map((m) => (
                    <MovieCard m={m} key={m.id} />
                ))}
            </div>
            <div className="flex flex-row items-center justify-center pb-10">
                <Pagination
                    totalPages={movie.total_pages}
                    href="/trending/today?"
                />
            </div>
        </div>
    );
}

export default Page;
