module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
 
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: '#005963',
          light: '#047c8a',
        },
        'main-hover': '#005963'
      }
    },
  },
  variants: {
    extends: {
      outlineColor: ['focus']
    }
  },
  plugins: [ require('@tailwindcss/forms')],
}
