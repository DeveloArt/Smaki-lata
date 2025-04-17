import { InfoCard } from '../atoms/InfoCard'
import { ProductInfoRow } from '../molecules/ProductInfoRow'

interface ProductBasicInfoProps {
  unit: string
  productStalls: {
    stallId: string
    price: number
    quantity: number
  }[]
}

export const ProductBasicInfo = ({ unit, productStalls }: ProductBasicInfoProps) => {
  return (
    <InfoCard title="Informacje podstawowe">
      {productStalls.map(stall => (
        <div key={stall.stallId} className="mb-4">
          <div className="font-medium text-lg mb-2">Stoisko {stall.stallId.replace('stall', '')}</div>
          <ProductInfoRow 
            label="Cena jednostkowa" 
            value={`${stall.price.toFixed(2)} zł/${unit}`} 
            isPrice 
          />
          <ProductInfoRow 
            label="Dostępna ilość" 
            value={`${stall.quantity} ${unit}`} 
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