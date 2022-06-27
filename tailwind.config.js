/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#57F287",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#000000",
          // "base-100": "#",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
