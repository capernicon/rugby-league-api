/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
    },
    colors: {
        'font-primary': '#1c1c1c', // font colour primary
        'font-secondary': '#1c1c1c', // font colour secondary
        'primary-blue': '#3e4fab', // code - blue
        'primary-gray': '#dbdbdb', // v light grey
        'secondary-gray': '#c9c9c9', // v light grey
        'tertiary-gray': '#ededed',  // v light grey
        'gray-dark': '#273444',
        'green': '#0fab24',
        'blue': '#2b8bf0',
        'light': '#fafafa',
        'black': '#000000',
        'output-column': '#3e4c57' 
    },
    extend: {
        fontSize: {
            'xs': '0.7rem',
            'sm': '0.8rem',
            'base': '0.9rem',
            'lg': '1.1rem',
            'xl': '1.2rem',
            '2xl': '1.3rem',
            '3xl': '1.7rem',
            '4xl': '2.2rem'
        },
        fontFamily: {
            'sans': ['Helvetica', 'Arial', 'sans-serif']
          },
    }
  },
  plugins: [],
}

