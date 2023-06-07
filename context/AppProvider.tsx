import React, { createContext, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useStore from "@/app/(store)/store";
interface IAppContext {}
interface IProps {
    children: React.ReactNode;
}
export const AppContext = createContext({});
function AppProvider({ children }: IProps) {
    const [loading, setLoading] = useState(true);
    const setTheme = useStore((state) => state.setTheme);

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme) {
            setTheme(currentTheme as string);
            document
                .getElementById("html")
                ?.setAttribute("data-theme", currentTheme);
        }
        setTimeout(() => setLoading(false), 1000);
    }, [setTheme]);
    return (
        <AppContext.Provider value={{}}>
            {loading ? (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="h-screen w-full bg-base-300 flex justify-center items-center flex-col"
                >
                    <Image
                        src={
                            "//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                        }
                        alt="logo"
                        width={64}
                        height={64}
                        className="w-12 h-12 md:w-16 md:h-16 mb-4"
                    />
                    <span className="loading loading-dots loading-lg text-primary"></span>
                </motion.div>
            ) : (
                children
            )}
        </AppContext.Provider>
    );
}

export default AppProvider;
