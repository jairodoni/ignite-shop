import { Handbag } from 'phosphor-react'
import { ButtonShoppingCartComponent } from './styles'
import { useShoppingCart } from 'use-shopping-cart'

export function ButtonTriggerShoppingCart() {
  const { cartCount, cartDetails } = useShoppingCart()

  return (
    <ButtonShoppingCartComponent
      disabled={!cartCount || Number(cartCount) === 0}
    >
      {Number(cartCount) > 0 && (
        <center>
          <span>{Object.values(cartDetails ?? {}).length}</span>
        </center>
      )}
      <button disabled={!cartCount || Number(cartCount) === 0}>
        <Handbag weight="bold" />
      </button>
    </ButtonShoppingCartComponent>
  )
}
