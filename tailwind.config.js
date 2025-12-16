/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Azul Marinho Profundo (Slate 900)
        accent: '#c2410c',  // Laranja terroso para botões
        gold: '#d97706',    // Dourado para detalhes
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], 
      }
    },
  },
  plugins: [],
}