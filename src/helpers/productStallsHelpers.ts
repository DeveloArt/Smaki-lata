import { ProductStall } from '@/types/product'

const mockProductStalls: ProductStall[] = [
  {
    productId: '1',
    stallId: 'stall1',
    price: 3.99,
    quantity: 10
  },
  {
    productId: '1',
    stallId: 'stall3',
    price: 4.99,
    quantity: 5
  },
  {
    productId: '2',
    stallId: 'stall1',
    price: 4.99,
    quantity: 8
  },
  {
    productId: '2',
    stallId: 'stall2',
    price: 5.99,
    quantity: 12
  }
]

export async function getProductStalls(productId: string): Promise<ProductStall[]> {
  return mockProductStalls.filter(stall => stall.productId === productId)
}

export async function getStallProducts(stallId: string): Promise<ProductStall[]> {
  return mockProductStalls.filter(stall => stall.stallId === stallId)
}

export async function updateProductStall(productId: string, stallId: string, price: number, quantity: number): Promise<void> {
  const index = mockProductStalls.findIndex(stall => stall.productId === productId && stall.stallId === stallId)
  if (index !== -1) {
    mockProductStalls[index] = { productId, stallId, price, quantity }
  } else {
    mockProductStalls.push({ productId, stallId, price, quantity })
  }
} 