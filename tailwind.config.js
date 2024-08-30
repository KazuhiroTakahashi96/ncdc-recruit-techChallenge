/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: "#4cb3f8",
      text: {
        regular: "#333333",
        light: "#4d4d4d",
      },
      button: {
        primary: "#4cb3f8",
        normal: "#b3b3b3",
      },
      bg: {
        light: "#f5f8fa",
        dark: "#c8e6fa",
      },
    },
    fontFamily: {
      main: ["Noto Sans JP"],
      serviceName: ["Gotham Bold"],
    },
  },
  plugins: [],
};
