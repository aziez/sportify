import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        jakarta: ['var(--font-jakarta), ', ...fontFamily.sans],
      },
      colors: {
        sfund: {
          '50': '#eef7ff',
          '100': '#d9edff',
          '200': '#bce0ff',
          '300': '#8eceff',
          '400': '#59b1ff',
          '500': '#3290ff',
          '600': '#2979f5',
          '700': '#145ae1',
          '800': '#1749b6',
          '900': '#19418f',
          '950': '#142857',
        },
        tangerine: {
          '50': '#fff8ed',
          '100': '#fef0d6',
          '200': '#fcddac',
          '300': '#fac577',
          '400': '#f7a140',
          '500': '#f58d29',
          '600': '#e56a11',
          '700': '#be5110',
          '800': '#973f15',
          '900': '#7a3614',
          '950': '#421a08',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
