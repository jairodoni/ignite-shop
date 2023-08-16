import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Image from 'next/legacy/image'
import { SkeletonComponent } from './components/skeleton'
import axios from 'axios'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  imgUrl: string
  price: string
  description: string
  defaultPriceId: string
}

interface ProductProps {
  product: Product
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSesstion] =
    useState(false)
  const { isFallback } = useRouter()

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSesstion(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSesstion(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  if (isFallback) {
    return <SkeletonComponent />
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imgUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>
        <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'prod_OSNr99tlk8nODx' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({
  params,
}: any) => {
  const productId = params.slug

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })
  const price = product.default_price as Stripe.Price

  const productFormated = {
    id: product.id,
    name: product.name,
    imgUrl: product.images[0],
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount ? price.unit_amount / 100 : 0),
    description: product.description,
    defaultPriceId: price.id,
  }

  return {
    props: {
      product: productFormated,
    },
    revalidate: 60 * 60 * 1,
  }
}
