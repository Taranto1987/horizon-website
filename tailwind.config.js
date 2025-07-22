/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        castor: {
          primary: '#1a365d',
          secondary: '#2d3748',
          accent: '#ed8936',
          light: '#f7fafc',
          dark: '#1a202c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/typography',
  ],
}