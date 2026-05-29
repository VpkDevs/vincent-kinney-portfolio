/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'surface': '#0c0b09',
        'surface-secondary': '#14120f',
        'surface-tertiary': '#211d17',
        'accent': '#f6c453',
        'accent-light': '#fff4c7',
        'text': '#f7f0df',
        'text-secondary': '#bdb3a1',
        'border': '#363027',
      },
      fontFamily: {
        sans: ['Aptos', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif'],
        mono: ['Cascadia Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        '7xl': '4.5rem',
      },
    },
  },
  plugins: [],
}
