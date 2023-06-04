import React from "react";
import tmdb from "@/service/TMDB";
import { Movie } from "@/service/TMDB.type";
import Pagination from "@/app/components/Pagination";
import MediaList from "@/app/components/MediaList/MediaList";
async function page({ searchParams }: { searchParams: { page: number } }) {
    const movie: { results: Movie[] } = await tmdb.getTrending(
        "movie",
        "week",
        searchParams.page ?? 1
    );
    return (
        <div className="pb-16">
            <div className="flex flex-row flex-wrap items-center justify-evenly gap-8 pb-6 md:gap-4 md:pb-8">
                <MediaList movie={movie} />
            </div>
            <div className="flex flex-row items-center justify-center pb-10">
                <Pagination totalPages={500} href="/trending/today?" />
            </div>
        </div>
    );
}

export default page;
