/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        marvel: {
          primary: '#ed1d24',
          secondary: '#f95999',
          accent: '#d19c49',
          neutral: '#34253c',
          'base-100': '#eaecf5',
          info: '#34adcb',
          success: '#1eae68',
          warning: '#e18105',
          error: '#f55c80',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
