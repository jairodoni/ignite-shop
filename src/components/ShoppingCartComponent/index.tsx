import * as Dialog from '@radix-ui/react-dialog'
import { Minus, Plus, X } from 'phosphor-react'
import { Close, Content, ProductItem } from './styles'
import Image from 'next/legacy/image'
import { useShoppingCart } from 'use-shopping-cart'
import { useEffect, useState } from 'react'
import { ButtonTriggerShoppingCart } from '../ButtonTriggerShoppingCart'
import Link from 'next/link'
import axios from 'axios'

interface ProductType {
  name: string
  id: string
  price: number
  currency: string
  image: string
}

interface ShoppingCartContentProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function ShoppingCartContent({
  open,
  setOpen,
}: ShoppingCartContentProps) {
  const {
    cartDetails,
    cartCount,
    incrementItem,
    decrementItem,
    removeItem,
    formattedTotalPrice,
  } = useShoppingCart()

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSesstion] =
    useState(false)

  const products = Object.values(cartDetails ?? {})

  async function handleBuyProduct() {
    const productsSelected = products.map((product) => {
      return {
        price: product.defaultPriceId,
        quantity: product.quantity,
      }
    })

    try {
      setIsCreatingCheckoutSesstion(true)
      const response = await axios.post('/api/checkout', {
        listCartProducts: productsSelected,
      })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSesstion(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <Dialog.Root
      open={!!cartCount && cartCount > 0 ? open : false}
      onOpenChange={setOpen}
    >
      <ButtonTriggerShoppingCart />

      <Dialog.Portal>
        <Content>
          <div>
            <div>
              <Close>
                <X size={24} />
              </Close>
              <h1>Sacola de compras</h1>
              {!!cartCount &&
                Number(cartCount) > 0 &&
                products.map((product) => (
                  <ProductItem key={product.id}>
                    <Link href={`/product/${product.id}`}>
                      <div className="image-product">
                        <Image
                          src={String(product.image)}
                          width={94}
                          height={94}
                          alt=""
                        />
                      </div>
                    </Link>
                    <div className="info-product">
                      <div>
                        <span>
                          <Link href={`/product/${product.id}`}>
                            {product.name}
                          </Link>
                        </span>
                        <strong>{product.formattedValue}</strong>
                      </div>
                      <div>
                        <center className="quantity-control">
                          <button onClick={() => decrementItem(product.id)}>
                            <Minus weight="bold" />
                          </button>
                          <span>{product.quantity}</span>
                          <button onClick={() => incrementItem(product.id)}>
                            <Plus weight="bold" />
                          </button>
                        </center>
                        <a
                          className="remove-product-link"
                          onClick={() => removeItem(product.id)}
                        >
                          Remover
                        </a>
                      </div>
                    </div>
                  </ProductItem>
                ))}
            </div>

            <div className="total">
              <div>
                <span>Quantidade</span>
                <span>{cartCount} itens</span>
              </div>

              <div>
                <strong>Total</strong>
                <strong>{formattedTotalPrice}</strong>
              </div>

              <button
                type="button"
                onClick={handleBuyProduct}
                disabled={
                  isCreatingCheckoutSession || !cartCount || cartCount === 0
                }
              >
                Finalizar compra
              </button>
            </div>
          </div>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
