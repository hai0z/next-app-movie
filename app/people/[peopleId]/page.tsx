import MovieCard from "@/app/components/MovieCard";
import tmdb from "@/service/TMDB";
import { TrendingPeople } from "@/service/TMDB.type";
import React from "react";

interface IPageProps {
    params: {
        peopleId: number;
    };
}
async function page({ params }: IPageProps) {
    const people = await tmdb.getPeople(params.peopleId);
    const knowFor: { results: TrendingPeople[] } = await tmdb.search(
        people.name,
        "person"
    );
    return (
        <div className="px-4 text-justify mb-20 lg:mb-0">
            <p className="font-bold text-lg mb-4">Biography</p>
            <div>
                {people.biography.split("\n\n").map((content, index) => (
                    <p key={index}>
                        {content} <br /> <br />
                    </p>
                ))}
            </div>
            <p className="font-bold text-lg my-4">Know For</p>
            <div className="flex gap-4">
                {knowFor?.results?.[0].known_for.map((k) => (
                    <MovieCard key={k.id} m={k as any} />
                ))}
            </div>
        </div>
    );
}

export default page;
