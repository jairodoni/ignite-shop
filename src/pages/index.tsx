import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from '../styles/pages/home'
import Image from 'next/image'

import shirt01 from '@/assets/imgs/Shirt-1.png'
import shirt02 from '@/assets/imgs/Shirt-2.png'
import shirt03 from '@/assets/imgs/Shirt-3.png'
import shirt04 from '@/assets/imgs/Shirt-4.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt04} width={520} height={480} alt="" />

        <footer>
          <strong>Lorem Ipsum is simply dummy</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt03} width={520} height={480} alt="" />

        <footer>
          <strong>Lorem Ipsum is simply dummy</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt02} width={520} height={480} alt="" />

        <footer>
          <strong>Lorem Ipsum is simply dummy</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt01} width={520} height={480} alt="" />

        <footer>
          <strong>Lorem Ipsum is simply dummy</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
