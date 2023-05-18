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
            className={`w-full px-8 ${
                isScroll
                    ? "bg-base-100 shadow-lg backdrop-blur-sm bg-opacity-95 h-16 md:h-20"
                    : "h-24 md:h-32"
            } flex flex-row justify-center  items-center fixed z-10 transition-all duration-300 md:justify-between`}
        >
            <div className="flex flex-row items-center"></div>
        </div>
    );
}

export default Header;
