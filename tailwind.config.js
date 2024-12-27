/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        nord: {
          0: '#2E3440',  // Polar Night
          1: '#3B4252',
          2: '#434C5E',
          3: '#4C566A',
          4: '#D8DEE9', // Snow Storm
          5: '#E5E9F0',
          6: '#ECEFF4',
          7: '#8FBCBB', // Frost
          8: '#88C0D0',
          9: '#81A1C1',
          10: '#5E81AC',
          11: '#BF616A', // Aurora
          12: '#D08770',
          13: '#EBCB8B',
          14: '#A3BE8C',
          15: '#B48EAD',
        },
      },
    },
  },
  plugins: [],
};