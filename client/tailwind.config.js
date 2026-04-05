/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dull': 'var(--color-primary-dull)',
        light: 'var(--color-light)',
        borderColor: 'var(--color-borderColor)',
      },
      maxWidth: {
        '200': '50rem',
      },
      maxHeight: {
        '74': '18.5rem',
      },
    },
  },
  plugins: [],
}