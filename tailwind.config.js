/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                poppins: "var(--font-poppins)",
            },
            boxShadow: {
                "3xl": "0 0px 7px 8px rgba(255, 0, 0, 0.3)",
                hover: "0 0px 7px 15px rgba(255, 0, 0, 0.3)",
            },
        },
    },
    plugins: [require("daisyui")],
};
