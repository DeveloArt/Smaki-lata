import Link from 'next/link';
import { Button } from '../atoms/Button';
import { IoMdAdd } from "react-icons/io";
import { ProductsPageClient } from '../organisms/ProductsPageClient';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-8">
        <Link href="/dashboard/products/add">
          <Button className="flex items-center gap-2">
            <IoMdAdd />
            Dodaj Produkt
          </Button>
        </Link>
      </div>
      <ProductsPageClient />
    </div>
  );
}