/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue':        '#1E73BE',
        'brand-dark':        '#0F3F6F',
        'brand-blue-light':  '#E8F4FD',
        'brand-yellow':      '#FFC107',
        'brand-yellow-light':'#FFF8E1',
        'brand-green':       '#28A745',
        'brand-green-light': '#E8F5E9',
        'brand-red':         '#E53935',
        'brand-red-light':   '#FFEBEE',
      },
      fontFamily: {
        sans:    ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Oswald', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
      },
      animation: {
        'fade-up':  'fadeUp 0.6s ease-out both',
        'float':    'float 5s ease-in-out infinite',
        'pulse2':   'pulse2 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
