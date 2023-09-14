import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginTop: '10rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: 'large',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '$green500',

    '&:hover': {
      color: '$green300',
    },
  },
  center: {
    width: '100%',
    height: '200px',

    display: 'grid',
    placeItems: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',

    margin: '0 auto',
  },
})

export const ImageContainer = styled('div', {
  width: 150,
  height: 150,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '9999px',
  padding: '0.125rem',
  margin: '0',

  position: 'relative',

  boxShadow: '-10px 0px 20px rgba(0, 0, 0, 0.6)',

  img: {
    objectFit: 'cover',
  },
})
