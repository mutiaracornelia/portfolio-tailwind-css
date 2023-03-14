/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
      padding: '16px',
    },
    extend: {
      colors:{
        ungu: '#a78bfa',
        secondary: '#64748b',
        dark: '#0f172a',
      },
    screens:{
      '2xl': '1320px',
    }
    },
  },
  plugins: [],
}