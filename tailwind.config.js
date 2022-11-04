// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   darkMode: 'class', // or 'media' or 'class'
// }
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      peach: '#ef9273',
      cream: '#fef9f8',
      charcoal: '#0d0d0d',
      black: '#000000',
      white: '#ffffff',
    },
    // colors: {
    //   blue: '#1fb6ff',
    //   white: '#FFFFFF',
    //   black: '#000000',
    //   gray: {
    //     50: '#f9fafb',
    //     100: '#f3f4f6',
    //     200: '#e5e7eb',
    //     300: '#d1d5db',
    //     400: '#9ca3af',
    //     500: '#6b7280',
    //     800: '#1f2937',
    //     900: '#111827',
    //   },
    //   purple: '#7e5bef',
    //   pink: '#ff49db',
    //   orange: '#ff7849',
    //   green: '#13ce66',
    //   yellow: '#ffc82c',
    //   'gray-dark': '#273444',
    //   'gray-light': '#d3dce6',
    //   'th-background': 'var(--background)',
    //   'th-background-secondary': 'var(--background-secondary)',
    //   'th-foreground': 'var(--foreground)',
    //   'th-primary-dark': 'var(--primary-dark)',
    //   'th-primary-medium': 'var(--primary-medium)',
    //   'th-primary-light': 'var(--primary-light)',
    //   'th-accent-dark': 'var(--accent-dark)',
    //   'th-accent-medium': 'var(--accent-medium)',
    //   'th-accent-light': 'var(--accent-light)',
    // },
    // backgroundColor: (theme) => ({
    //   //get the value from the color definitions above (7th line from top)
    //   red: theme('colors.red'),
    //   blue: {
    //     dark: theme('colors.blue.dark'),
    //     light: theme('colors.blue.light'),
    //   },
    // }),
    extend: {
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
        },
      },
    },
  },
}
