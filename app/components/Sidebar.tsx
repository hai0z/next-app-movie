"use client";
import React, { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import useStore from "../(store)/store";
import { usePathname } from "next/navigation";
function Sidebar() {
    const expandedSizeBar = useStore((state) => state.expandedSideBar);
    const setExpandedSideBar = useStore((state) => state.setExpandedSideBar);
    const pathname = usePathname();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                width: expandedSizeBar ? 250 : 80,
                alignItems: expandedSizeBar ? "start" : "center",
            }}
            className="h-screen md:bg-base-200 shadow-md fixed top-0 md:left-0 -left-96 flex flex-col space-y-4 z-30 duration-500 transition-all py-2"
        >
            <div className="flex py-2 w-full justify-center">
                <button onClick={() => setExpandedSideBar(expandedSizeBar)}>
                    <svg
                        className="swap-off fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 512 512"
                    >
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                </button>
                {expandedSizeBar && (
                    <Link href={"/"}>
                        {expandedSizeBar && (
                            <motion.p
                                className="text-gradient text-3xl font-extrabold ml-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.35,
                                    type: "spring",
                                }}
                            >
                                The Movies
                            </motion.p>
                        )}
                    </Link>
                )}
            </div>

            <ul
                className="menu space-y-4"
                style={{ width: expandedSizeBar ? "100%" : "auto" }}
            >
                <li
                    className="space-y-4 icon tooltip tooltip-right"
                    data-tip="Trang chủ"
                >
                    <Link
                        href={"/"}
                        className={`${pathname === "/" && "active"}`}
                    >
                        <HomeIcon className="w-6 h-6" />
                        {expandedSizeBar && (
                            <motion.p
                                className="font-normal ml-2 text-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.35,
                                }}
                            >
                                Trang chủ
                            </motion.p>
                        )}
                    </Link>
                </li>
                <li
                    className="space-y-4 icon tooltip tooltip-right"
                    data-tip="Xu hướng"
                >
                    <Link
                        href={"/trending/today"}
                        className={`${pathname === "trending" && "active"}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                            />
                        </svg>
                        {expandedSizeBar && (
                            <motion.p
                                className="font-normal ml-2  text-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.35,
                                    type: "spring",
                                }}
                            >
                                Xu hướng
                            </motion.p>
                        )}
                    </Link>
                </li>
                <li
                    className="space-y-4 icon tooltip tooltip-right"
                    data-tip="Khám phá"
                >
                    <Link
                        href={"/discover/"}
                        className={`${pathname === "discover" && "active"}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                            />
                        </svg>
                        {expandedSizeBar && (
                            <motion.p
                                className="font-normal ml-2  text-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.35,
                                    type: "spring",
                                }}
                            >
                                Khám phá
                            </motion.p>
                        )}
                    </Link>
                </li>
                <li
                    className="space-y-4 icon tooltip tooltip-right"
                    data-tip="Tìm kiếm"
                >
                    <Link
                        href={"/search/movie"}
                        className={`${pathname === "search" && "active"}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                        {expandedSizeBar && (
                            <motion.p
                                className="font-normal ml-2  text-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.35,
                                    type: "spring",
                                }}
                            >
                                Tìm kiếm
                            </motion.p>
                        )}
                    </Link>
                </li>
                <li className="tooltip tooltip-right" data-tip="Cài đặt">
                    <Link
                        href={"/setting"}
                        className={`${pathname === "/setting" && "active"}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {expandedSizeBar && (
                            <motion.p
                                className="font-normal ml-2  text-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.35,
                                    type: "spring",
                                }}
                            >
                                Cài đặt
                            </motion.p>
                        )}
                    </Link>
                </li>
            </ul>
        </motion.div>
    );
}

export default Sidebar;
