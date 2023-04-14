module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: 'Poppins', heading: 'Montserrat' },
      transitionProperty: {
        width: 'width',
        background: 'background',
        opacity: 'opacity',
      },
      backgroundImage: {
        hero: "url('/codcut-banner.png')",
      },
    },
    colors: {
      brand: '#101010',
      gray: '#272727',
      shade: '#191919',
      accent: '#f9004d',
      accent_shade: '#EB4242',
      content: '#a1a1a1',
      white: '#ffffff',
      black: '#000000',
      yellow: '#DBBF2D',
    },
  },
  variants: {},
  plugins: [],
};
