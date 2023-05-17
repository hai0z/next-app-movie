import React from "react";
import { Cast } from "../page";
import Image from "next/image";
async function page({ params }: { params: any }) {
    const ImagePath = "https://image.tmdb.org/t/p/";

    const getCast = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=${process.env.TMDB}&language=vi-VN`,
            { cache: "default" }
        );
        const data = await respone.json();
        return data;
    };
    const { cast }: Cast = await getCast();

    return (
        <div className="min-h-screen w-full px-24 grid grid-cols-1 md:grid-cols-4 gap-4">
            {cast.map((c) => (
                <div key={c.id} className="">
                    <Image
                        src={`${ImagePath}/w500/${c.profile_path}`}
                        width={500}
                        height={500}
                        alt="cast"
                        className="object-cover w-40 rounded-md"
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
