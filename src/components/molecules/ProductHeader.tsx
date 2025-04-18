'use client';

import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../atoms/Button';
import { useState } from 'react';
import { Modal } from '../atoms/Modal';
import { ProductContainer } from '../atoms/ProductContainer';
import { useRouter } from 'next/navigation';

interface ProductHeaderProps {
  productId: string;
  productName: string;
}

export const ProductHeader = ({ productId, productName }: ProductHeaderProps) => {
  const router = useRouter();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    console.log('Deleting product:', productId);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="flex items-center justify-between mb-8">
      <Link
        href="/dashboard/products"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
      >
        <IoArrowBack className="w-5 h-5 mr-2" />
        Powrót do listy produktów
      </Link>
      <div className="flex gap-4">
        <Button variant="add" onClick={() => router.push(`/dashboard/products/${productId}/edit`)}>
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
            confirmText="Usuń"
            onConfirm={handleDeleteConfirm}
          >
            <ProductContainer>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Czy na pewno chcesz usunąć produkt &quot;{productName}&quot;? Tej operacji nie można
                cofnąć.
              </p>
            </ProductContainer>
          </Modal>
        </div>
      )}
    </div>
  );
};
