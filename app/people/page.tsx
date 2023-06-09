import tmdb from "@/service/TMDB";
import { TrendingPeople } from "@/service/TMDB.type";
import React from "react";
import PeopleCard from "../components/PeopleCard";
import Pagination from "../components/Pagination";

interface IPageProps {
    searchParams: {
        page: number;
    };
}
async function page({ searchParams }: IPageProps) {
    const popularPeople: { results: TrendingPeople[] } = await tmdb.getTrending(
        "person",
        "day",
        searchParams.page ?? 1
    );
    return (
        <div className="pt-16 px-4">
            <h1 className="text-4xl font-bold pt-16">Popular People</h1>
            <div className="flex justify-center items-center py-16">
                <Pagination totalPages={500} href="/people?" />
            </div>
            <div className="flex flex-row gap-4 flex-wrap justify-center">
                {popularPeople.results.map((p) => (
                    <PeopleCard key={p.id} people={p} />
                ))}
            </div>
        </div>
    );
}

export default page;
