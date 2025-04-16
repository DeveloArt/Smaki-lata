import { ProductCard } from '../molecules/ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  quantity: number;
}

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="bg-base-200">
            <th className="px-6 py-3 text-left text-lg font-semibold">Nazwa produktu</th>
            <th className="px-6 py-3 text-center text-lg font-semibold">Ilość</th>
            <th className="px-6 py-3 text-right text-lg font-semibold">
              <div className="flex items-center justify-end">
                <div className="flex flex-col items-end w-[120px] mr-12">
                  <span>Cena</span>
                  <span className="text-sm font-normal">(zł)</span>
                </div>
                <div className="w-8"></div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              unit={product.unit}
              quantity={product.quantity}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}; 