import React from "react";
import tmdb from "@/service/TMDB";
import { Movie, MovieList } from "@/service/TMDB.type";
import MovieCard from "@/app/components/MovieCard";
import Pagination from "@/app/components/Pagination";
import Search from "@/app/components/search/Search";
import MediaList from "@/app/components/MediaList/MediaList";
interface IPageProps {
    searchParams: {
        page: number;
        q: string;
    };
}
async function page({ searchParams }: IPageProps) {
    const movie: { results: Movie[] } = await tmdb.getTrending(
        "movie",
        "day",
        searchParams.page ?? 1
    );
    const searchMovie: { results: Movie[] } = await tmdb.search(
        searchParams.q,
        "movie"
    );
    return (
        <div>
            <Search />
            <p className="md:text-2xl font-bold py-8">Xu hướng hôm nay</p>
            {searchParams.q === undefined ? (
                <div className="flex flex-row justify-between items-center flex-wrap gap-4 md:pb-8 pb-6 overflow-hidden">
                    <MediaList movie={movie} />
                </div>
            ) : (
                <div className="flex flex-row justify-between items-center flex-wrap gap-4 md:pb-8 pb-6 overflow-hidden">
                    <MediaList movie={searchMovie} />
                </div>
            )}
            <div className="flex flex-row items-center justify-center pb-10">
                <Pagination totalPages={500} />
            </div>
        </div>
    );
}

export default page;
