import ChangeMediaListBtn from "@/app/components/MediaList/ChangeMediaListBtn";
import MediaList from "@/app/components/MediaList/MediaList";
import Pagination from "@/app/components/Pagination";
import tmdb from "@/service/TMDB";
import { Movie } from "@/service/TMDB.type";
import React from "react";
interface PageProp {
    searchParams: {
        with_genres: string;
        page: number;
    };
}
async function page({ searchParams }: PageProp) {
    const listMovie: { results: Movie[]; total_pages: number } =
        await tmdb.discover(
            "movie",
            +searchParams.with_genres,
            +searchParams.page ?? 1
        );

    return (
        <div className="pt-24 px-4 w-full">
            <div className="py-2 sticky z-50 top-0 flex justify-end -mr-20 w-full">
                <ChangeMediaListBtn />
            </div>
            <div className="flex justify-center items-center mt-4 mb-10">
                <Pagination
                    totalPages={500}
                    href={`/discover/movies?with_genres=${searchParams.with_genres}&`}
                />
            </div>
            <div className="flex flex-wrap gap-4 overflow-hidden">
                <MediaList movie={listMovie} />
            </div>
        </div>
    );
}

export default page;
