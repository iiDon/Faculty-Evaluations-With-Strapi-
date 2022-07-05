/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [],
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['Almarai']
      },
    },
  },
  plugins: [],
}


const colors = require('tailwindcss/colors')
