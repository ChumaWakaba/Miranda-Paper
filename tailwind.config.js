/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Canopee: "Canopee",
        CondMedium: "CondMedium",
        NewLight: "NewLight",
        Regular: "ABCDiatype-Reg"
      }
    },
  },
  plugins: [],
}


