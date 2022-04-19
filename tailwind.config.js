const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/theme/**/*.{js,ts,jsx,tsx}',
    './posts/*.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        akshar: ['Akshar', 'sans-serif'],
      },
      screens: {
        'plus-2xl': { max: '1535px' },
        'plus-xl': { max: '1279px' },
        'plus-lg': { max: '1023px' },
        'plus-md': { max: '767px' },
        'plus-sm': { max: '520px' },
      },
    },
    // colors: {
    //   primary: 'bg-gray-800',
    //   gray: colors.neutral,
    // },
    //   typography: (theme) => ({
    //     DEFAULT: {
    //       css: {
    //         color: theme('colors.gray.700'),
    //         a: {
    //           color: theme('colors.primary.500'),
    //           '&:hover': {
    //             color: `${theme('colors.primary.600')} !important`,
    //           },
    //           code: { color: theme('colors.primary.400') },
    //         },
    //         h1: {
    //           fontWeight: '700',
    //           letterSpacing: theme('letterSpacing.tight'),
    //           color: theme('colors.gray.900'),
    //         },
    //         h2: {
    //           fontWeight: '700',
    //           letterSpacing: theme('letterSpacing.tight'),
    //           color: theme('colors.gray.900'),
    //         },
    //         h3: {
    //           fontWeight: '600',
    //           color: theme('colors.gray.900'),
    //         },
    //         'h4,h5,h6': {
    //           color: theme('colors.gray.900'),
    //         },
    //         pre: {
    //           backgroundColor: theme('colors.gray.800'),
    //         },
    //         code: {
    //           color: theme('colors.pink.500'),
    //           backgroundColor: theme('colors.gray.100'),
    //           paddingLeft: '4px',
    //           paddingRight: '4px',
    //           paddingTop: '2px',
    //           paddingBottom: '2px',
    //           borderRadius: '0.25rem',
    //         },
    //         'code::before': {
    //           content: 'none',
    //         },
    //         'code::after': {
    //           content: 'none',
    //         },
    //         details: {
    //           backgroundColor: theme('colors.gray.100'),
    //           paddingLeft: '4px',
    //           paddingRight: '4px',
    //           paddingTop: '2px',
    //           paddingBottom: '2px',
    //           borderRadius: '0.25rem',
    //         },
    //         hr: { borderColor: theme('colors.gray.200') },
    //         'ol li::marker': {
    //           fontWeight: '600',
    //           color: theme('colors.gray.500'),
    //         },
    //         'ul li::marker': {
    //           backgroundColor: theme('colors.gray.500'),
    //         },
    //         strong: { color: theme('colors.gray.600') },
    //         blockquote: {
    //           color: theme('colors.gray.900'),
    //           borderLeftColor: theme('colors.gray.200'),
    //         },
    //       },
    //     },
    //   }),
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
