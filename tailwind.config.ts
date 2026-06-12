import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'kawaii-pink': '#FFC0CB',
        'kawaii-blue': '#B0E0E6',
        'kawaii-lavender': '#E6E6FA',
        'kawaii-cream': '#FFFDD0',
        'kawaii-gold': '#FFD700',
        'accent-black': '#1A1A1A',
        background: "#FFF5F7",
        foreground: "#4A4A4A",
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
        'kawaii': '2.5rem',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
