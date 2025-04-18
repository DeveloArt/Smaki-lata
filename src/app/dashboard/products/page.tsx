import { ProductList } from '@/components/organisms/ProductList';
import { getProductStalls } from '@/helpers/productStallsHelpers';
import { ProductStall } from '@/types/product';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';
import { icons } from '@/assets/icons';
import { getAllProducts } from '@/api/productsOperations';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { queryClientParams } from '@/helpers/queryClientParams';

export default async function ProductsPage() {
  // Prefetch danych na serwerze
  await queryClientParams.prefetchQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  const products = await getAllProducts();

  const productStalls = await Promise.all(
    products.map(async product => {
      const stalls = await getProductStalls(product.id);
      return { productId: product.id, stalls };
    })
  );

  const productStallsMap = productStalls.reduce(
    (acc, { productId, stalls }) => {
      acc[productId] = stalls;
      return acc;
    },
    {} as Record<string, ProductStall[]>
  );

  return (
    <HydrationBoundary state={dehydrate(queryClientParams)}>
      <div className="space-y-4">
        <div className="flex justify-end">
          <Link href="/dashboard/products/new">
            <Button variant="add" size="md">
              <icons.add className="h-5 w-5" />
              Dodaj produkt
            </Button>
          </Link>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <ProductList productStalls={productStallsMap} />
        </div>
      </div>
    </HydrationBoundary>
  );
}
