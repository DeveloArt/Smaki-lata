import { InfoCard } from '../atoms/InfoCard'
import { ProductInfoRow } from '../molecules/ProductInfoRow'

interface ProductBasicInfoProps {
  price: number
  unit: string
  quantity: number
}

export const ProductBasicInfo = ({ price, unit, quantity }: ProductBasicInfoProps) => {
  return (
    <InfoCard title="Informacje podstawowe">
      <ProductInfoRow 
        label="Cena jednostkowa" 
        value={`${price.toFixed(2)} zł/${unit}`} 
        isPrice 
      />
      <ProductInfoRow 
        label="Dostępna ilość" 
        value={`${quantity} ${unit}`} 
      />
      <ProductInfoRow 
        label="Wartość magazynowa" 
        value={`${(price * quantity).toFixed(2)} zł`} 
      />
    </InfoCard>
  )
} 