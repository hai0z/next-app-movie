import Sibar from "./components/Sidebar";
import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "500", "700"],
    variable: "--font-poppins",
});
import Header from "./components/Header";
import NextTopLoader from "nextjs-toploader";
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
        <html lang="en" data-theme="night" className="font-poppins" id="html">
            <head>
                <link
                    rel="stylesheet"
                    as="style"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
            </head>
            <body className={poppins.className}>
                <div className="flex flex-row">
                    <div className="w-[80px]">
                        <Sibar />
                    </div>
                    <div className="flex flex-col w-[calc(100%-80px)]">
                        <NextTopLoader showSpinner={false} />
                        <Header />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
