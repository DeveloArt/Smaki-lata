'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product } from '@/types/product';
import { Modal } from '../atoms/Modal';
import { useState } from 'react';

interface ProductCardProps extends Product {
  productStalls?: {
    stallId: string;
    price: number;
    quantity: number;
  }[];
}

export const ProductCard = ({ 
  id, 
  name, 
  unit,
  productStalls = []
}: ProductCardProps) => {
  const router = useRouter();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleRowClick = () => router.push(`/dashboard/products/${id}`);

  const handleMenuClick = (e: React.MouseEvent) => e.stopPropagation();

  const handleDelete = () => {
    console.log('Deleting product:', id);
    setIsDeleteModalOpen(false);
  };

  // const getAvailabilityColor = (status: string) => {
  //   switch (status) {
  //     case 'available':
  //       return 'text-green-600 dark:text-green-400';
  //     case 'unavailable':
  //       return 'text-red-600 dark:text-red-400';
  //     case 'low_stock':
  //       return 'text-yellow-600 dark:text-yellow-400';
  //     default:
  //       return 'text-gray-600 dark:text-gray-400';
  //   }
  // };

  // const getAvailabilityText = (status: string) => {
  //   switch (status) {
  //     case 'available':
  //       return 'Dostępny';
  //     case 'unavailable':
  //       return 'Niedostępny';
  //     case 'low_stock':
  //       return 'Niski stan';
  //     default:
  //       return status;
  //   }
  // };

  return (
    <>
      <tr 
        className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
        onClick={handleRowClick}
      >
        <td className="w-1/3 px-6 py-4 whitespace-nowrap">
          <div className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-700 dark:hover:text-blue-300">
            {name}
          </div>
        </td>
        <td className="w-1/3 px-6 py-4 whitespace-nowrap">
          <div className="text-gray-700 dark:text-gray-200 text-center">
            {unit}
          </div>
        </td>
        <td className="w-1/3 px-6 py-4 whitespace-nowrap">
          <div className="text-gray-700 dark:text-gray-200">
            {productStalls.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {productStalls.map(stall => (
                  <span key={stall.stallId}>
                    Stoisko {stall.stallId.replace('stall', '')}
                  </span>
                ))}
              </div>
            ) : (
              <div className="text-sm text-gray-500">Brak przypisanych stoisk</div>
            )}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center justify-end">
            <div className="dropdown dropdown-end" onClick={handleMenuClick}>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01" />
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white dark:bg-gray-700 rounded-box w-32">
                <li><Link href={`/dashboard/products/${id}/edit`} className="text-blue-700 dark:text-blue-300">Edytuj</Link></li>
                <li><a onClick={() => setIsDeleteModalOpen(true)} className="text-red-700 dark:text-red-300">Usuń</a></li>
              </ul>
            </div>
          </div>
        </td>
      </tr>
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-[100]">
          <Modal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            title="Usuń produkt"
            isDanger={true}
            confirmText="Usuń"
            onConfirm={handleDelete}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Czy na pewno chcesz usunąć produkt &quot;{name}&quot;? Tej operacji nie można cofnąć.
            </p>
          </Modal>
        </div>
      )}
    </>
  );
}; 