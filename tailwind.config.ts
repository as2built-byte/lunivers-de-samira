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
        // Palette L'univers de Samira - Sacs faits main
        primary: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d9',
          300: '#f4a9b8',
          400: '#ec7691',
          500: '#722f37',  // Bordeaux - Couleur principale
          600: '#6b2830',
          700: '#5c2128',
          800: '#4d1c22',
          900: '#3d161b',
        },
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#d4af37',  // Or - Accent
          600: '#b8960f',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf8f3',
          200: '#faf0e6',  // Crème pour les fonds
          300: '#f5e6d3',
          400: '#e8d4bc',
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
