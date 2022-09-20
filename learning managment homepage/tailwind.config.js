module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      backgroundImage: {
      secondary: 'linear-gradient(to right, #da8cff, #9a55ff)',
      },
      colors: {
        primary: '#FD3D57',
      },
      fontFamily: {
        /* poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif", */
        ubuntu:"'Ubuntu', sans-serif",
      },
    },
  },
  plugins: [],
};
