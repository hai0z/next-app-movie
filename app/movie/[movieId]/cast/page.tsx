import React from "react";
import { Cast } from "../page";
import Image from "next/image";
import tmdb from "@/service/TMDB";
async function page({ params }: { params: any }) {
    const getCast = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();
        return data;
    };
    const { cast }: Cast = await getCast();

    return (
        <div className="min-h-screen w-full px-24 grid grid-cols-1 md:grid-cols-4 gap-4 pb-96">
            {cast.map((c) => (
                <div key={c.id} className="">
                    <Image
                        src={tmdb.getImage(c.profile_path, "w500")}
                        width={500}
                        height={500}
                        alt="cast"
                        className="object-cover w-40 rounded-md"
                        priority
                    />
                    <span className="font-thin text-base-content">
                        {c.name}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default page;
