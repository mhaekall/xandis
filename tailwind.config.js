/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Pastikan semua file di app terdeteksi
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'], // Definisikan font Bebas Neue
      },
    },
  },
  plugins: [],
};