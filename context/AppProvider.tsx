import React, { createContext, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useStore from "@/app/(store)/store";
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
        setTimeout(() => setLoading(false), 2000);
    }, [setTheme]);

    return (
        <AppContext.Provider value={{}}>
            {loading ? (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    className="h-screen w-full flex justify-center items-center flex-col"
                >
                    <div className="flex gap-4 items-center">
                        <Image
                            src={
                                "//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                            }
                            alt="logo"
                            width={64}
                            height={64}
                            className="h-20 w-20"
                        />
                        <span className="text-gradient font-bold text-4xl">
                            The Movies
                        </span>
                    </div>
                    <span className="loading loading-dots text-primary"></span>
                </motion.div>
            ) : (
                children
            )}
        </AppContext.Provider>
    );
}

export default AppProvider;
