import React from "react";
import tmdb from "@/service/TMDB";
import { MovieList } from "@/service/TMDB.type";
import MovieCard from "@/app/components/MovieCard";
import Pagination from "@/app/components/Pagination";
import Search from "@/app/components/search/Search";
interface IPageProps {
    searchParams: {
        page: number;
        q: string;
    };
}
async function page({ searchParams }: IPageProps) {
    const movie: MovieList = await tmdb.getTrending(
        "movie",
        "day",
        searchParams.page ?? 1
    );
    const searchMovie: MovieList = await tmdb.search(searchParams.q, "tv");
    return (
        <div>
            <Search />

            <p className="md:text-2xl font-bold py-8">Xu hướng hôm nay</p>
            {searchParams.q === undefined ? (
                <div className="flex flex-row justify-between items-center flex-wrap gap-4 md:pb-8 pb-6">
                    {movie.results.map((m: any) => (
                        <MovieCard m={m} key={m.id} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-row justify-between items-center flex-wrap gap-4 md:pb-8 pb-6">
                    {searchMovie.results.map((m: any) => (
                        <MovieCard m={m} key={m.id} />
                    ))}
                </div>
            )}
            <div className="flex flex-row items-center justify-center pb-10">
                <Pagination totalPages={500} />
            </div>
        </div>
    );
}

export default page;
