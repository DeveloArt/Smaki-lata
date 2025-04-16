import { InfoCard } from '../atoms/InfoCard'
import { ProductInfoRow } from '../molecules/ProductInfoRow'

interface ProductStatsProps {
  unit: string
}

export const ProductStats = ({ unit }: ProductStatsProps) => {
  return (
    <InfoCard title="Statystyki">
      <ProductInfoRow 
        label="Średnia sprzedaż dzienna" 
        value={`5 ${unit}`} 
      />
      <ProductInfoRow 
        label="Ostatnia aktualizacja" 
        value="2 godziny temu" 
      />
    </InfoCard>
  )
} 