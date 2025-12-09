import screens from './.tailwind/screens';
import fontFamily from './.tailwind/font-family';
import spacing from './.tailwind/spacing';
import colors from './.tailwind/spacing';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      screens,
      fontFamily,
      spacing,
      colors,
    }
  },
  plugins: []
};
