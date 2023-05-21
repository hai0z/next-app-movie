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
                <div className="w-full bg-base-300 shadow-lg rounded-lg flex flex-col p-8 shadow-lg">
                    <p className="text-xl font-bold">Giao diện</p>
                    <p className="mt-2">Tuỳ chình giao diện cho ứng dụng</p>
                    <div className="flex gap-4 mt-4 flex-col md:flex-row flex-wrap ">
                        <div
                            data-theme="dark"
                            className="bg-transparent flex gap-2"
                        >
                            <input
                                onClick={() => handleChangeTheme("black")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary md:tooltip hover:bg-primary"
                                data-tip="dark"
                                checked={theme === "black"}
                            />
                            <p className={"block md:hidden"}>dark</p>
                        </div>
                        <div
                            data-theme="light"
                            className="bg-transparent flex gap-2"
                        >
                            <input
                                onClick={() => handleChangeTheme("light")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary md:tooltip hover:bg-primary"
                                data-tip="light"
                                checked={theme === "light"}
                            />
                            <p className={"block md:hidden"}>light</p>
                        </div>
                        <div
                            data-theme="luxury"
                            className="bg-transparent flex gap-2"
                        >
                            <input
                                onClick={() => handleChangeTheme("luxury")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary md:tooltip hover:bg-primary"
                                data-tip="luxury"
                                checked={theme === "luxury"}
                            />
                            <p className={"block md:hidden"}>luxury</p>
                        </div>
                        <div
                            data-theme="dracula"
                            className="bg-transparent flex gap-2"
                        >
                            <input
                                onClick={() => handleChangeTheme("dracula")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary md:tooltip hover:bg-primary"
                                data-tip="dracula"
                                checked={theme === "dracula"}
                            />
                            <p className={"block md:hidden"}>dracula</p>
                        </div>
                        <div
                            data-theme="night"
                            className="bg-transparent flex gap-2"
                        >
                            <input
                                onClick={() => handleChangeTheme("night")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary md:tooltip hover:bg-primary"
                                data-tip="night"
                                checked={theme === "night"}
                            />
                            <p className={"block md:hidden"}>night</p>
                        </div>
                        <div
                            data-theme="retro"
                            className="bg-transparent flex gap-2"
                        >
                            <input
                                onClick={() => handleChangeTheme("retro")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary md:tooltip hover:bg-primary"
                                data-tip="retro"
                                checked={theme === "retro"}
                            />
                            <p className={"block md:hidden"}>retro</p>
                        </div>

                        <div
                            data-theme="synthwave"
                            className="bg-transparent flex gap-2"
                        >
                            <input
                                onClick={() => handleChangeTheme("synthwave")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary md:tooltip hover:bg-primary"
                                data-tip="synthwave"
                                checked={theme === "synthwave"}
                            />
                            <p className={"block md:hidden"}>sythwave</p>
                        </div>
                        <div
                            data-theme="forest"
                            className="bg-transparent flex gap-2"
                        >
                            <input
                                onClick={() => handleChangeTheme("forest")}
                                type="radio"
                                name="radio-1"
                                className="radio radio-primary md:tooltip hover:bg-primary"
                                data-tip="forest"
                                checked={theme === "forest"}
                            />
                            <p className={"block md:hidden"}>forest</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
