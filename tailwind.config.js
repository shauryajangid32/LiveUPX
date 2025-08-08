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
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite', // New twinkle animation
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.25)',
        DEFAULT: '2px 2px 4px rgba(0,0,0,0.3)',
        lg: '3px 3px 6px rgba(0,0,0,0.35)',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        // New twinkle keyframes
        'twinkle': {
          '0%, 100%': { 
            opacity: '0.2', 
            transform: 'scale(0.8)' 
          },
          '50%': { 
            opacity: '1', 
            transform: 'scale(1.1)' 
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};