import { ProductContainer } from '../styles'
import Skeleton from 'react-loading-skeleton'

export function SkeletonComponent() {
  return (
    <ProductContainer>
      <Skeleton height="calc(656px - 0.5rem)" width={576} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Skeleton height={48} style={{ marginBottom: '1rem' }} />
          <Skeleton height={48} width={200} style={{ marginBottom: '1rem' }} />
          <Skeleton height={24} style={{ marginBottom: '1rem' }} count={3} />
        </div>
        <Skeleton height={48} />
      </div>
    </ProductContainer>
  )
}
