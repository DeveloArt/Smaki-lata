export interface Product {
  id: string
  name: string
  unit: string
  category: string
  description?: string
  createdAt: string
  updatedAt: string
}

export interface ProductStall {
  productId: string
  stallId: string
  price: number
  quantity: number
} 