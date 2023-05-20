"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
function Header() {
    const [data, setData] = useState<any>([]);
    const pathname = usePathname();
    const params = useParams();
    const ImagePath = "https://image.tmdb.org/t/p/";
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        const onScrollTop = () => {
            if (window.scrollY > 90) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        window.addEventListener("scroll", onScrollTop);
        return () => window.removeEventListener("scroll", onScrollTop);
    }, []);
    useEffect(() => {
        const getData = async () => {
            const respone = await fetch(
                `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.TMDB}&language=vi-VN`
            );
            const data = await respone.json();
            setData(data);
        };

        getData();
    }, [params.movieId]);
    const router = useRouter();
    return (
        <div
            className={`md:left-[80px] w-full px-4 ${
                isScroll
                    ? "bg-base-100 shadow-lg backdrop-blur-lg bg-opacity-80 h-16 md:h-16"
                    : "h-20 md:h-28"
            } flex flex-row items-center fixed z-50 transition-all duration-300 `}
        >
            <div className="flex gap-2 md:gap-4 mr-2">
                <div className="btn btn-primary btn-circle btn-sm">
                    {" "}
                    <ChevronLeftIcon
                        className="h-6 w-6 text-primary-content"
                        onClick={() => router.back()}
                    />
                </div>
                <div className="btn btn-primary btn-circle btn-sm">
                    {" "}
                    <ChevronRightIcon
                        className="h-6 w-6 text-primary-content"
                        onClick={() => router.forward()}
                    />
                </div>
            </div>
            <div className="flex flex-row items-center">
                {isScroll && pathname.includes("movie") && (
                    <div className="flex flex-row gap-2 items-center bottom-0">
                        <Image
                            src={`${ImagePath}/w500/${data?.poster_path}`}
                            alt="film"
                            width={500}
                            height={500}
                            className="w-8 rounded-md cursor-pointer"
                        />
                        <div>
                            <p className="md:text-xl text-sm font-bold">
                                {data?.title}
                            </p>
                            <p className="md:text-xl text-sm">
                                {pathname.split("/").at(-1) === params.movieId
                                    ? "overview"
                                    : pathname.split("/").at(-1)}
                            </p>
                        </div>
                    </div>
                )}
                {isScroll && pathname == "/" && (
                    <div className="flex flex-row gap-2">
                        <p className="font-bold text-2xl">Trang chủ</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
