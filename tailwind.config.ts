import type { FluidThemeConfig } from 'fluid-tailwind'
import type { Config } from 'tailwindcss'
import fluid, { extract, fontSize, screens } from 'fluid-tailwind'

export default {
  darkMode: ['class'],
  content: {
    files: ['./src/pages/**/*.{ts,tsx,mdx}', './src/components/**/*.{ts,tsx,mdx}', './src/app/**/*.{ts,tsx,mdx}'],
    extract,
  },
  theme: {
    fluid: (({ theme }) => ({ defaultScreens: ['20rem', theme('screens.lg')] })) satisfies FluidThemeConfig,
    screens,
    fontSize,
    extend: {
      fontFamily: {
        noto: ['var(--font-noto-sans-jp)'],
      },
      colors: {
        'brand-blue': '#4876ff',
        'brand-lime': '#d9f154',
        'brand-navy': '#2e3192',
        'brand-orange': '#ff7347',
        'brand-pink': '#f7d0e9',
        'brand-purple': '#692e54',
        'brand-gray': '#fffdf9',
      },
    },
  },
  plugins: [fluid],
} satisfies Config
