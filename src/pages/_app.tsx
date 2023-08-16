import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

import { globalStyles } from '@/styles/global'
import { Container, Header } from '../styles/pages/app'

import logoImg from '@/assets/imgs/logo.svg'
import Image from 'next/image'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Link from 'next/link'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Container className={roboto.className}>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
        </Header>
        <Component {...pageProps} />
      </Container>
    </SkeletonTheme>
  )
}
