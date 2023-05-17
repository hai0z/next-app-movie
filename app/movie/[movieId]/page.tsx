import React from "react";
import Image from "next/image";
interface Cast {
    cast: {
        id: number;
        profile_path: string;
        name: string;
    }[];
}
async function Page({
    params,
}: {
    params: {
        movieId: string;
    };
}) {
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
        <div className="over-view mx-24 bg-base-200">
            {/* <p className="text-[1.2rem] font-mono text-base-content">
        {movie.overview}
    </p> */}
            <p className="text-3xl  text-base-content">Danh sách diễn viên</p>
            <div className="flex flex-row gap-4">
                {cast?.slice(0, 5).map((cast) => (
                    <div key={cast.id} className="text-white cursor-pointer">
                        <Image
                            src={`${ImagePath}/w500/${cast.profile_path}`}
                            width={500}
                            height={500}
                            alt="cast"
                            className="object-cover w-32"
                        />
                        <span className="font-thin text-base-content">
                            {cast.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;
