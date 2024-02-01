/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        current: 'currentColor',
        'blue':{
          100:'#1A4060',
          200:'#040944',
          300:'#180E34',
          400:'#26113C'
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require("daisyui"),
  ],
}
