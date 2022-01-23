const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // // vai sobrescrever todo o padrão
    // colors: {
    //   black: '#010101',
    //   red: '#A83246'
    // },

    // screens: {
    //   'tablet' : '640px',
    //   'cel': {'max': '400px'}
    // },
    extend: {
      colors: {
        'new-blue' : '#243C5A',
        gray: {
          ...colors.gray,
          '900': '#999'
        }
      },
      spacing: {
        '50': '20rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
