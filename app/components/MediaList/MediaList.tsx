"use client";
import useWindowDimensions from "@/hooks/useWindowDemensions";
import { Movie } from "@/service/TMDB.type";
import React from "react";
import MovieCard, { MovieCard2 } from "../MovieCard";
import useStore from "../../(store)/store";

interface IPageProps {
    movie: { results: Movie[] };
}
function MediaList({ movie }: IPageProps) {
    const { width } = useWindowDimensions();
    const mediaType = useStore((state) => state.mediaType);
    return (
        <div className="flex flex-row flex-wrap  justify-center gap-8 pb-6 md:gap-4 md:pb-8">
            {movie?.results.map((m, index) => {
                return width < 768 ? (
                    <MovieCard2 m={m} key={m.id} index={index} />
                ) : mediaType == "list" ? (
                    <MovieCard2 m={m} key={m.id} index={index} />
                ) : (
                    <MovieCard m={m} key={m.id} />
                );
            })}
        </div>
    );
}

export default MediaList;
