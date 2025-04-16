import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  unit: string;
  quantity: number;
}

export const ProductCard = ({ id, name, price, unit, quantity }: ProductCardProps) => {
  const unitPrice = quantity > 0 ? price / quantity : 0;

  return (
    <tr className="hover:bg-base-200 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <Link href={`/dashboard/products/${id}`} className="text-lg font-medium hover:text-fresh-600">
          {name}
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-gray-600 text-center">
          {quantity} {unit}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center justify-end">
          <div className="flex flex-col items-end" style={{ width: '120px', marginRight: '2rem' }}>
            <div className="text-xl font-bold text-primary">{price.toFixed(2)} zł</div>
            <div className="text-sm text-gray-500">
              {unitPrice.toFixed(2)} zł/{unit}
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01" />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
              <li><Link href={`/products/${id}`} className="text-primary">Edytuj</Link></li>
              <li><a className="text-error">Usuń</a></li>
            </ul>
          </div>
        </div>
      </td>
    </tr>
  );
}; 