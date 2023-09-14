import { ProductContainer } from './styles'
import Skeleton from 'react-loading-skeleton'

export function SkeletonProductComponent() {

  let screenWidth = 0

  if (typeof window !== 'undefined') {
    screenWidth = window.screen.width
  }

  return (
    <ProductContainer>
      <Skeleton height="calc(656px - 0.5rem)" width={576} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <Skeleton height={48} width={500} style={{ marginBottom: '1rem' }} />
          <Skeleton height={48} width={200} style={{ marginBottom: '1rem' }} />
          <Skeleton height={24} width={500} style={{ marginBottom: '1rem' }} count={3} />
        </div>
        <Skeleton height={48} />
      </div>
    </ProductContainer>
  )
}
