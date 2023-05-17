import { Suspense } from "react";
import Header from "./components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "500", "700"],
    variable: "--font-poppins",
});

export const metadata = {
    title: "The Movies",
    description: "The Movies DB",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="night" className="font-poppins">
            <head>
                <link
                    rel="stylesheet"
                    as="style"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
            </head>
            <body className={poppins.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
