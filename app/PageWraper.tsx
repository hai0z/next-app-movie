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
            <div className="flex flex-row w-full">
                <div>
                    <Sidebar />
                    <MobileTab />
                </div>
                <motion.div
                    className="flex flex-col w-full"
                    style={{
                        paddingLeft:
                            width > 768 ? (expandedSideBar ? 200 : 80) : 0,
                    }}
                    transition={{ type: "spring" }}
                >
                    <NextTopLoader showSpinner={true} color="hsl(var(--p))" />
                    <Header />
                    <motion.div layout transition={{ type: "keyframes" }}>
                        {children}
                    </motion.div>
                </motion.div>
            </div>
        </AppProvider>
    );
}

export default PageWraper;
