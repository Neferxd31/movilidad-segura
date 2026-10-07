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
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        dash: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-64px)' },
        },
        drive: {
          '0%':   { left: '-15%' },
          '100%': { left: '110%' },
        },
        driveAway: {
          '0%':   { left: '14%' },
          '100%': { left: '110%' },
        },
        arrive: {
          '0%':   { left: '-20%' },
          '100%': { left: '14%' },
        },
        drift: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(48px)' },
        },
        shake: {
          '0%, 100%':      { transform: 'translateX(-50%)' },
          '20%, 60%':      { transform: 'translateX(calc(-50% - 8px))' },
          '40%, 80%':      { transform: 'translateX(calc(-50% + 8px))' },
        },
      },
      animation: {
        'fade-up':  'fadeUp 0.6s ease-out both',
        'float':    'float 5s ease-in-out infinite',
        'pulse2':   'pulse2 2s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.22,1,0.36,1) both',
        'shimmer':  'shimmer 2.4s linear infinite',
        'dash':     'dash 2.5s linear infinite',
        'drive':      'drive 1.6s linear infinite',
        'drive-away': 'driveAway 2.2s ease-in forwards',
        'arrive':     'arrive 1.4s ease-out forwards',
        'drift':      'drift 6s ease-in-out infinite alternate',
        'shake':      'shake 0.4s ease-in-out',
      },
      boxShadow: {
        'brand':    '0 10px 30px -8px rgba(30,115,190,0.35)',
        'brand-lg': '0 20px 45px -12px rgba(15,63,111,0.45)',
      },
    },
  },
  plugins: [],
}
