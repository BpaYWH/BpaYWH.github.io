/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(50%)', opacity: 0 },
          '100%': { transform: 'translateY(-50%)', opacity: 1 }
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'loop-x': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)'}
        },
      },
      animation: {
        'rise': 'rise 1s ease-in-out',
        'fade-in': 'fade-in 1.5s ease-in',
        'loop-x': 'loop-x 2s linear infinite'
      },
      fontFamily: {
        'caveat': 'Caveat, cursive',
        'nunito': 'Nunito, sans-serif',
      },
    }
  },
  plugins: []
}
