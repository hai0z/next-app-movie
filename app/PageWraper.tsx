"use client";
import React from "react";
import { motion } from "framer-motion";
import NextTopLoader from "nextjs-toploader";
import Header from "./components/Header";
import useStore from "./(store)/store";
import useWindowDimensions from "@/hooks/useWindowDemensions";
import AppProvider from "@/context/AppProvider";
import Sidebar from "./components/Sidebar";
import MobileTab from "./components/mobile/MobileTab";

function PageWraper({ children }: { children: React.ReactNode }) {
    const expandedSideBar = useStore((state) => state.expandedSideBar);
    const { width } = useWindowDimensions();

    return (
        <AppProvider>
            <motion.div
                className="flex flex-row w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <div>
                    <Sidebar />
                    <MobileTab />
                </div>
                <div
                    className="flex flex-col w-full"
                    style={{
                        paddingLeft:
                            width > 768 ? (expandedSideBar ? 250 : 80) : 0,
                    }}
                >
                    <NextTopLoader showSpinner={true} color="hsl(var(--p))" />
                    <Header />
                    <motion.div layout transition={{ type: "tween" }}>
                        {children}
                    </motion.div>
                </div>
            </motion.div>
        </AppProvider>
    );
}

export default PageWraper;
