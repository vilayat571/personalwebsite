module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./atoms/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode: false,
  theme: {
    screens: {
      sm: '300px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
