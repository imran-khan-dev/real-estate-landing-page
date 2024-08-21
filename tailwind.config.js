/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      backgroundColor: {
        'gray-shade': '#F5F5F5',
        'green': '#4BA586',
        'ocean-green': '#69B99D',
        'light-blue': '#F8F9FE',
        'blue-hint-white': '#FEFEFF',
      },

      borderColor: {
        'light-grayish': '#DEDCDA',
        'ocean-green': '#69B99D',
      },

      textColor: {
        'teal-blue': '#054457',
        'dark-green': '#0B2E29',
        'rich-green': '#0B2E29',
        'deep-navy': '#1F2744',
        'mid-gray': '#767676',
        'grey-shade': '#575757',
        'grayish-blue': '#73788C',
        'theme-gray': '#8E8E8E',
        'theme-green': '#4BA586',
        'ocean-green': '#69B99D',
        'dark-gray': '#A6A6A6',
        'teal-green': '#50a788'
      },

      width: {
        '141px': '8.8125rem',
        '142px': '8.875rem',
        '162px': '10.125rem',
        '174px': '10.875rem',
        '211.5px': '13.22rem',
        '274px': '17.125rem',
        '310.7px': '19.41rem',
        '351px': '21.9375rem',
        '377px': '23.5625rem',
        '436px': '27.25rem',
        '515px': '32.1875rem',
        '557px': '34.8125rem',
        '50.8%': '50.8%',
        '95%': '95%',
        '751px': '46.9375rem',
        '165px': '10.3125rem',
        '109px': '6.8125rem',
        'test': '272px',
      },

      maxWidth: {
        '1192px': '74.5rem',
        '93%': '93%',
        // 'test': '272px',
      },

      height: {
        '50px': '3.125rem',
        '82px': '5.125rem',
        '218px': '13.625rem',
        '252px': '15.75rem',
        '350px': '21.875rem',
        '393px': '24.56rem',
        '954PX': '59.625rem',
        '124px': '7.75rem',
        '150px': '150px',
      },

      margin: {
        '2px': '0.125rem',
        '14px': '0.875rem',
        '34px': '2.125rem',
        '65px': '4.0625rem',
        '216px': '13.5rem',
        '15px': '0.9375rem',
        '17.6px': '1.1rem',
        '10px': '11.5px',

      },

      padding: {
        '75px': '4.6875rem',
        '100px': '6.25rem',
        '72px': '4.5rem',
        '18.08px': '1.13rem',
        '47.52px': '2.97rem',
        '38.4px': '2.4rem',

      },

      fontFamily: {
        'nunito': ["Nunito Sans", 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'rubik': ["Rubik", 'sans-serif'],
      },

      fontSize: {
        '28px': '1.75rem',
        '64px': '4rem',
      },

      letterSpacing: {
        '0.25px': '0.015625rem',
        '0.5px': '0.03125rem',
      },

      lineHeight: {
        '22px': '1.375rem',
        '24px': '1.5rem',
        '26px': '1.625rem',
        '28px': '1.75rem',
        '38px': '2.375rem',
        '56px': '3.5rem',
        '58px': '3.625rem',
        '74px': '4.625rem',
        '80px': '5rem',
      },
      boxShadow: {
        'custom-shadow': '35px 35px 65px 0 rgba(146, 106, 120, 0.16)',
      }
    },

  },
  plugins: [],
}

