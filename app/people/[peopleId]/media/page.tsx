"use client";
import tmdb from "@/service/TMDB";
import React from "react";
import useSwr from "swr";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import "react-photo-view/dist/react-photo-view.css";
interface IPageProps {
    params: {
        peopleId: number;
    };
}
function Page({ params }: IPageProps) {
    const { data: listPhoto } = useSwr(`/photos2/${params.peopleId}`, () =>
        tmdb.getPeoplePhotos(params.peopleId)
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
                <h2 className="font-bold text-lg pb-2 ">Profile</h2>
                <div className="pb-20 flex gap-4 flex-wrap justify-center">
                    {listPhoto?.profiles.map((profile, index) => (
                        <PhotoView
                            key={index}
                            src={tmdb.getImage(profile.file_path)}
                        >
                            <Image
                                width={240}
                                height={240}
                                src={tmdb.getImage(profile.file_path)}
                                loading="lazy"
                                alt="img_people"
                                className="object-cover w-64 cursor-pointer"
                            />
                        </PhotoView>
                    ))}
                </div>
            </div>
        </PhotoProvider>
    );
}

export default Page;
