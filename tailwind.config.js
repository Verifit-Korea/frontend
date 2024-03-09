/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./App.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        colors:{
            txt: {
                '01' : '#00A9FF',
            }
        }
    },
  },
  plugins: [],
}
