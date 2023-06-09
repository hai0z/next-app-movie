import React from "react";
import { Cast } from "../page";

import PeopleCard from "@/app/components/PeopleCard";
async function page({ params }: { params: any }) {
    const getCast = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();
        return data;
    };
    const cast: { cast: Cast[] } = await getCast();

    return (
        <div className="min-h-screen w-full px-24 grid grid-cols-1 md:grid-cols-4 gap-4 pb-96">
            {cast.cast.map((c) => (
                <PeopleCard people={c as any} key={c.id} />
            ))}
        </div>
    );
}

export default page;
