/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark", "cupcake", "retro"], // 👈 active plusieurs thèmes
    },
};