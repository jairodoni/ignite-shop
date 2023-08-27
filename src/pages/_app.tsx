import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import * as Dialog from '@radix-ui/react-dialog'

import { globalStyles } from '@/styles/global'
import { Container, Header } from '../styles/pages/app'

import logoImg from '@/assets/imgs/logo.svg'
import Image from 'next/image'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Link from 'next/link'
import { ShoppingCartContent } from '@/components/ShoppingCartComponent'
import { Handbag } from 'phosphor-react'
import { CartProvider, useShoppingCart } from 'use-shopping-cart'
import { ButtonTriggerShoppingCart } from '@/components/ButtonTriggerShoppingCart'
import { useEffect, useState } from 'react'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)

  function handleOpenCart() {
    setOpen(true)
  }

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <CartProvider
        mode="payment"
        cartMode="checkout-session"
        stripe={String(process.env.STRIPE_PUBLIC_KEY)}
        currency="BRL"
      >
        <Container className={roboto.className}>
          <Header>
            <Link href="/">
              <Image src={logoImg} alt="" />
            </Link>
            <ShoppingCartContent open={open} setOpen={setOpen} />
          </Header>
          <Component {...pageProps} handleOpenCart={handleOpenCart} />
        </Container>
      </CartProvider>
    </SkeletonTheme>
  )
}
