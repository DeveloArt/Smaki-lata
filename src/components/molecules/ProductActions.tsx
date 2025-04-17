'use client'

import { Button } from "../atoms/Button"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Modal } from '../atoms/Modal'
import { ProductContainer } from '../atoms/ProductContainer'
import { deleteProduct } from '@/api/productsOperations'

interface ProductActionsProps {
  productId: string
  productName: string
}

export const ProductActions = ({ productId, productName }: ProductActionsProps) => {
  const router = useRouter()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleEdit = () => {
    router.push(`/dashboard/products/${productId}/edit`)
  }

  const handleDelete = () => {
    setIsDeleteModalOpen(true)
  }

  const handleDeleteConfirm = async () => {
    try {
      setIsDeleting(true)
      setError(null)
      await deleteProduct(productId)
      router.push('/dashboard/products')
      router.refresh()
    } catch (err) {
      setError('Wystąpił błąd podczas usuwania produktu')
      console.error('Błąd podczas usuwania produktu:', err)
    } finally {
      setIsDeleting(false)
      setIsDeleteModalOpen(false)
    }
  }

  return (
    <>
      <div className="flex gap-4">
        <Button variant="primary" onClick={handleEdit}>
          Edytuj
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Usuń
        </Button>
      </div>

      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-[100]">
          <Modal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            title="Usuń produkt"
            isDanger={true}
            confirmText={isDeleting ? "Usuwanie..." : "Usuń"}
            onConfirm={handleDeleteConfirm}
          >
            <ProductContainer>
              {error && (
                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                  {error}
                </div>
              )}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Czy na pewno chcesz usunąć produkt &quot;{productName}&quot;? Tej operacji nie można cofnąć.
              </p>
            </ProductContainer>
          </Modal>
        </div>
      )}
    </>
  )
} 