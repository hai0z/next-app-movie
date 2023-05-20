"use client";
import React, { useEffect } from "react";
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
        <div className="p-10 mt-16">
            <p className="text-2xl font-bold">Cài đặt</p>
            <div className="py-4 flex md:flex-row flex-col md:gap-8 gap-4">
                <ul className="menu-horizontal menu md:menu-vertical  md:w-56 rounded-box">
                    <li className="bordered">
                        <a>Giao diện</a>
                    </li>
                    <li>
                        <a>Item 2</a>
                    </li>
                    <li>
                        <a>Item 3</a>
                    </li>
                </ul>
                <div className="w-full bg-base-300 rounded-lg flex flex-col p-8 shadow-lg">
                    <p className="text-xl font-bold">Giao diện</p>
                    <p className="mt-2">Tuỳ chình giao diện cho ứng dụng</p>
                    <div className="flex gap-4 mt-4 ">
                        <div data-theme="dark" className="bg-transparent">
                            <input
                                onClick={() => handleChangeTheme("dark")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary tooltip hover:bg-primary"
                                data-tip="dark"
                                checked={theme === "dark"}
                            />
                        </div>
                        <div data-theme="light" className="bg-transparent">
                            <input
                                onClick={() => handleChangeTheme("light")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary tooltip hover:bg-primary"
                                data-tip="light"
                                checked={theme === "light"}
                            />
                        </div>
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
                        <div data-theme="forest" className="bg-transparent">
                            <input
                                onClick={() => handleChangeTheme("forest")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary tooltip hover:bg-primary"
                                data-tip="forest"
                                checked={theme === "forest"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
