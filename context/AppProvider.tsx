import React, { createContext, useState, useEffect } from "react";
import Image from "next/image";
interface IAppContext {}
interface IProps {
    children: React.ReactNode;
}
export const AppContext = createContext({});
function AppProvider({ children }: IProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
        <AppContext.Provider value={{}}>
            {loading ? (
                <div className="h-screen w-full bg-primary-content flex justify-center items-center flex-col">
                    <Image
                        src={
                            "//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                        }
                        alt="logo"
                        width={64}
                        height={64}
                        className="w-12 h-12 md:w-16 md:h-16 mb-4"
                    />
                    <progress className="progress w-56 progress-primary"></progress>
                </div>
            ) : (
                children
            )}
        </AppContext.Provider>
    );
}

export default AppProvider;
