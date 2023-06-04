import React from "react";
import { MovieList } from "@/service/TMDB.type";
import tmdb from "@/service/TMDB";
import MovieCard from "@/app/components/MovieCard";
async function page({ params }: { params: any }) {
    const { results: listRecommendations }: MovieList =
        await tmdb.getRecomendations(params.movieId, "movie");

    return (
        <div className="min-h-screen w-full md:px-24 flex flex-wrap justify-center gap-8 px-16">
            {listRecommendations.map((l: any) => (
                <MovieCard m={l} key={l.id} />
            ))}
        </div>
    );
}

export default page;
