const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      accent: colors.lime,
      primary: colors.emerald,
      secondary: colors.blueGray,
      yellow: colors.yellow,
      neutral: colors.white,
      gray: colors.gray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      white: colors.white,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
