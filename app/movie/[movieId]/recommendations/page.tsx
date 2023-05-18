import React from "react";
import Image from "next/image";
import { MovieList } from "@/app/page";
import Link from "next/link";
async function page({ params }: { params: any }) {
    const ImagePath = "https://image.tmdb.org/t/p/";

    const getRecomendations = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/${params.movieId}/recommendations?api_key=${process.env.TMDB}&language=vi-VN`,
            {
                cache: "default",
            }
        );
        const data = await respone.json();

        return data;
    };
    const { results: listRecommendations }: MovieList =
        await getRecomendations();

    return (
        <div className="min-h-screen w-full px-24 grid grid-cols-1 md:grid-cols-4 gap-4">
            {listRecommendations.map((l) => (
                <div
                    key={l.id}
                    className="cursor-pointer  w-64 bg-base-100 rounded-lg"
                >
                    <div className="overflow-hidden rounded-lg flex-1">
                        <Link href={"/movie/" + l.id + "#top"}>
                            <Image
                                src={`${ImagePath}/w500/${l.poster_path}`}
                                width={500}
                                height={500}
                                alt="cast"
                                className="object-cover w-64 rounded-md hover:scale-110 hover:rounded-lg transition-all duration-150 group"
                            />
                        </Link>
                    </div>
                    <div className="font-semibold text-base-content py-4 flex-1">
                        {l.title}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default page;
