'use client'

import { InfoCard } from '../atoms/InfoCard'
import { ProductInfoRow } from '../molecules/ProductInfoRow'
import { ProductStall } from '@/types/product'

interface ProductBasicInfoProps {
  productStalls: ProductStall[]
}

export const ProductBasicInfo = ({ productStalls }: ProductBasicInfoProps) => {
  return (
    <InfoCard title="Informacje podstawowe">
      {productStalls.map(stall => (
        <div key={stall.stallId} className="mb-4">
          <div className="font-medium text-lg mb-2">Stoisko {stall.stallId.replace('stall', '')}</div>
          <ProductInfoRow 
            label="Cena jednostkowa" 
            value={`${stall.price.toFixed(2)} zł`} 
            isPrice 
          />
          <ProductInfoRow 
            label="Dostępna ilość" 
            value={`${stall.quantity}`} 
          />
          <ProductInfoRow 
            label="Wartość magazynowa" 
            value={`${(stall.price * stall.quantity).toFixed(2)} zł`} 
          />
        </div>
      ))}
    </InfoCard>
  )
} 