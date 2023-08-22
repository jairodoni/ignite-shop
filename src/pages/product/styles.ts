import { styled } from '../../styles'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 'calc(656px - 0.5rem)',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  '> span': {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
    fontWeight: 'bold',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  '> strong': {
    margin: ' 1.25rem 0 1rem',
    fontSize: '1.1rem',
  },

  '> div': {
    width: 'min-content',
    display: 'inline-flex',
    alignItems: 'center',

    border: '4px solid $white',
    borderRadius: '9999px',

    background: 'transparent',
    color: '$white',

    fontWeight: 700,
    fontSize: '1rem',

    span: {
      margin: '0 0.75rem',
    },
  },

  '> div > button': {
    flexCenter: 'center',
    color: '$white',
    background: 'transparent',
    border: 'none',
    padding: 4,

    transition: 'opacity 0.1s ease, background 0.2s ease',

    svg: {
      width: '1.25rem',
      height: '1.25rem',
    },

    '&:hover': {
      background: '$gray700',
    },

    '&:first-child': {
      borderRadius: '9999px 0 0 9999px',
    },

    '&:last-child': {
      borderRadius: '0 9999px 9999px 0',
    },

    '&:active': {
      opacity: 0.7,
    },
  },

  '> button': {
    marginTop: 'auto',
    background: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: '700',
    fontFamily: '$md',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$green300',
    },
  },
})

export const ImageContainerSkeleton = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 'calc(656px - 0.5rem)',

  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
