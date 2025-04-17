'use client'

import { InfoCard } from '../atoms/InfoCard'
import { Button } from '../atoms/Button'
import { FaStore } from 'react-icons/fa'

interface ProductStallsProps {
  productId: string
}

export const ProductStalls = ({ productId }: ProductStallsProps) => {
  const handleEditStalls = () => {
    // TODO: Implement edit stalls functionality
    console.log('Edit stalls clicked for product:', productId)
  }

  return (
    <InfoCard title="Przypisane stoiska">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <FaStore className="h-5 w-5" />
          <span>Stoisko 1, Stoisko 3</span>
        </div>
        <Button 
          onClick={handleEditStalls}
          className="w-full"
        >
          Edytuj stoiska
        </Button>
      </div>
    </InfoCard>
  )
} 