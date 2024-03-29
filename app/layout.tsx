import "./globals.css";
import { Lexend } from "next/font/google";
const poppins = Lexend({
    subsets: ["latin"],
    weight: ["200", "500", "700"],
    variable: "--font-poppins",
});

import { Metadata } from "next";
import PageWraper from "./PageWraper";

export const metadata: Metadata = {
    title: "The Movies",
    description: "The Movies DB",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="font-poppins" data-theme="night" id="html">
            <head>
                <link
                    rel="stylesheet preload prefetch"
                    as="style"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
            </head>
            <body className={poppins.className}>
                <PageWraper>{children}</PageWraper>
            </body>
        </html>
    );
}
