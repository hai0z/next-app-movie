"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import ChangeMediaListBtn from "../components/MediaList/ChangeMediaListBtn";

function Page({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    return (
        <div className="pt-16">
            <div className="bg-base-100 fixed z-20 w-full backdrop-blur-lg bg-opacity-80 px-4 flex justify-between">
                <ul className="menu menu-horizontal bg-base-100 rounded-box">
                    <li>
                        <Link
                            href={"/search/movie"}
                            className={`${
                                pathName.includes("movie") && "active"
                            }`}
                        >
                            <p className="text-sm md:text-lg">
                                Tìm kiếm phim lẻ
                            </p>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={"/search/tv"}
                            className={`${pathName.includes("tv") && "active"}`}
                        >
                            <p className="text-sm md:text-lg">
                                Tìm kiếm phim bộ
                            </p>
                        </Link>
                    </li>
                </ul>
                <ChangeMediaListBtn />
            </div>
            <div className="h-[1500px] pt-24 px-4">{children}</div>
        </div>
    );
}

export default Page;
