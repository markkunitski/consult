/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      mymain: "rgb(var(--color-mymain) / <alpha-value>)",
      mysec: "rgb(var(--color-mysec) / <alpha-value>)",
      mytext: "rgb(var(--color-mytext) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
