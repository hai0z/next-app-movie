"use client";
import React from "react";
import useStore from "../(store)/store";
function Page() {
    const theme = useStore((state) => state.theme);
    const setTheme = useStore((state) => state.setTheme);
    const expandedSideBar = useStore((state) => state.expandedSideBar);
    const setExpandedSideBar = useStore((state) => state.setExpandedSideBar);
    function handleChangeTheme(themeName: string) {
        setTheme(themeName);
        localStorage.setItem("theme", themeName);
        document.getElementById("html")?.setAttribute("data-theme", themeName);
    }

    return (
        <div className="px-10 pt-16 pb-10">
            <p className="text-2xl font-bold">Cài đặt</p>
            <div className="flex flex-col gap-4 py-4 md:flex-row md:gap-8">
                <ul className="menu-horizontal menu md:menu-vertical md:w-56 rounded-box md:text-lg bg-base-200 h-fit">
                    <li>
                        <a className="active">Giao diện</a>
                    </li>
                    <li>
                        <a>Comming soon</a>
                    </li>
                    <li>
                        <a>Comming soon</a>
                    </li>
                </ul>
                <div className="space-y-4 w-full">
                    <div className="collapse bg-base-200 collapse-arrow">
                        <input type="checkbox" />
                        <div className="collapse-title">
                            <p className="text-xl font-bold">Giao diện</p>
                            <p className="mt-2">
                                Tuỳ chình giao diện cho ứng dụng
                            </p>
                        </div>
                        <div className="collapse-content">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div
                                    data-theme="black"
                                    className="flex gap-2 bg-transparent"
                                >
                                    <input
                                        onClick={() =>
                                            handleChangeTheme("black")
                                        }
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
                                    className="flex gap-2 bg-transparent"
                                >
                                    <input
                                        onClick={() =>
                                            handleChangeTheme("light")
                                        }
                                        type="radio"
                                        name="radio-1"
                                        className="radio radio-primary md:tooltip hover:bg-primary"
                                        data-tip="light"
                                        checked={theme === "light"}
                                    />
                                    <p className={"block md:hidden"}>light</p>
                                </div>
                                <div
                                    data-theme="aqua"
                                    className="flex gap-2 bg-transparent"
                                >
                                    <input
                                        onClick={() =>
                                            handleChangeTheme("aqua")
                                        }
                                        type="radio"
                                        name="radio-1"
                                        className="radio radio-primary md:tooltip hover:bg-primary"
                                        data-tip="aqua"
                                        checked={theme === "aqua"}
                                    />
                                    <p className={"block md:hidden"}>aqua</p>
                                </div>
                                <div
                                    data-theme="dracula"
                                    className="flex gap-2 bg-transparent"
                                >
                                    <input
                                        onClick={() =>
                                            handleChangeTheme("dracula")
                                        }
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
                                    className="flex gap-2 bg-transparent"
                                >
                                    <input
                                        onClick={() =>
                                            handleChangeTheme("night")
                                        }
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
                                    className="flex gap-2 bg-transparent"
                                >
                                    <input
                                        onClick={() =>
                                            handleChangeTheme("retro")
                                        }
                                        type="radio"
                                        name="radio-1"
                                        className="radio radio-primary md:tooltip hover:bg-primary"
                                        data-tip="retro"
                                        checked={theme === "retro"}
                                    />
                                    <p className={"block md:hidden"}>retro</p>
                                </div>
                                <div
                                    data-theme="business"
                                    className="flex gap-2 bg-transparent"
                                >
                                    <input
                                        onClick={() =>
                                            handleChangeTheme("business")
                                        }
                                        type="radio"
                                        name="radio-1"
                                        className="radio radio-primary md:tooltip hover:bg-primary"
                                        data-tip="business"
                                        checked={theme === "business"}
                                    />
                                    <p className={"block md:hidden"}>
                                        business
                                    </p>
                                </div>

                                <div
                                    data-theme="synthwave"
                                    className="flex gap-2 bg-transparent"
                                >
                                    <input
                                        onClick={() =>
                                            handleChangeTheme("synthwave")
                                        }
                                        type="radio"
                                        name="radio-1"
                                        className="radio radio-primary md:tooltip hover:bg-primary"
                                        data-tip="synthwave"
                                        checked={theme === "synthwave"}
                                    />
                                    <p className={"block md:hidden"}>
                                        sythwave
                                    </p>
                                </div>
                                <div
                                    data-theme="forest"
                                    className="flex gap-2 bg-transparent"
                                >
                                    <input
                                        onClick={() =>
                                            handleChangeTheme("forest")
                                        }
                                        type="radio"
                                        name="radio-1"
                                        className="radio radio-primary md:tooltip hover:bg-primary"
                                        data-tip="forest"
                                        checked={theme === "forest"}
                                    />
                                    <p className={"block md:hidden"}>forest</p>
                                </div>
                                <div
                                    data-theme="halloween"
                                    className="flex gap-2 bg-transparent"
                                >
                                    <input
                                        onClick={() =>
                                            handleChangeTheme("halloween")
                                        }
                                        type="radio"
                                        name="radio-1"
                                        className="radio radio-primary md:tooltip hover:bg-primary"
                                        data-tip="halloween"
                                        checked={theme === "halloween"}
                                    />
                                    <p className={"block md:hidden"}>
                                        halloween
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="collapse bg-base-200 collapse-arrow"
                    >
                        <input type="checkbox" />
                        <div className="collapse-title">
                            <p className="text-xl font-bold">Thanh bên</p>
                            <p className="mt-2">Cài đặt thanh bên</p>
                        </div>
                        <div className="collapse-content space-y-4">
                            <div className="w-full flex justify-between">
                                <p>Mini</p>
                                <input
                                    onChange={() => setExpandedSideBar(true)}
                                    type="checkbox"
                                    className="toggle toggle-primary"
                                />
                            </div>
                            <div className="w-full flex justify-between">
                                <p>Expanded</p>
                                <input
                                    onChange={() =>
                                        setExpandedSideBar(expandedSideBar)
                                    }
                                    type="checkbox"
                                    className="toggle toggle-primary"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
