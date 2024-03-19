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
