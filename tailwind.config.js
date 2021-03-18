const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
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
