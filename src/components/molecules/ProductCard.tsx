'use client';

import { useState, useRef, useEffect, useCallback, memo } from 'react';
import { Product, ProductStall } from '@/types/product';
import { deleteProduct } from '@/api/productsOperations';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsThreeDots } from 'react-icons/bs';
import { Button } from '../atoms/Button';
import { Modal } from '../atoms/Modal';

interface ProductCardProps {
  product: Product;
  stalls: ProductStall[];
}

export const ProductCard = memo(({ product, stalls }: ProductCardProps) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsDeleteModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleDeleteConfirm = useCallback(async () => {
    try {
      setIsDeleting(true);
      setError(null);
      await deleteProduct(product.id);
      router.push('/dashboard/products');
      router.refresh();
    } catch (err) {
      console.error('Błąd podczas usuwania produktu:', err);
      setError('Wystąpił błąd podczas usuwania produktu. Spróbuj ponownie.');
    } finally {
      setIsDeleting(false);
      setIsDeleteModalOpen(false);
    }
  }, [product.id, router]);

  const handleRowClick = useCallback((e: React.MouseEvent) => {
    if (menuRef.current?.contains(e.target as Node)) {
      return;
    }
    router.push(`/dashboard/products/${product.id}`);
  }, [product.id, router]);

  const toggleMenu = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  }, []);

  const openDeleteModal = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDeleteModalOpen(true);
    setIsMenuOpen(false);
  }, []);

  if (!product) {
    return null;
  }

  const stallsText = stalls.length > 0 
    ? stalls.map(stall => stall.stallId).join(', ') 
    : 'Brak stoisk';

  return (
    <>
      <tr 
        className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200" 
        onClick={handleRowClick}
        role="row"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            router.push(`/dashboard/products/${product.id}`);
          }
        }}
      >
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            {product.name}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {product.category}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {stallsText}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right">
          <div className="relative inline-block" ref={menuRef}>
            <Button
              size="sm"
              onClick={toggleMenu}
              className="p-2 hover:bg-primary-100 dark:hover:bg-primary-900"
              aria-label="Opcje produktu"
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
            >
              <BsThreeDots className="w-5 h-5" />
            </Button>
            {isMenuOpen && (
              <div 
                className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-[9999]"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <Link
                    href={`/dashboard/products/${product.id}/edit`}
                    className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-center"
                    role="menuitem"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Edytuj
                  </Link>
                  <button
                    onClick={openDeleteModal}
                    className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 text-center"
                    role="menuitem"
                    disabled={isDeleting}
                  >
                    {isDeleting ? 'Usuwanie...' : 'Usuń'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </td>
      </tr>
      {isDeleteModalOpen && (
        <tr>
          <td colSpan={4} className="p-0">
            <div className="fixed inset-0 z-[100]">
              <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                title="Usuń produkt"
                isDanger={true}
                confirmText={isDeleting ? "Usuwanie..." : "Usuń"}
                onConfirm={handleDeleteConfirm}
              >
                <div className="p-4">
                  {error && (
                    <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg" role="alert">
                      {error}
                    </div>
                  )}
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Czy na pewno chcesz usunąć produkt &quot;{product.name}&quot;? Tej operacji nie można cofnąć.
                  </p>
                </div>
              </Modal>
            </div>
          </td>
        </tr>
      )}
    </>
  );
});

ProductCard.displayName = 'ProductCard'; 