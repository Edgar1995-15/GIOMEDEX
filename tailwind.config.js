/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        mobile: '768px',
        desktop: '1440px'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        title: ['32px', '40px']
      },
      colors: {
        primary: '#595959'
      }
    }
  },
  plugins: []
};
