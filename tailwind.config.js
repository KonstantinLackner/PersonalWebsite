/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    colors: {
      'mainBlue': '#003399',
      'mediumBlue': '#154CCC',
      'lightBlue': '#F3F6FC',
      'greyBlue': '#ced0d6',
      'darkGrey': '#626468',
      'lightGrey': '#b0b0b0',
      'black': '#000000',
      'white': '#ffffff',
      'darkBlue': '#0d1e3d',
      'mediumDarkBlue': '#1b3669',
      'darkModeLightBlue': '#4287f5'
    },
    extend: {
      scale: {
        '25': '0.25',
        '10': '0.1'
      },
      scrollMargin: {
        'mobile-header': '130px',
        'desktop-header': '10px'
      },
      rotate: {
        '48': '48deg'
      }
    },
  },
  plugins: [],
}

