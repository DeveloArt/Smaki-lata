'use client'

import { ReactNode } from 'react'

interface ProductContainerProps {
  children: ReactNode
  title?: string
  className?: string
}

export const ProductContainer = ({ 
  children, 
  title,
  className = ''
}: ProductContainerProps) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {title}
        </h2>
      )}
      {children}
    </div>
  )
} 