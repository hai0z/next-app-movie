import ChangeMediaListBtn from "@/app/components/MediaList/ChangeMediaListBtn";
import { MovieCard2 } from "@/app/components/MovieCard";
import tmdb from "@/service/TMDB";
import React from "react";
interface IPageProps {
    params: {
        peopleId: number;
    };
}
async function page({ params }: IPageProps) {
    const listOfMoview = await tmdb.getMovieCredits(params.peopleId);
    return (
        <div className="flex flex-wrap">
            <p className="text-xl font-bold mb-4">
                Movie Credits {listOfMoview.cast.length}
            </p>

            {listOfMoview.cast.map((m, index) => (
                <MovieCard2 m={m as any} key={m.id} index={index} />
            ))}
        </div>
    );
}

export default page;
