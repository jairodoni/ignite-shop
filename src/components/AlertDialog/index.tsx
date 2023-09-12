import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay } from './styles'
import { Warning } from 'phosphor-react'

export function AlertDialog() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Overlay />
      <Content>
        <div>
          <Warning />
          <h3>Atenção !!</h3>
          <p>
            Este site apenas "SIMULA" um e-commerce, nenhuma compra será
            realmente efetuada e nenhum produto está realmente a venda, o
            recurso usado para efetuar as compras é o stripe, no momento ele
            está com o modo teste ativado, mesmo assim se for testar alguma
            compra compra NÃO use um cartão real, pode-se utilizar os exemplos
            do seguinte site para teste:{' '}
            <a>
              https://stripe.com/docs/testing?testing-method=card-numbers#cards
            </a>
          </p>
          <Close>
            <span>Fechar</span>
          </Close>
        </div>
      </Content>
    </Dialog.Root>
  )
}
