import { ProductList } from '@/components/organisms/ProductList'
import { getProductStalls } from '@/helpers/productStallsHelpers'
import { mockProducts } from '@/constants/mockData'
import { ProductStall } from '@/types/product'
import { Button } from '@/components/atoms/Button'
import Link from 'next/link'

export default async function ProductsPage() {
  const productStalls = await Promise.all(
    mockProducts.map(async (product) => {
      const stalls = await getProductStalls(product.id)
      return { productId: product.id, stalls }
    })
  )

  const productStallsMap = productStalls.reduce((acc, { productId, stalls }) => {
    acc[productId] = stalls
    return acc
  }, {} as Record<string, ProductStall[]>)

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Link href="/dashboard/products/new">
          <Button variant="primary">
            Dodaj produkt
          </Button>
        </Link>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <ProductList products={mockProducts} productStalls={productStallsMap} />
      </div>
    </div>
  )
}