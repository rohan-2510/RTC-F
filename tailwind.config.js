/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#DC2626", // Red
                secondary: "#1F1F1F", // Black
                accent: "#FFFFFF", // White
                dark: "#121212", // Darker Black for backgrounds
                light: "#F3F4F6", // Light Gray for backgrounds
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
