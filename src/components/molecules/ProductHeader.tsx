'use client'

import Link from 'next/link'
import { IoArrowBack } from 'react-icons/io5'
import { ProductActions } from './ProductActions'

export const ProductHeader = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <Link 
        href="/dashboard/products"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
      >
        <IoArrowBack className="w-5 h-5 mr-2" />
        Powrót do listy produktów
      </Link>
      <ProductActions />
    </div>
  )
} 