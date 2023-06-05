import React from "react";
import { Movie } from "@/service/TMDB.type";
import tmdb from "@/service/TMDB";
import MediaList from "@/app/components/MediaList/MediaList";
import ChangeMediaListBtn from "@/app/components/MediaList/ChangeMediaListBtn";
async function page({ params }: { params: any }) {
    const listRecommendations: { results: Movie[] } =
        await tmdb.getRecomendations(params.movieId, "movie");
    return (
        <div>
            <div className="ml-auto sticky top-[72px] z-50 w-fit  md:px-24 mb-6">
                <ChangeMediaListBtn />
            </div>
            <div className="w-full md:px-24 flex flex-wrap justify-center px-2">
                <MediaList movie={listRecommendations} />
            </div>
        </div>
    );
}

export default page;
