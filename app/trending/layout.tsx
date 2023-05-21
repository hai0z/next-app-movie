"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
function Page({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    return (
        <div className="pt-16">
            <div className="bg-base-100 fixed z-20 w-full backdrop-blur-lg bg-opacity-80 px-4">
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
