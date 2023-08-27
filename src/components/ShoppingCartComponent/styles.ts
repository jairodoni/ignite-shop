import { keyframes, styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

const showShoppingCardEffect = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const hideShoppingCardEffect = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(100%)',
  },
})

export const Content = styled(Dialog.Content, {
  zIndex: 10,
  maxWidth: 480,
  width: '100%',
  height: '100%',
  padding: '3rem',

  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,

  background: '$gray800',
  boxShadow: '-6px 0 30px rgba(0, 0, 0 , 0.9)',

  "&[data-state='open']": {
    animation: `${showShoppingCardEffect} 400ms ease-out`,
  },
  "&[data-state='closed']": {
    animation: `${hideShoppingCardEffect} 300ms ease-in`,
  },

  h1: {
    fontWeight: 700,
    fontSize: '$lg',
    lineHeight: 1.6,
    marginBottom: '2rem',
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    height: '90%',

    '.total': {
      maxHeight: '12.5rem',

      display: 'flex',
      flexDirection: 'column',

      div: {
        marginTop: 10,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

        'span:first-child': {
          fontSize: '1rem',
        },

        'span:last-child, strong:first-child': {
          fontSize: '$md',
        },

        'strong:last-child': {
          fontSize: '$xl',
        },
      },
      button: {
        height: '4.3125rem',
        borderRadius: 8,
        background: '$green500',
        border: 'none',
        cursor: 'pointer',

        fontWeight: 700,
        fontSize: '$md',
        color: 'white',
        marginTop: '3.5625rem',

        transition: 'filter 0.2s ease, opacity 0.2s ease',

        '&:not(:disabled):hover': {
          filter: 'brightness(1.4)',
        },

        '&:not(:disabled):active': {
          opacity: 0.7,
        },

        '&:disabled': {
          cursor: 'not-allowed',
          opacity: 0.7,
        },
      },
    },
  },

  '@bp650': {
    width: 'stretch',
    maxWidth: 'none',
    padding: '1.25rem',
  },
})

export const Close = styled(Dialog.Close, {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',

  background: 'none',
  color: '$gray400',

  border: 'none',
  marginBottom: '1.5rem',
})

export const ProductItem = styled('div', {
  width: '100%',
  display: 'inline-flex',

  '& + &': {
    marginTop: '1.53125rem',
  },

  '.image-product': {
    width: '6.37125rem',
    height: '5.8125rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    marginRight: '1.25rem',

    img: {
      objectFit: 'cover',
    },
  },

  '.info-product': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '4px 0',
    fontSize: '$md',

    a: {
      color: '$gray300',
      fontWeight: '400',
      textDecoration: 'none',

      '&:hover': {
        color: '$gray100',
      },
    },

    '.remove-product-link': {
      fontWeight: 700,
      color: '$green500',
      fontSize: '1rem',
      cursor: 'pointer',

      '&:hover': {
        color: '$green300',
      },
    },

    div: {
      display: 'inline-flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    '> div:first-child': {
      alignItems: 'flex-start',

      span: {
        wordBreak: 'break-all',
        overflow: 'hidden',
        display: '-webkit-box',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical',
      },

      strong: {
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
        width: '5rem',
      },
    },

    '> div:last-child': {
      alignItems: 'flex-end',
    },

    '.quantity-control': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',

      button: {
        height: '1.5rem',

        flexCenter: 'center',
        flexDirection: 'row',

        border: 'none',
        padding: '5px',
        borderRadius: '6px',
        cursor: 'pointer',

        background: '$green500',
        color: '$white',

        transition: 'opacity 0.1s ease, background 0.2s ease',

        '&:not(:active):hover': {
          opacity: 0.7,
        },

        '&:active': {
          background: '$green300',
        },

        svg: {
          width: '1rem',
          height: '1rem',
        },
      },

      span: {
        fontWeight: 700,
        fontSize: '1.2rem',
        margin: ' 0 0.5rem',
      },
    },
  },
})
