/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        base: {
          50: '#FAF9F6',
          100: '#F5F4F1',
          200: '#F0F0EE',
          300: '#E8E7E5',
          400: '#D4D3D1',
        },
        slate: {
          800: '#1C1917',
          700: '#292524',
          600: '#44403C',
          500: '#555',
          400: '#78716C',
          300: '#A8A29E',
          200: '#D6D3D1',
        },
        accent: {
          50: '#FFF4ED',
          100: '#FFE7D6',
          200: '#FFD0B3',
          300: '#FFB38A',
          400: '#FF8F5A',
          500: '#E65F2B',
          600: '#C94E22',
          700: '#A33D1B',
          800: '#7D3016',
          900: '#5A2411',
        },
      },
    },
  },
  plugins: [],
};