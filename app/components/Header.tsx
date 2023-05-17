"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Header() {
    const pathname = usePathname();

    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        const onScrollTop = () => {
            if (window.scrollY > 60) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        window.addEventListener("scroll", onScrollTop);
        return () => window.removeEventListener("scroll", onScrollTop);
    }, []);

    return (
        <div
            className={`w-full ${
                isScroll
                    ? "bg-base-100 shadow-lg backdrop-blur-sm bg-opacity-95 h-16 md:h-20"
                    : "h-24 md:h-32"
            } flex flex-row justify-center px-8 items-center fixed z-10 transition-all duration-300 md:justify-between`}
        >
            <div className="flex flex-row items-center">
                <Image
                    src={
                        "//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                    }
                    alt="logo"
                    width={64}
                    height={64}
                    className="w-12 h-12 md:w-16 md:h-16"
                />
                <Link
                    href={"/"}
                    className={`font-semibold pl-4 text-[1rem] font-mono hover:text-primary-focus transition-colors duration-200 ${
                        isScroll && "text-base-content"
                    }`}
                >
                    <span className="text-[1.5rem] md:text-[2.2rem]">
                        The Movies
                    </span>
                </Link>
            </div>
            <div className="hidden md:block">
                <ul className="flex flex-row gap-8">
                    <Link
                        href={"/"}
                        className={`text-[1.8rem] font-semibold font-mono hover:text-primary-focus transition-colors duration-200 ${
                            isScroll && "text-base-content"
                        }`}
                    >
                        <span>Trang chủ</span>
                    </Link>
                    <Link
                        href={"/"}
                        className={`text-[1.8rem] font-semibold font-mono hover:text-primary-focus transition-colors duration-200 ${
                            isScroll && "text-base-content"
                        }`}
                    >
                        <span>Phim Lẻ</span>
                    </Link>
                    <Link
                        href={"/"}
                        className={`text-[1.8rem] font-semibold font-mono hover:text-primary-focus transition-colors duration-200 ${
                            isScroll && "text-base-content"
                        }`}
                    >
                        <span>Phim Bộ</span>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
