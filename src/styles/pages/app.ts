import { styled } from '..'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  position: 'relative',
  left: '18vw',

  center: {
    width: '1.5rem',
    height: '1.5rem',

    position: 'fixed',
    marginLeft: '2.2rem',
    marginTop: '-10px',

    background: '$green300',
    color: '$white',
    borderRadius: '9999px',

    span: {
      fontSize: '0.875rem',
      fontWeight: 'bold',
      lineHeight: 1.6,

      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  div: {
    button: {
      background: '$gray800',
      color: '$gray400',
      height: '3rem',
      width: '3rem',
      border: 'none',
      borderRadius: '6px',
    },
  },
})
