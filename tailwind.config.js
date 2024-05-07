/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/img/image-hero.png')",
      },
      colors: {
        'primary': '#65AF2B',
        'paragraph':'#636569',
        'heading':'#626060',
        'primary-bg':'#F6F6F6'
      },
      fontFamily: {
        'inter':'Inter'
      }
    },
  },
  plugins: [],
}

