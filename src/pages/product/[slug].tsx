import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/legacy/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { Plus, Minus } from 'phosphor-react'

import { formatCurrencyString } from 'use-shopping-cart/core'

import { SkeletonComponent } from './components/skeleton'
import { Header } from '@/components/Header'

import { ImageContainer, ProductContainer, ProductDetails } from './styles'
import { useShoppingCart } from 'use-shopping-cart'

interface Product {
  id: string
  name: string
  imgUrl: string
  price: number
  formattedPrice: string
  description: string
  defaultPriceId: string
}

interface ProductProps {
  product: Product
  setOpen: (open: boolean) => void
  handleOpenCart: () => void
}

export default function Product({ product, handleOpenCart }: ProductProps) {
  const [isAddingProductToCart, setIsAddingProductToCart] = useState(false)
  const [quantityProducts, setQuantityProducts] = useState(1)
  const { cartDetails, addItem } = useShoppingCart()

  const { isFallback } = useRouter()

  async function handleAddProductToCart() {
    const formattedProduct = {
      name: product.name,
      id: product.id,
      price: product.price,
      currency: 'BRL',
      language: 'pt-BR',
      image: product.imgUrl,
      defaultPriceId: product.defaultPriceId,
    }

    addItem(formattedProduct, { count: quantityProducts })
  }

  const products = Object.values(cartDetails ?? {})

  let productInShoppingCart: any = false

  if (!!product && !!products && products.length > 0) {
    productInShoppingCart = products.find(
      (productItemList) => productItemList.id === product.id,
    )
  }

  if (isFallback) {
    return (
      <>
        <Header title="Produto" />
        <SkeletonComponent />
      </>
    )
  }

  return (
    <>
      <Header title={product.name} />

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imgUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.formattedPrice}</span>

          <p>{product.description}</p>
          <strong>Quantidade:</strong>
          <div>
            <button
              onClick={() =>
                setQuantityProducts((state) => (state > 1 ? state - 1 : state))
              }
            >
              <Minus size={24} weight="bold" />
            </button>
            <span>{quantityProducts}</span>
            <button onClick={() => setQuantityProducts((state) => state + 1)}>
              <Plus size={24} weight="bold" />
            </button>
          </div>
          {!productInShoppingCart ? (
            <button
              disabled={isAddingProductToCart}
              onClick={handleAddProductToCart}
            >
              Colocar na sacola
            </button>
          ) : (
            <button onClick={handleOpenCart}>Abrir sacola</button>
          )}
        </ProductDetails>
      </ProductContainer>
    </>
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
    formattedPrice: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount ? price.unit_amount / 100 : 0),
    price: price.unit_amount ? price.unit_amount : 0,
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
