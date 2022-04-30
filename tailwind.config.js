module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: 'Poppins', heading: 'Montserrat' },
      transitionProperty: {
        width: 'width',
      },
    },
    colors: {
      brand: '#101010',
      shade: '#191919',
      accent: '#f9004d',
      content: '#a1a1a1',
      white: '#ffffff',
      black: '#000000',
      yellow: '#DBBF2D',
    },
  },
  plugins: [],
};
