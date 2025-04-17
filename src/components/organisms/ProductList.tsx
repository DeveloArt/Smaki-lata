'use client'
import { ProductCard } from '../molecules/ProductCard';
import { Product, ProductStall } from '@/types/product';

interface ProductListProps {
  products: Product[];
  productStalls: Record<string, ProductStall[]>;
}

export function ProductList({ products, productStalls }: ProductListProps) {
  return (
    <div className="relative">
      <table className="table w-full">
        <thead>
          <tr className="bg-gray-300 dark:bg-gray-800">
            <th className="w-1/3 px-6 py-3 text-left text-lg font-semibold text-gray-900 dark:text-gray-100">Nazwa produktu</th>
            <th className="w-1/3 px-6 py-3 text-center text-lg font-semibold text-gray-900 dark:text-gray-100">Kategoria</th>
            <th className="w-1/3 px-6 py-3 text-left text-lg font-semibold text-gray-900 dark:text-gray-100">Stoiska</th>
            <th className="px-6 py-3 text-right text-lg font-semibold text-gray-900 dark:text-gray-100">Akcje</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800">
          {products.map((product) => (
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