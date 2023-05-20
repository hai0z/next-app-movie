"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
function MobileTab() {
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        const onScrollTop = () => {
            if (window.scrollY > 90) {
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
            className={`fixed bottom-0 z-50 bg-base-300 h-16 w-full flex flex-row items-center bg-opacity-80 backdrop-blur-sm justify-around transition-all duration-300 ${
                isScroll && "-bottom-20 transition-all duration-300"
            }`}
        >
            <div className="flex justify-center items-center flex-col">
                <Link href={"/"} className="">
                    <HomeIcon className="h-6 w-6 text-base-content" />
                </Link>
                <p>Trang chủ</p>
            </div>
            <div className="flex justify-center items-center flex-col">
                <Link href={"/"} className="">
                    <HomeIcon className="h-6 w-6 text-base-content" />
                </Link>
                <p>Something</p>
            </div>
            <div
                className="flex flex-col justify-center items-center"
                data-tip="Cài đặt"
            >
                <Link href={"/setting"}>
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
                <p>Cài đặt</p>
            </div>
        </div>
    );
}

export default MobileTab;
