/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Arquivos a serem escaneados para classes do Tailwind
  theme: {
    screens:{
      'sm': "450px"
    },
    extend: {},
  },
  plugins: [],
}
