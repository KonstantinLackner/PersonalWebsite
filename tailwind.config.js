/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./hausdurchsuchung.html", "PlanSeeStadt.html"],
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
      'mediumDarkBlue': '#1b3669',
      'darkModeLightBlue': '#4287f5',
      'somewhatSalmon': '#e0a896',
      'somewhatTurquoise': '#96e0d3',
      'eyeGreen': '#62c25b',
      'eGToEBStep1': '#65b885',
      'eGToEBStep2': '#68aeaf',
      'eyeBlue': '#6aa3d9',
      'darkGreen': '#346930',
      'darkBlue': '#32506b',
      'veryLightGreen': '#ddf0da',
      'veryLightBlue': '#e6eef5',
      'lightBrown': '#D2BBA1',
      'orangeBrown': '#9F7141',
      'transp': 'rgba(255, 255, 255, 0)',
    },
    extend: {
      fontFamily: {
        sans: ['Monsterrat', 'sans-serif'],
      },
      scale: {
        '25': '0.25',
        '10': '0.1'
      },
      scrollMargin: {
        'mobile-header': '130px',
        'desktop-header': '80px'
      },
      rotate: {
        '48': '48deg'
      },
      spacing: {
        'header-spacer' : '8rem',
        'header-spacer-mobile' : '7rem',
        'small-header-spacer' : '2rem',
        'small-header-spacer-mobile' : '1rem',
        'footer-spacer' : '8rem',
        'footer-spacer-mobile' : '7rem',
      },
      fontSize: {
        '5xl': '5rem',
      }
    },
  },
  plugins: [],
}

