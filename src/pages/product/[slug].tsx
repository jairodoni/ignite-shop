import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/legacy/image'
import * as Select from '@radix-ui/react-select'
import { GetStaticPaths, GetStaticProps } from 'next'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { Plus, Minus, CaretDown, CaretUp } from 'phosphor-react'

import { SkeletonComponent } from './components/skeleton'
import { Header } from '@/components/Header'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
  SelectButton,
  SelectContent,
  SelectItem,
} from './styles'
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
  sizes: {
    productId: string
    name: string
    size: string
    priceId: string
  }[]
  setOpen: (open: boolean) => void
  handleOpenCart: () => void
}

export default function Product({ product, sizes }: ProductProps) {
  const [isAddingProductToCart, setIsAddingProductToCart] = useState(false)
  const [quantityProducts, setQuantityProducts] = useState(1)
  const [sizeProductId, setSizeProductId] = useState<string>(
    product?.id ? product.id : '',
  )
  const { cartDetails, addItem } = useShoppingCart()

  const { isFallback } = useRouter()

  useEffect(() => {
    if (sizes?.length === 0) {
      setSizeProductId(product.id)
    }
  }, [sizes])

  async function handleAddProductToCart() {
    const productSelected = sizes.filter(
      (product) => product.productId === sizeProductId,
    )

    const formattedProduct = {
      name: productSelected[0].name,
      id: sizeProductId,
      price: product.price,
      currency: 'BRL',
      language: 'pt-BR',
      image: product.imgUrl,
      defaultPriceId: productSelected[0].priceId,
    }

    addItem(formattedProduct, { count: quantityProducts })
  }

  const products = Object.values(cartDetails ?? {})

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

          <div className="controlQtde">
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
          <strong>Tamanho:</strong>
          <Select.Root value={sizeProductId} onValueChange={setSizeProductId}>
            <Select.Trigger asChild>
              <SelectButton>
                <Select.Value />
                <button>
                  <Select.Icon>
                    <CaretDown />
                  </Select.Icon>
                </button>
              </SelectButton>
            </Select.Trigger>
            <Select.Portal>
              <SelectContent className="select-content" position="popper">
                <Select.ScrollUpButton className="select-scroll-button">
                  <CaretUp size={24} />
                </Select.ScrollUpButton>
                <Select.Viewport>
                  {sizes.map(
                    (product: {
                      productId: string
                      name: string
                      size: string
                      priceId: string
                    }) => (
                      <SelectItem
                        key={product.productId}
                        value={product.productId}
                        className="select-item"
                      >
                        <Select.ItemText>{product.size}</Select.ItemText>
                      </SelectItem>
                    ),
                  )}
                </Select.Viewport>
                <Select.ScrollDownButton className="select-scroll-button">
                  <CaretDown size={24} />
                </Select.ScrollDownButton>
                <Select.Arrow />
              </SelectContent>
            </Select.Portal>
          </Select.Root>
          <button
            className="buttonAddToCart"
            disabled={isAddingProductToCart}
            onClick={handleAddProductToCart}
          >
            Colocar na sacola
          </button>
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
  const productName = params.slug

  const search = await stripe.products.search({
    query: `active:\'true\' AND name:\'${productName}\'`,
    expand: ['data.default_price'],
  })

  const productList = search.data.reverse()

  const price = productList[0].default_price as Stripe.Price

  const productFormated = {
    id: productList[0].id,
    name: productList[0].metadata.name,
    imgUrl: productList[0].images[0],
    formattedPrice: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount ? price.unit_amount / 100 : 0),
    price: price.unit_amount ? price.unit_amount : 0,
    description: productList[0].description,
    defaultPriceId: price.id,
  }

  const sizesFormatted = productList.map((product) => {
    return {
      productId: product.id,
      name: product.name,
      size: product.metadata.size,
      priceId: product.default_price.id,
    }
  })

  return {
    props: {
      product: productFormated,
      sizes: sizesFormatted,
    },
    revalidate: 60 * 60 * 1,
  }
}
