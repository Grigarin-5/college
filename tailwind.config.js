/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        green: {
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
        },
        secondary: 'var(--secondary)',
      },
      spacing: {
        'section': 'var(--section-padding)',
        'grid-gap': 'var(--grid-gap)',
      },
      backgroundColor: {
        'primary': 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'secondary': 'var(--secondary)',
      },
      textColor: {
        'primary': 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'light': 'var(--text-light)',
        'dark': 'var(--text-dark)',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
} 