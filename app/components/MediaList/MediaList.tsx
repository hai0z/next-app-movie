"use client";
import { Movie } from "@/service/TMDB.type";
import React from "react";
import { MovieCard1, MovieCard2, MovieCard3 } from "../MovieCard";
import useStore from "../../(store)/store";

interface IPageProps {
    movie: { results: Movie[] };
}
function MediaList({ movie }: IPageProps) {
    const mediaType = useStore((state) => state.mediaType);
    return (
        <div className="gap-8 pb-6 md:gap-4 md:pb-8 flex flex-wrap justify-center">
            {movie?.results.map((m, index) => {
                return mediaType === "list" ? (
                    <MovieCard2 m={m} index={index} key={m.id} />
                ) : mediaType == "compact" ? (
                    <MovieCard3 m={m} index={index} key={m.id} />
                ) : (
                    <MovieCard1 m={m} key={m.id} />
                );
            })}
        </div>
    );
}

export default MediaList;
