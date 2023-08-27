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
})
