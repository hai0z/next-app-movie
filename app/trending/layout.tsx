"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface PageProps {
    children: React.ReactNode;
}
function Page({ children }: PageProps) {
    const pathName = usePathname();
    return (
        <div className="pt-16">
            <div className="fixed z-20 w-full px-4 bg-base-100 backdrop-blur-lg bg-opacity-80">
                <ul className="menu menu-horizontal bg-base-100 rounded-box">
                    <li>
                        <Link
                            href={"/trending/today"}
                            className={`${
                                pathName.includes("today") && "active"
                            }`}
                        >
                            <p className="text-sm md:text-lg">
                                Xu hướng hôm nay
                            </p>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={"/trending/week"}
                            className={`${
                                pathName.includes("week") && "active"
                            }`}
                        >
                            <p className="text-sm md:text-lg">
                                Xu hướng trong tuần này
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="h-[1500px] pt-24 px-4">{children}</div>
        </div>
    );
}

export default Page;
