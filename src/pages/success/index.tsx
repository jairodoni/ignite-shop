import Link from 'next/link'
import { ImageContainer, SuccessContainer } from '../../styles/pages/success'
import { GetServerSideProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Image from 'next/legacy/image'
import Head from 'next/head'
import { useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

interface SuccessProps {
  customerName: string
  products: any
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
  }, [])

  const imagesProducs = products.map((product: any) => {
    return String(product.price.product.images[0])
  })

  const totalProducts = products.reduce(
    (accumulator: any, product: any) => accumulator + product.quantity,
    0,
  )

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <center
          style={{ maxWidth: imagesProducs.length > 3 ? '340px' : '240px' }}
        >
          {!!imagesProducs &&
            imagesProducs.length > 0 &&
            imagesProducs.map((productImage: string) => (
              <ImageContainer key={productImage}>
                <Image src={productImage} width={180} height={170} alt="" />
              </ImageContainer>
            ))}
        </center>
        <h1>Compra Efetuada!</h1>
        {products.length > 1 ? (
          <p>
            Uhuul <strong>{customerName}</strong>, sua compra de {totalProducts}{' '}
            camisetas já está a caminho da sua casa.
          </p>
        ) : (
          <p>
            Uhuul <strong>{customerName}</strong>, sua{' '}
            <strong>{products[0].description}</strong> já esta a caminho da sua
            casa.
          </p>
        )}
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session?.customer_details?.name
  const products = session?.line_items?.data as unknown as Stripe.Product

  return {
    props: {
      customerName,
      products,
    },
  }
}
