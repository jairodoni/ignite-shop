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

  '@bp1500': {
    maxWidth: 900,
  },
  '@bp1200': {
    maxWidth: 600,
  },
  '@bp900': {
    maxWidth: 400,
  },
  '@bp650': {
    maxWidth: 300,
  },
  '@bp480': {
    maxWidth: 250,
  },
})
