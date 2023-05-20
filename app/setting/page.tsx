"use client";
import React, { useEffect, useState } from "react";
import useStore from "../(store)/store";
function Page() {
    const theme = useStore((state) => state.theme);
    const setTheme = useStore((state) => state.setTheme);
    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme) {
            document
                .getElementById("html")
                ?.setAttribute("data-theme", currentTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);
    function handleChangeTheme(themeName: string) {
        document.getElementById("html")?.setAttribute("data-theme", themeName);
        setTheme(themeName);
    }

    return (
        <div className="h-screen p-10 bg-base-100">
            <p className="text-2xl font-bold">Cài đặt</p>
            <div className="py-4 flex flex-row gap-16">
                <ul className="menu  w-56 rounded-box">
                    <li>
                        <a className="active">Giao diện</a>
                    </li>
                    <li>
                        <a>Item 2</a>
                    </li>
                    <li>
                        <a>Item 3</a>
                    </li>
                </ul>
                <div className="w-full bg-base-300 rounded-lg flex flex-col p-8">
                    <p className="text-xl font-bold">Giao diện</p>
                    <p className="mt-2">Tuỳ chình giao diện cho ứng dụng</p>
                    <div className="flex gap-4 mt-4 ">
                        <div data-theme="luxury" className="bg-transparent">
                            <input
                                onClick={() => handleChangeTheme("luxury")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary tooltip hover:bg-primary"
                                data-tip="luxury"
                                checked={theme === "luxury"}
                            />
                        </div>
                        <div data-theme="dracula" className="bg-transparent">
                            <input
                                onClick={() => handleChangeTheme("dracula")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary tooltip hover:bg-primary"
                                data-tip="dracula"
                                checked={theme === "dracula"}
                            />
                        </div>
                        <div data-theme="night" className="bg-transparent">
                            <input
                                onClick={() => handleChangeTheme("night")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary tooltip hover:bg-primary"
                                data-tip="night"
                                checked={theme === "night"}
                            />
                        </div>
                        <div data-theme="retro" className="bg-transparent">
                            <input
                                onClick={() => handleChangeTheme("retro")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary tooltip hover:bg-primary"
                                data-tip="retro"
                                checked={theme === "retro"}
                            />
                        </div>
                        <div data-theme="valentine" className="bg-transparent">
                            <input
                                onClick={() => handleChangeTheme("valentine")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary tooltip hover:bg-primary"
                                data-tip="valentine"
                                checked={theme === "valentine"}
                            />
                        </div>
                        <div data-theme="synthwave" className="bg-transparent">
                            <input
                                onClick={() => handleChangeTheme("synthwave")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary tooltip hover:bg-primary"
                                data-tip="synthwave"
                                checked={theme === "synthwave"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
