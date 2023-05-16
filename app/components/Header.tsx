"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Header() {
    const pathname = usePathname();
    console.log(pathname);

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
    console.log(isScroll);
    return (
        <div
            className={`w-full ${
                isScroll
                    ? "bg-[#0f0f0f] backdrop-blur-sm bg-opacity-95 h-20"
                    : "h-32"
            } flex flex-row justify-between px-8 items-center fixed z-10 transition-all duration-300`}
        >
            <div className="flex flex-row items-center">
                <Image
                    src={
                        "//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                    }
                    alt="logo"
                    width={64}
                    height={64}
                />
                <Link
                    href={"/"}
                    className="font-semibold pl-4 text-[1.5rem] font-mono hover:text-red-600 transition-colors duration-200"
                >
                    <span className="text-[2.2rem]">The Movies</span>
                </Link>
            </div>
            <div>
                <ul className="flex flex-row gap-8">
                    <Link
                        href={"/movie"}
                        className="text-[1.8rem] font-semibold font-mono hover:text-red-600 transition-colors duration-200 "
                    >
                        <span>Home</span>
                        <div className="w-full bg-red-600 h-0.5"></div>
                    </Link>
                    <Link
                        href={"/movie"}
                        className="text-[1.8rem] font-semibold font-mono hover:text-red-600 transition-colors duration-200"
                    >
                        <span>Movies</span>
                        <div className="w-full bg-red-600 h-0.5"></div>
                    </Link>
                    <Link
                        href={"/movie"}
                        className="text-[1.8rem] font-semibold font-mono hover:text-red-600 transition-colors duration-200"
                    >
                        <span>TV Seris</span>
                        <div className="w-full bg-red-600 h-0.5"></div>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
