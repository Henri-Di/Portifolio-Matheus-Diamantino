/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan-neon': '#06b6d4',
        'purple-neon': '#8b5cf6',
      },
      borderImage: {
        // Utilizado para borda neon com gradiente
        'gradient-cyan-purple': 'linear-gradient(to right, #06b6d4, #8b5cf6) 1',
      },
    },
  },
  plugins: [],
}
