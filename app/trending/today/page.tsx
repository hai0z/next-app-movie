import Pagination from "@/app/components/Pagination";
import React from "react";
import tmdb from "@/service/TMDB";
import { Movie } from "@/service/TMDB.type";

import MediaList from "@/app/components/MediaList/MediaList";
interface IPageProps {
    searchParams: {
        page: number;
    };
}
async function Page({ searchParams }: IPageProps) {
    const movie: { results: Movie[] } = await tmdb.getTrending(
        "movie",
        "day",
        searchParams.page ?? 1
    );

    return (
        <div className="pb-16">
            <div className="flex flex-row flex-wrap items-center justify-evenly gap-8 pb-6 md:gap-4 md:pb-8 overflow-hidden">
                <MediaList movie={movie} />
            </div>
            <div className="flex flex-row items-center justify-center pb-10">
                <Pagination totalPages={500} href="/trending/today?" />
            </div>
        </div>
    );
}

export default Page;
