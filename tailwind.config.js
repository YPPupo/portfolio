/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        poppins: ["Poppins"],
      },
      colors: {
        "picton-blue": {
          50: "#f0faff",
          100: "#e0f5fe",
          200: "#bae8fd",
          300: "#7dd5fc",
          400: "#38bdf8",
          500: "#0ea6e9",
          600: "#028ac7",
          700: "#0370a1",
          800: "#075e85",
          900: "#0c506e",
          950: "#083549",
        },
      },
    },
  },
  plugins: [],
};
