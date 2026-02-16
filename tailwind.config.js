/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B5261",
        secondary: "#04757B",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #2B5261, #04757B)",
      },
    },
  },
};
