import { styled } from '../../styles'
import * as Select from '@radix-ui/react-select'

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

  '.controlQtde': {
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

  '.controlQtde > button': {
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

  '.buttonAddToCart': {
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

    '&:not(:disabled):hover': {
      background: '$green300',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
})

export const SelectButton = styled('div', {
  width: '4.5rem',
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '8px',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 2,
  border: '4px solid $white',

  background: 'transparent',

  '> span': {
    fontWeight: 'bolder',
  },

  '> button > span': {
    width: '2rem',
    textAlign: 'center',
    borderRadius: 0,
  },
  '> button': {
    display: 'flex',
    justifyContent: 'center',

    background: 'transparent',
    color: 'white',
    borderRadius: 0,

    svg: {
      width: '1.25rem',
      height: '1.25rem',
    },

    border: 'none',

    '&:hover': {
      background: '$gray700',
    },
  },
})

export const SelectContent = styled(Select.Content, {
  width: '4rem',
  overflow: 'hidden',
  backgroundColor: '$gray700',
  color: '$white',
  borderRadius: '4px',
  padding: '5px',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
})

export const SelectItem = styled(Select.Item, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: 'none',
  borderRadius: '4px',
  padding: '5px',
  fontWeight: 'bolder',

  '&[data-highlighted]': {
    border: 'none',
    outline: 'none',
    background: '$green300',
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
