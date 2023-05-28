import MovieCard from "@/app/components/MovieCard";
import Pagination from "@/app/components/Pagination";
import tmdb from "@/service/TMDB";
import { Movie } from "@/service/TMDB.type";
import React from "react";
interface PageProp {
    searchParams: {
        with_genres: string;
        page: number;
    };
}
async function page({ searchParams }: PageProp) {
    const listMovie: { results: Movie[]; total_pages: number } =
        await tmdb.discover(
            "movie",
            +searchParams.with_genres,
            +searchParams.page ?? 1
        );

    return (
        <div className="pt-24 px-4">
            <div className="flex flex-wrap gap-4">
                {listMovie.results.map((m) => (
                    <MovieCard key={m.id} m={m} />
                ))}
            </div>
            <div className="flex justify-center items-center mt-4 mb-10">
                <Pagination
                    totalPages={listMovie.total_pages}
                    href={`/discover/movies?with_genres=${searchParams.with_genres}&`}
                />
            </div>
        </div>
    );
}

export default page;
