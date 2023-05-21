"use client";
import React from "react";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
function Sidebar() {
    return (
        <div className="md:w-[80px] h-screen bg-base-200 fixed top-0 left-0 md:flex flex-col items-center p-4 space-y-4 z-30 hidden">
            <Link href={"/"}>
                <Image
                    src={
                        "//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                    }
                    alt="logo"
                    width={64}
                    height={64}
                    className="w-12 h-12 md:w-16 md:h-16"
                />
            </Link>
            <div className="icon space-y-4 " data-tip="Trang chủ">
                <div className="tooltip tooltip-right " data-tip="Trang chủ">
                    <Link
                        href={"/"}
                        className="hover:btn-primary btn btn-ghost"
                    >
                        <HomeIcon className="h-6 w-6 text-base-content" />
                    </Link>
                </div>
                <div
                    className="icon space-y-4 tooltip tooltip-right"
                    data-tip="Xu hướng"
                >
                    <Link
                        href={"/trending/today"}
                        tabIndex={0}
                        className="hover:btn-primary btn btn-ghost"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-base-content"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                            />
                        </svg>
                    </Link>
                </div>
                <div
                    className="icon space-y-4 tooltip tooltip-right"
                    data-tip="Cài đặt"
                >
                    <Link
                        href={"/setting"}
                        tabIndex={0}
                        className="hover:btn-primary btn btn-ghost"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-base-content"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
