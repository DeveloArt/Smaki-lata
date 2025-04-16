import { Button } from '../atoms/Button';
import { ProductList } from '../organisms/ProductList';
import Link from 'next/link';
import { IoMdAdd } from "react-icons/io";
import { Breadcrumbs } from '../molecules/Breadcrumbs';

interface ProductsPageProps {
  products: {
    id: string;
    name: string;
    price: number;
    unit: string;
    quantity: number;
  }[];
}

export const ProductsPage = ({ products }: ProductsPageProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs />
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Nasze Owoce</h1>
        <Link href="/products/add">
          <Button className="flex items-center gap-2">
            <IoMdAdd />
            Dodaj Produkt
          </Button>
        </Link>
      </div>
      <div className="bg-base-100 rounded-lg shadow-lg">
        <ProductList products={products} />
      </div>
    </div>
  );
}; 