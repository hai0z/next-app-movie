import React from "react";
import tmdb from "@/service/TMDB";
import { MovieList } from "@/service/TMDB.type";
import MovieCard from "@/app/components/MovieCard";
async function page() {
    const movie: MovieList = await tmdb.getTrending("movie", "week");
    return (
        <div className="flex flex-row justify-between items-center flex-wrap gap-4 pb-32">
            {movie.results.map((m: any) => (
                <MovieCard m={m} key={m.id} />
            ))}
        </div>
    );
}

export default page;
