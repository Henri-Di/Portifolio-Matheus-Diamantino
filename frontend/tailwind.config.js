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
        'gradient-cyan-purple': 'linear-gradient(to right, #06b6d4, #8b5cf6) 1',
      },
      animation: {
        'bounce-slow': 'bounce 4s infinite',
        'spin-slow': 'spin 8s linear infinite',
        blob: 'blob 10s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
}
