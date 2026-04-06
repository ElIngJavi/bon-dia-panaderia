/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:        '#C2541A',
        'primary-dark': '#9B3E0F',
        'primary-light':'#E8794A',
        cream:          '#FDF5E8',
        'cream-dark':   '#F5E6CC',
        bark:           '#3D1F0D',
        wheat:          '#E8C98A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Lato"', 'sans-serif'],
        accent:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
