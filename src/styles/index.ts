import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      gray900: '#121214',
      gray800: '#202024',
      gray700: '#383838',
      gray400: '#8D8D99',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
  media: {
    bp480: '(max-width: 480px)',
    bp650: '(max-width: 650px)',
    bp900: '(max-width: 900px)',
    bp1200: '(max-width: 1200px)',
    bp1500: '(max-width: 1600px)',
  },
  utils: {
    flexCenter: () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    borderTest: (color: 'red' | 'blue' | 'green' | any) => ({
      border: `1px solid ${color}`,
    }),
  },
})
