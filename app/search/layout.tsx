"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function Page({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    return (
        <div className="pt-16">
            <div className="fixed z-20 w-full px-4 bg-base-100 backdrop-blur-lg bg-opacity-80 flex justify-between  border-b border-secondary/10">
                <div className="flex py-4 gap-8">
                    <Link
                        href={"/search/movie"}
                        className="text-lg font-semibold relative flex flex-col items-center"
                    >
                        Tìm kiếm phim lẻ
                        {pathName.includes("/movie") && (
                            <motion.div
                                layoutId="underline"
                                className="absolute h-1 bg-primary w-1/2 rounded-full top-10"
                            ></motion.div>
                        )}
                    </Link>
                    <Link
                        href={"/search/tv"}
                        className="text-lg font-semibold relative flex flex-col items-center"
                    >
                        Tìm kiếm phim bộ
                        {pathName.includes("/tv") && (
                            <motion.div
                                layoutId="underline"
                                className="absolute h-1 bg-primary w-1/2 rounded-full top-10"
                            ></motion.div>
                        )}
                    </Link>
                </div>
            </div>
            <div className="h-[1500px] pt-24 px-4">{children}</div>
        </div>
    );
}

export default Page;
