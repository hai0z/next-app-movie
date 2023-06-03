"use client";
import tmdb from "@/service/TMDB";
import { ListPhotos } from "@/service/TMDB.type";
import React from "react";
import Image from "next/image";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import useSwr from "swr";
async function Page({ params }: { params: { movieId: number } }) {
    const { data: listPhoto } = useSwr<ListPhotos>(
        `/photos/${params.movieId}`,
        () => tmdb.getPhotos("movie", params.movieId),
        {
            revalidateOnMount: true,
        }
    );
    return (
        <PhotoProvider
            speed={() => 800}
            easing={(type) =>
                type === 2
                    ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                    : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
        >
            <div className="flex justify-center flex-col max-w-7xl items-center mx-auto">
                <h2 className="font-bold text-lg">Backdrops</h2>
                <div className="pb-20 flex gap-4 flex-wrap justify-center">
                    {listPhoto?.backdrops
                        .slice(0, 10)
                        .map((backdrop, index) => (
                            <PhotoView
                                key={index}
                                src={tmdb.getImage(backdrop.file_path)}
                            >
                                <Image
                                    width={240}
                                    height={240}
                                    src={tmdb.getImage(backdrop.file_path)}
                                    priority
                                    alt="img"
                                    className="object-cover w-64"
                                />
                            </PhotoView>
                        ))}
                </div>
                <h2 className="font-bold text-lg">Logos</h2>
                <div className="pb-20 flex gap-4 flex-wrap justify-center">
                    {listPhoto?.logos.slice(0, 2).map((backdrop, index) => (
                        <PhotoView
                            key={index}
                            src={tmdb.getImage(backdrop.file_path)}
                        >
                            <Image
                                width={240}
                                height={240}
                                src={tmdb.getImage(backdrop.file_path)}
                                priority
                                alt="img"
                                className="object-cover w-64"
                            />
                        </PhotoView>
                    ))}
                </div>
                <h2 className="font-bold text-lg">Posters</h2>
                <div className="pb-20 flex gap-4 flex-wrap items-center justify-center">
                    {listPhoto?.posters.slice(0, 5).map((backdrop, index) => (
                        <PhotoView
                            key={index}
                            src={tmdb.getImage(backdrop.file_path)}
                        >
                            <Image
                                width={240}
                                height={240}
                                src={tmdb.getImage(backdrop.file_path)}
                                priority
                                alt="img"
                                className="object-cover w-64"
                            />
                        </PhotoView>
                    ))}
                </div>
            </div>
        </PhotoProvider>
    );
}

export default Page;
