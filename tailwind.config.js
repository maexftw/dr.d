/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./tina/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#4a7c59",
        "accent": "#d4a373",
        "background-warm": "#fdfcf8",
        "text-main": "#2d3436",
      },
      fontFamily: {
        "display": ["var(--font-jakarta)", "sans-serif"],
        "serif": ["var(--font-playfair)", "serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
