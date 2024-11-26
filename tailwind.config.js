/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Neue Montreal', 'sans-serif'],
        sans: ['Neue Montreal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}