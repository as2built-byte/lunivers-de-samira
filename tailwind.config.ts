import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette L'univers de Samira - Exacte du site Framer
        primary: {
          50: '#fce4ec',   // Rose très clair
          100: '#f4a3bc',  // Rose clair
          200: '#f4a3bc',
          300: '#c45c7a',
          400: '#a13d5a',
          500: '#8a1c3f',  // Bordeaux principal (exact Framer)
          600: '#7a1838',
          700: '#5e0f2b',  // Bordeaux foncé (exact Framer)
          800: '#4d0c23',
          900: '#3d091b',
        },
        secondary: {
          50: '#fef9e7',
          100: '#fcf0c3',
          200: '#f5e29a',
          300: '#e8cf6f',
          400: '#d4b84a',
          500: '#c9a25b',  // Or/Doré (exact Framer)
          600: '#b08a3d',
          700: '#8f6e2d',
          800: '#6e5421',
          900: '#4d3a17',
        },
        cream: {
          50: '#fff8f5',   // Crème (exact Framer)
          100: '#fef5f0',
          200: '#fceee6',
          300: '#f9e5d9',
          400: '#f2d6c5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
