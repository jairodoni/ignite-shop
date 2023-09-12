import { styled } from '..'

export const HomeContainer = styled('div', {
  width: '100%',

  maxWidth: '100vw',
  minHeight: 656,

  display: 'flex',
  marginLeft: 'auto',

  position: 'relative',

  '> button': {
    position: 'fixed',
    width: '8%',
    height: '100vh',
    border: 'none',

    '> div': {
      height: '100vh',
      width: '100%',
      flexCenter: '',
      color: '$gray300',

      svg: {
        height: '3rem',
        width: '3rem',
      },
    },

    '&:disabled': {
      overflow: 'hidden',
      width: 0,
      height: 0,
    },
  },

  '> button:nth-child(2)': {
    top: 0,
    left: 0,
    background:
      'linear-gradient(270deg, transparent 0%, rgba(0,0,0, 0.48) 100%)',
  },
  '> button:last-child': {
    top: 0,
    right: 0,
    background:
      'linear-gradient(90deg, transparent 0%, rgba(0,0,0, 0.48) 100%)',
  },
  '@bp900': {
    minHeight: 480,
  },
  '@bp650': {
    minHeight: 400,
  },
  '@bp480': {
    minHeight: 300,
  },
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'poiter',

  '&:first-child': {
    position: 'relative',
    left: '-16vw',
  },

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    background: 'rgba(0,0,0, 0.6)',

    transform: 'translateY(0%)',
    opacity: 1,
    transition: 'all 0.2s ease-in-out',

    '.footer-first-type': {
      height: '100%',
      width: '100%',

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    a: {
      textDecoration: 'none',
    },

    div: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },

    span: {
      lineHeight: 1.6,
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },

    strong: {
      lineHeight: 1.4,
      fontSize: '$lg',
      color: '$gray100',
    },

    '@bp900': {
      strong: {
        fontSize: '1rem',
      },
      span: {
        fontSize: '0.875rem',
      },
    },

    button: {
      background: '$green300',
      color: '$white',
      height: '3.5rem',
      width: '3.5rem',
      border: 'none',
      borderRadius: '6px',

      transition: 'filter 0.2s ease',
      cursor: 'pointer',

      svg: {
        width: '2rem',
        height: '2rem',
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  '@bp900': {
    padding: '0 2rem',
  },
  '@bp650': {
    padding: '0 4rem',
  },
  '@bp480': {
    padding: '0',

    '&:first-child': {
      left: '1rem',
    },
  },
})
