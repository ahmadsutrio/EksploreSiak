/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/img/image-hero.webp')",
      },
      colors: {
        'primary': '#65AF2B',
        'paragraph':'#636569',
        'heading':'#626060',
        'primary-bg':'#F6F6F6',
        'hero':'#383434',
        'hero-p':'#554D4D'
      },
      fontFamily: {
        'inter':'Inter'
      }
    },
  },
  plugins: [],
}

