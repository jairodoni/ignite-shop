import { styled } from '../../styles'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',

  padding: '0 1rem',

  '@bp1200': {
    maxWidth: 800,
  },
  '@bp900': {
    maxWidth: 540,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
})
