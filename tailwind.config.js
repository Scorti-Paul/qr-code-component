/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px'
    },

    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        grayishblue: 'hsl(220, 15%, 55%)',
        lightgray: 'hsl(212, 45%, 89%)',
        darkblue: 'hsl(218, 44%, 22%)',
      },
    },
  },
  plugins: [],
}
