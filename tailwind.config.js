/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    screens: {
      'hps': '550px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1800px',
      '4xl': '2035px',
    },
    extend: {
      fontSize: {
        '4.5xl': '2.5rem'
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      height: {
        '96.5': '26.7rem',
        '97': '42rem',
        '99': '27.4rem',
        '98': '55rem',
        '100': '64rem',
      },
      width: {
        '18': '4.7rem',
        '81': '21.8rem',
        '83': '23.63rem',
        '96.5': '25rem',
        '97': '35rem',
        '98': '48rem',
      },
      spacing: {
        '25': '6.2rem',
      },
      maxWidth: {
        '85': '22.5rem',
        '97': '90rem',
      },
      colors: {
        'brown': '#785F29',
        'hijau': '#79A838',
      },
    },
  },
  plugins: [],
}

