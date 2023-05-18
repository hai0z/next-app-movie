"use client";
import React from "react";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
function Sidebar() {
    return (
        <div className="w-[80px] h-screen bg-base-300 fixed top-0 left-0 flex flex-col items-center p-4 space-y-4 z-30">
            <Image
                src={
                    "//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                }
                alt="logo"
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16"
            />
            <div className="icon space-y-4 " data-tip="Trang chủ">
                <div className="tooltip tooltip-right " data-tip="Trang chủ">
                    <Link
                        href={"/"}
                        className="hover:btn-primary btn btn-ghost"
                    >
                        <HomeIcon className="h-6 w-6 text-white" />
                    </Link>
                </div>
                <div className="dropdown dropdown-right">
                    <label
                        tabIndex={0}
                        className="hover:btn-primary btn btn-ghost"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ml-4"
                    >
                        <li
                            onClick={() => {
                                document
                                    .getElementById("html")
                                    ?.setAttribute("data-theme", "luxury");
                            }}
                        >
                            <a>Luxury</a>
                        </li>
                        <li
                            onClick={() => {
                                document
                                    .getElementById("html")
                                    ?.setAttribute("data-theme", "dracula");
                            }}
                        >
                            <a>Dracula</a>
                        </li>
                        <li
                            onClick={() => {
                                document
                                    .getElementById("html")
                                    ?.setAttribute("data-theme", "night");
                            }}
                        >
                            <a>Night</a>
                        </li>
                        <li
                            onClick={() => {
                                document
                                    .getElementById("html")
                                    ?.setAttribute("data-theme", "forest");
                            }}
                        >
                            <a>Forest</a>
                        </li>
                        <li
                            onClick={() => {
                                document
                                    .getElementById("html")
                                    ?.setAttribute("data-theme", "retro");
                            }}
                        >
                            <a>retro</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
