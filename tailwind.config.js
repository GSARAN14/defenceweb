/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaf2ff',
          100: '#d5e4ff',
          200: '#b0c9ff',
          300: '#8ba7ff',
          400: '#6681ff',
          500: '#4158ff',
          600: '#2a3ef7',
          700: '#1e2de0',
          800: '#1e29b6',
          900: '#1f2a8e',
          950: '#0f1654',
        },
        accent: {
          50: '#fff1f2',
          100: '#ffe0e2',
          200: '#ffc6ca',
          300: '#ff9da5',
          400: '#ff6774',
          500: '#ff3347',
          600: '#ed1525',
          700: '#c70d1b',
          800: '#a70f19',
          900: '#8a121c',
          950: '#4c0409',
        },
        tech: {
          50: '#f1fcfb',
          100: '#cefcf7',
          200: '#9ff5f0',
          300: '#67e9e6',
          400: '#30d1d1',
          500: '#1ab0b3',
          600: '#128c95',
          700: '#147079',
          800: '#155a62',
          900: '#154a53',
          950: '#063038',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Orbitron', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'tech-pattern': "url('https://images.pexels.com/photos/4507967/pexels-photo-4507967.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { filter: 'brightness(1) drop-shadow(0 0 5px rgba(65, 88, 255, 0.2))' },
          '100%': { filter: 'brightness(1.2) drop-shadow(0 0 20px rgba(65, 88, 255, 0.7))' },
        },
      },
    },
  },
  plugins: [],
};