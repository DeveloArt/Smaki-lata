'use client'

import { InfoCard } from '../atoms/InfoCard'
import { ProductInfoRow } from '../molecules/ProductInfoRow'

export const ProductStats = () => {
  return (
    <InfoCard title="Statystyki">
      <ProductInfoRow 
        label="Sprzedaż dzienna" 
        value="0" 
      />
      <ProductInfoRow 
        label="Sprzedaż tygodniowa" 
        value="0" 
      />
      <ProductInfoRow 
        label="Sprzedaż miesięczna" 
        value="0" 
      />
    </InfoCard>
  )
} 