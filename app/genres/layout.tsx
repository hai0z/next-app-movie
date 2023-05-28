"use client";
import React from "react";
import Link from "next/link";
function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mt-16">
            <div className="fixed z-20 w-full px-4 bg-base-100 backdrop-blur-lg bg-opacity-80">
                <ul className="menu menu-horizontal bg-base-100 rounded-box">
                    <li>
                        <Link
                            href={"/genres/movie"}
                            className="text-sm md:text-lg"
                        >
                            Thể loại phim lẻ
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/genres/tv-show"}
                            className="text-sm md:text-lg"
                        >
                            Thể loại phim bộ
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="h-[1500px] pt-24 px-4">{children}</div>
        </div>
    );
}

export default layout;
