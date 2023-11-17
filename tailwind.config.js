/** @type {import('tailwindcss').Config} */
module.exports = {
  dark: 'class',
  light:'class',
  content: [ 
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    fontFamily: {
      'agbalumo': ['Agbalumo'],
      'poppins': ['Poppins', 'sans-serif'],
      'lobster': ['Lobster', 'sans-serif'],
      'space': ['Space Grotesk', 'sans-serif']

      

    },
    extend: {},
  },
  plugins: [ require('tailwindcss-animated')],
}


