/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "0px 6px 18px  rgba(0, 0, 0, 0.1)", // light shadow
        "custom-heavy": "0px 6px 24px rgba(0, 0, 0, 0.14)", // heavier shadow
      },
    },
  },
  plugins: [],
};
