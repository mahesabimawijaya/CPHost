/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A2BFF",
        secondary: "#E1E4FF",
        third: "#F1F5FA",
        animation: {
          "spin-slow": "spin-reverse 3s linear infinite",
        },
        keyframes: {
          "spin-reverse": {
            from: { transform: "rotate(360deg)" },
            to: { transform: "rotate(0deg)" },
          },
        },
      },
    },
    plugins: [],
  },
};
