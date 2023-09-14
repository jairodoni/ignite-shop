import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

import { globalStyles } from '@/styles/global'
import { Container, Header } from '../styles/pages/app'

import logoImg from '@/assets/imgs/logo.svg'
import { AlertDialog } from '@/components/AlertDialog'
import { ShoppingCartContent } from '@/components/ShoppingCartComponent'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CartProvider } from 'use-shopping-cart'

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
        shouldPersist
        cartMode="checkout-session"
        stripe={String(process.env.STRIPE_PUBLIC_KEY)}
        currency="BRL"
      >
        <AlertDialog />
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
