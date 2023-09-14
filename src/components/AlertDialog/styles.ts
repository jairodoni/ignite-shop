import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled(Dialog.Content, {
  maxWidth: 850,
  width: '95%',
  zIndex: 3,

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',

  background: '$gray800',
  borderRadius: '8px',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1.6,
    padding: '1.2rem',

    textAlign: 'center',
    svg: {
      width: '5rem',
      height: '5rem',
      color: '#ffd800',
    },

    h3: {
      fontSize: '$2xl',
      marginBottom: '1.4rem',
    },

    p: {
      marginBottom: '1.25rem',
      fontSize: '$md',
    },

    a: {
      color: '$green300',
    },
  },

  '@bp900': {
    top: '25%',
    transform: 'translate(-50%, -25%)',
  },
})

export const Close = styled(Dialog.Close, {
  width: '100px',
  height: '2.2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '6px',

  background: '$gray700',
  color: '$gray100',
  fontWeight: 700,
  fontSize: '1.1rem',

  border: 'none',
  outline: 'none',
  boxShadow: 'none',

  transition: 'filter 0.2s ease',

  '&:hover': {
    filter: 'brightness(0.7)',
  },
})

export const Overlay = styled(Dialog.Overlay, {
  zIndex: 2,
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
  /* background: #00000075; */
})
