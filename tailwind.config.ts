import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      mono: ['var(--font-geist-mono)'],
    },
    // gridTemplateRows: {
    //   app: 'min-content max-content',
    // },
    extend: {
      colors: {
        blueZodiac: {
          50: '#f1f6fd',
          100: '#e0eaf9',
          200: '#c7dbf6',
          300: '#a1c4ef',
          400: '#75a5e5',
          500: '#5485dd',
          600: '#406ad0',
          700: '#3657bf',
          800: '#31489c',
          900: '#2c3f7c',
          950: '#1e2749',
        },
        moonRoker: {
          50: '#f6f3ff',
          100: '#f0e8ff',
          200: '#e4d9ff',
          300: '#ccb3ff',
          400: '#b388fd',
          500: '#9d58fa',
          600: '#9036f1',
          700: '#8124dd',
          800: '#6c1dba',
          900: '#591a98',
          950: '#370e67',
        },
        tuna: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d6d9e1',
          300: '#b2b8c7',
          400: '#8892a8',
          500: '#69748e',
          600: '#545e75',
          700: '#454c5f',
          800: '#3b4151',
          900: '#30343f',
          950: '#23262e',
        },
      },
    },
  },
  plugins: [],
}
export default config
