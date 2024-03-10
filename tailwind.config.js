/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./App.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        colors:{
            mainColor :{
              blue :  '#00A9FF',
              yellow : '#DCFF00'
            },
            txt: {
                '01' : '#00A9FF',
            }
        }
    },
  },
  plugins: [],
}
