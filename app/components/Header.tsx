"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import useStore from "../(store)/store";
import { Movie } from "@/service/TMDB.type";
import useWindowDimensions from "@/hooks/useWindowDemensions";
function Header() {
    const [data, setData] = useState<Movie>({} as Movie);
    const pathname = usePathname();
    const params = useParams();
    const ImagePath = "https://image.tmdb.org/t/p/";
    const [isScroll, setIsScroll] = useState(false);
    const setTheme = useStore((state) => state.setTheme);

    const { width } = useWindowDimensions();

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
            if (params.movieId !== undefined) {
                const respone = await fetch(
                    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.TMDB}&language=vi-VN`
                );
                const data = await respone.json();
                setData(data);
            }
        };
        getData();
    }, [params.movieId]);
    const router = useRouter();
    const expandedSizeBar = useStore((state) => state.expandedSideBar);
    return (
        <div
            style={{ left: width > 768 ? (expandedSizeBar ? 200 : 80) : 0 }}
            className={`w-full px-4 ${
                isScroll && "bg-base-100 backdrop-blur-lg bg-opacity-80"
            } ${
                pathname == "/" && width < 768 && "shadow-lg bg-base-100"
            } flex flex-row items-center z-50 transition-all duration-150 h-16 md:h-16 fixed navbar `}
        >
            <div className="flex gap-2 md:gap-4 mr-2">
                <div className="btn btn-primary btn-circle btn-sm">
                    <ChevronLeftIcon
                        className="h-6 w-6 text-primary-content"
                        onClick={() => router.back()}
                    />
                </div>
                <div className="btn btn-primary btn-circle btn-sm">
                    <ChevronRightIcon
                        className="h-6 w-6 text-primary-content"
                        onClick={() => router.forward()}
                    />
                </div>
            </div>
            <div
                className={`${
                    pathname == "/" && width < 768 ? "flex" : "hidden"
                } md:hidden `}
            >
                <h2 className="text-gradient font-bold text-lg">The Movies</h2>
            </div>
            <div className={`flex flex-row`}>
                {isScroll &&
                    pathname.includes("movie") &&
                    !pathname.includes("search") &&
                    !pathname.includes("discover") && (
                        <div className="flex flex-row gap-2 items-center bottom-0  ">
                            <Image
                                src={`${ImagePath}/w500/${data?.poster_path}`}
                                alt="film"
                                width={500}
                                height={500}
                                className="w-8 rounded-md cursor-pointer"
                            />
                            <div>
                                <p
                                    className={`md:text-xl text-sm font-bold text-gradient`}
                                >
                                    {data?.title}
                                </p>
                                <p className="md:text-xl text-sm text-gradient">
                                    {pathname.split("/").at(-1) ===
                                    params.movieId
                                        ? "overview"
                                        : pathname.split("/").at(-1)}
                                </p>
                            </div>
                        </div>
                    )}
                {isScroll && pathname == "/" && width >= 768 && (
                    <div className="flex flex-row gap-2">
                        <p className="font-bold text-2xl text-gradient">
                            Trang chủ
                        </p>
                    </div>
                )}
                {isScroll && pathname.includes("trending") && (
                    <div className="flex flex-row gap-2">
                        <p className="font-bold text-2xl text-gradient">
                            Trending
                        </p>
                    </div>
                )}
                {isScroll && pathname.includes("discover") && (
                    <div className="flex flex-row gap-2">
                        <p className="font-bold text-2xl text-gradient">
                            Khám phá
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
