import { styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'

export const ButtonShoppingCartComponent = styled(Dialog.Trigger, {
  background: 'transparent',
  border: 'none',

  center: {
    zIndex: 1,
    width: '1.5rem',
    height: '1.5rem',

    position: 'absolute',
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

  button: {
    zIndex: 8,
    background: '$gray800',
    color: '$gray300',
    height: '3rem',
    width: '3rem',
    border: 'none',
    borderRadius: '6px',

    transition: 'filter 0.2s ease',

    '&:not(:disabled):hover': {
      filter: 'brightness(1.4)',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      color: '$gray400',
    },

    svg: {
      width: '1.5rem',
      height: '1.5rem',
    },
  },
})
