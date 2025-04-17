export interface Product {
  id: string
  name: string
  unit: string
  stalls: string[]
  category: string
  availability: 'available' | 'unavailable' | 'low_stock'
  updatedAt: string
  minQuantity: number
  description?: string
  imageUrl?: string
  supplier?: string
  purchasePrice: number
  sku: string
}

export interface ProductStall {
  productId: string
  stallId: string
  price: number
  quantity: number
} 