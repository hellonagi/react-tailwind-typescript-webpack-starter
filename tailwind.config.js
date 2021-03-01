const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        main: ['Roboto'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
