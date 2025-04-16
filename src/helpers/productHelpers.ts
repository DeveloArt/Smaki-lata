import { Product } from '@/types/product'
import { mockProducts } from '@/constants/mockData'

export async function getProduct(id: string): Promise<Product | null> {
  return mockProducts.find(product => product.id === id) || null
}

export function formatPrice(price: number): string {
  return price.toFixed(2) + ' zł'
}

export function calculateTotalPrice(price: number, quantity: number): number {
  return price * quantity
} 