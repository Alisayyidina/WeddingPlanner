import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          surface: '#f8faf5',
          'surface-dim': '#d9dbd6',
          'surface-bright': '#f8faf5',
          'surface-container-lowest': '#ffffff',
          'surface-container-low': '#f3f4ef',
          'surface-container': '#edeee9',
          'surface-container-high': '#e7e9e4',
          'surface-container-highest': '#e1e3de',
          'on-surface': '#191c19',
          'on-surface-variant': '#434843',
          'inverse-surface': '#2e312e',
          'inverse-on-surface': '#f0f1ec',
          outline: '#737872',
          'outline-variant': '#c3c8c1',
          'surface-tint': '#516353',
          primary: '#445647',
          'on-primary': '#ffffff',
          'primary-container': '#5c6e5e',
          'on-primary-container': '#dcf0dc',
          'inverse-primary': '#b8ccb9',
          secondary: '#725b38',
          'on-secondary': '#ffffff',
          'secondary-container': '#fedeb2',
          'on-secondary-container': '#78603e',
          tertiary: '#465647',
          'on-tertiary': '#ffffff',
          'tertiary-container': '#5d6e5f',
          'on-tertiary-container': '#ddf0dd',
          error: '#ba1a1a',
          'on-error': '#ffffff',
          'error-container': '#ffdad6',
          'on-error-container': '#93000a',
          background: '#f8faf5',
          'on-background': '#191c19',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'paper': '0 4px 20px -2px rgba(92, 110, 94, 0.08), 0 1px 3px 0 rgba(34, 37, 34, 0.04)',
        'raised': '0 12px 32px -4px rgba(197, 168, 128, 0.18), 0 4px 12px -2px rgba(34, 37, 34, 0.06)',
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      spacing: {
        gutter: '1rem',
        'gutter-mobile': '0.75rem',
        margin: '2rem',
        'margin-mobile': '1.25rem',
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        'space-2xl': '4rem',
      }
    },
  },
  plugins: [],
};
export default config;
