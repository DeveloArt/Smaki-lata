'use client';
import { ProductCard } from '../molecules/ProductCard';
import { ProductStall } from '@/types/product';
import { useProducts } from '@/hooks/useProducts';

interface ProductListProps {
  productStalls: Record<string, ProductStall[]>;
}

export function ProductList({ productStalls }: ProductListProps) {
  const { products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Błąd!</strong>
        <span className="block sm:inline"> Wystąpił błąd podczas ładowania produktów.</span>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 dark:text-gray-400">Brak produktów do wyświetlenia.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <table className="table w-full">
        <thead>
          <tr className="bg-gray-300 dark:bg-gray-800">
            <th className="w-1/3 px-6 py-3 text-left text-lg font-semibold text-gray-900 dark:text-gray-100">
              Nazwa produktu
            </th>
            <th className="w-1/3 px-6 py-3 text-center text-lg font-semibold text-gray-900 dark:text-gray-100">
              Kategoria
            </th>
            <th className="w-1/3 px-6 py-3 text-center text-lg font-semibold text-gray-900 dark:text-gray-100">
              Jednostka
            </th>
            <th className="w-1/3 px-6 py-3 text-left text-lg font-semibold text-gray-900 dark:text-gray-100">
              Stoiska
            </th>
            <th className="px-6 py-3 text-right text-lg font-semibold text-gray-900 dark:text-gray-100">
              Akcje
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              stalls={productStalls[product.id] || []}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
