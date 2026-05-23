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
        'surface': '#0a0a0a',
        'surface-secondary': '#1a1a1a',
        'surface-tertiary': '#232323',
        'accent': '#4d63ff',
        'accent-light': '#e0f2ff',
        'text': '#f5f5f5',
        'text-secondary': '#a0a0a0',
        'border': '#333333',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '7xl': '4.5rem',
      },
    },
  },
  plugins: [],
}
