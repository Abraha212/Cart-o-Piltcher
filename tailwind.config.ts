import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Amarelos
          neon: '#CDFF00',
          gold: '#FFD700',
          lime: '#B8FF00',
          // Azuis
          dark: '#1E3A5F',
          royal: '#1E5BA8',
          footer: '#0F172A',
          // Cinzas
          gray: {
            medium: '#6B7280',
            dark: '#374151',
            text: '#4B5563',
            border: '#E5E7EB',
          }
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs': '14px',
        'sm': '15px',
        'base': '16px',
        'lg': '17px',
        'xl': '18px',
        '2xl': '28px',
        '3xl': '36px',
        '4xl': '38px',
        '5xl': '42px',
        '6xl': '52px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'lg': '8px',
        'xl': '10px',
        '2xl': '12px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
export default config
