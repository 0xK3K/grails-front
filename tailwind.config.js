import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        lp: '0 0 20px rgb(38, 63, 169)',
        range: '0 0 20px rgb(80, 56, 126)'
      },
      keyframes: {
        boxBounce: {
          '0%, 100%': { transform: 'translateY(-10%)', animationTimingFunction: 'ease-in-out' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'ease-in-out' }
        },
        boxPulse: {
          '0%, 100%': { opacity: 0.25 },
          '40%, 50%, 60%': { opacity: 1 }
        },
        boxScale: {
          '0%, 100%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.1)' }
        },
        boxSlide: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '50%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translateX(20px)' }
        }
      }
    },
    fontFamily: {
      heading: ['VCR', 'sans-serif'],
      body: ['Helvetica Now Text', 'sans-serif']
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
      addVariant('hover-child', '&:hover > *')
      addVariant('is-not-first-child', '&:not(:first-child)')
      addVariant('is-not-last-child', '&:not(:last-child)')
      addVariant('not-first-child', '& > :not(:first-child)')
      addVariant('not-last-child', '& > :not(:last-child)')
    },
    nextui({
      layout: {
        spacingUnit: 4, // in px
        disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
        dividerWeight: '1px', // h-divider the default height applied to the divider component
        fontSize: {
          tiny: '0.75rem', // text-tiny
          small: '0.875rem', // text-small
          medium: '1rem', // text-medium
          large: '1.125rem' // text-large
        },
        lineHeight: {
          tiny: '1rem', // text-tiny
          small: '1.25rem', // text-small
          medium: '1.5rem', // text-medium
          large: '1.75rem' // text-large
        },
        radius: {
          small: '8px', // rounded-small
          medium: '12px', // rounded-medium
          large: '14px' // rounded-large
        },
        borderWidth: {
          small: '1px', // border-small
          medium: '2px', // border-medium (default)
          large: '3px' // border-large
        }
      },
      themes: {
        dark: {
          layout: {
            hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
            boxShadow: {
              // shadow-small
              small:
                '0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
              // shadow-medium
              medium:
                '0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
              // shadow-large
              large:
                '0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)'
            }
          }
        }
      }
    })
  ],
  darkMode: 'class'
}
