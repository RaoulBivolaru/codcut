module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: 'Poppins', heading: 'Montserrat' },
      transitionProperty: {
        width: 'width',
        background: 'background',
        opacity: 'opacity',
        height: 'height',
      },
    },
    colors: {
      transparent: 'transparent',
      brand: '#101010',
      gray: '#272727',
      shade: '#191919',
      accent: '#DB1DFB',
      accent_shade: '#6583EB',
      content: '#818181',
      border: '#5d5d5d',
      white: '#ffffff',
      black: '#000000',
    },
  },
  variants: {},
  plugins: [],
};
