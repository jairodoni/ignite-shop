import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/legacy/image'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { Header } from '@/components/Header'
import { CaretRight, CaretLeft } from 'phosphor-react'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  imgUrl: string
  price: string
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
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
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className={`keen-slider__slide number-slide${index}`}>
                <Image src={product.imgUrl} width={520} height={480} alt="" />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
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
      name: product.name,
      imgUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount ? price.unit_amount / 100 : 0),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 horas
  }
}
