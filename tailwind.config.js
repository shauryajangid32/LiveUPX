/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        bigshoulders: ["Big Shoulders Display", "cursive"],
        opensans: ["Open Sans", "sans-serif"],
        aeion: ['AeionMono', 'monospace'], 
      },
    },
  },
  plugins: [],
};
