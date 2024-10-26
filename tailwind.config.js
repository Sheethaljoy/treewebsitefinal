/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futuraMedium: ['futura medium bt', 'sans-serif'],
        MontserratRegular:['Montserrat-Regular', 'sans-serif'],
        inter:['inter','sans-serif'],
        futuraLight: ['Futura Light BT', 'sans-serif'],
        montserratLight: ['Montserrat Light', 'sans-serif'],
        futuraLightFont: ['Futura Light Font', 'sans-serif']
      },
    },
  },
  plugins: [],
}
   