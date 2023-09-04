import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/legacy/image'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { Header } from '@/components/Header'
import { CaretRight, CaretLeft, Handbag } from 'phosphor-react'
import { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

interface Product {
  id: string
  name: string
  imgUrl: string
  price: string
  priceFormatted: string
  defaultPriceId: string
  metadata: {
    name: string
    size: string
  }
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const { cartCount, addItem, cartDetails, clearCart } = useShoppingCart()

  let screenWidth = 0

  if (typeof window !== 'undefined') {
    screenWidth = window.screen.width
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: screenWidth > 480 ? 3 : 1,
      spacing: screenWidth > 480 ? 48 : 16,
      origin: 'center',
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  function handleAddProductToCart(product: Product) {
    const checkProduct = Object.values(cartDetails ?? {}).filter(
      (productItem) => productItem.id === product.id,
    )

    if (checkProduct && checkProduct.length > 0) {
      return
    }

    const formattedProduct: any = {
      name: product.name,
      id: product.id,
      price: product.price,
      currency: 'BRL',
      language: 'pt-BR',
      image: product.imgUrl,
      defaultPriceId: product.defaultPriceId,
    }

    addItem(formattedProduct)
  }

  const renderSlide = loaded && instanceRef.current
  const hiddenNextSlideButton =
    renderSlide &&
    instanceRef.current &&
    currentSlide === instanceRef.current.track.details.slides.length - 2

  return (
    <>
      <Header title="Home" />

      <HomeContainer className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {products.map((product: Product, index) => (
            <div key={product.id}>
              <Product className={`keen-slider__slide number-slide${index}`}>
                <Link href={`/product/${product.name}`} prefetch={false}>
                  <Image src={product.imgUrl} width={520} height={480} alt="" />
                </Link>

                <footer>
                  <Link
                    href={`/product/${product.name}`}
                    prefetch={false}
                    className="footer-first-type"
                  >
                    {/*  <div> */}
                    <strong>{product.name}</strong>
                    <span>{product.priceFormatted}</span>
                    {/*  </div> */}
                  </Link>

                  {/* <button onClick={() => handleAddProductToCart(product)}>
                    <Handbag weight="bold" />
                  </button> */}
                </footer>
              </Product>
            </div>
          ))}
        </div>
        {renderSlide && (
          <>
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            >
              <div>
                <CaretLeft />
              </div>
            </button>
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={!!hiddenNextSlideButton}
            >
              <div>
                <CaretRight />
              </div>
            </button>
          </>
        )}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.metadata.name,
      imgUrl: product.images[0],
      size: product.metadata.size,
      priceFormatted: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount ? price.unit_amount / 100 : 0),
      price: price.unit_amount ? price.unit_amount : 0,
      defaultPriceId: price.id,
    }
  })

  // eslint-disable-next-line
  const productsFiltred = products.reduce((newList: any, product: any) => {
    for (let i = 0; i < products.length; i++) {
      if (product.name !== newList[i]?.name) {
        return [...newList, product]
      }
      if (product.name === newList[i]?.name) {
        return newList
      }
    }
  }, [])

  return {
    props: {
      products: productsFiltred,
    },
    revalidate: 60 * 60 * 2, // 2 horas
  }
}
