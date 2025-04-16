'use client'

import { useSearchParams } from 'next/navigation'
import { ProductList } from './ProductList'
import { Pagination } from '../molecules/Pagination'
import { mockProducts } from '@/constants/mockData'

const ITEMS_PER_PAGE = 5

export const ProductsPageClient = () => {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const currentPage = page ? parseInt(page, 10) : 1
  
  const totalPages = Math.ceil(mockProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedProducts = mockProducts.slice(startIndex, endIndex)

  return (
    <div className="bg-base-100 rounded-lg shadow-lg">
      <ProductList products={paginatedProducts} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          baseUrl="/dashboard/products"
        />
      )}
    </div>
  )
} 