import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#4a7c59", "accent": "#d4a373", "background-warm": "#fdfcf8",
                "text-main": "#2d3436",
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"],
                "serif": ["Playfair Display", "serif"]
            },
            borderRadius: { "DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px" },
        },
    },
    plugins: [
        forms,
        containerQueries,
    ],
}
