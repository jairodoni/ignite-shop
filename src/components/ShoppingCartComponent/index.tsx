import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { Close, Content, ProductItem } from './styles'
import Image from 'next/legacy/image'
import shirt01 from '@/assets/imgs/Shirt-4.png'
import { useState } from 'react'

export function ShoppingCartContent() {
  return (
    <Dialog.Portal>
      <Content>
        <div>
          <div>
            <Close>
              <X size={24} />
            </Close>
            <h1>Sacola de compras</h1>
            <ProductItem>
              <div>
                <Image src={shirt01} width={94} height={94} alt="" />
              </div>
              <div>
                <span>Camiseta Beyond the Limits</span>
                <strong>R$ 79,90</strong>
                <a>Remover</a>
              </div>
            </ProductItem>
            <ProductItem>
              <div>
                <Image src={shirt01} width={94} height={94} alt="" />
              </div>
              <div>
                <span>Camiseta Beyond the Limits</span>
                <strong>R$ 79,90</strong>
                <a>Remover</a>
              </div>
            </ProductItem>
          </div>

          <div>
            <div>
              <span>Quantidade</span>
              <span>3 itens</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>R$ 270,00</strong>
            </div>

            <button type="button">Finalizar compra</button>
          </div>
        </div>
      </Content>
    </Dialog.Portal>
  )
}
