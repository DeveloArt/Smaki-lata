'use client'
import { mockProducts } from '@/constants/mockData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronRight } from 'react-icons/fa';

interface BreadcrumbItem {
  label: string;
  href: string;
}

const pathLabels: Record<string, string> = {
  'dashboard': 'Strona główna',
  'products': 'Produkty',
  'employees': 'Pracownicy',
  'tables': 'Stoiska',
  'delivery': 'Dostawy',
  'reports': 'Raporty',
  'add': 'Dodaj'
};

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);
  const relevantPaths = paths.filter(path => path !== 'dashboard');
  const isProductPage = relevantPaths[0] === 'products' && relevantPaths[1] && !relevantPaths[2];
  
  let breadcrumbs: BreadcrumbItem[];
  
  if (isProductPage) {
    const productId = relevantPaths[1];
    const product = mockProducts.find(p => p.id === productId);
    breadcrumbs = [
      { label: 'Strona główna', href: '/dashboard' },
      { label: 'Produkty', href: '/dashboard/products' },
      { label: product?.name || productId, href: `/dashboard/products/${productId}` }
    ];
  } else {
    breadcrumbs = [
      { label: 'Strona główna', href: '/dashboard' },
      ...relevantPaths.map((path, index) => {
        const href = `/dashboard/${relevantPaths.slice(0, index + 1).join('/')}`;
        const label = pathLabels[path] || path.charAt(0).toUpperCase() + path.slice(1);
        return { label, href };
      })
    ];
  }

  return (
    <nav className="flex items-center text-sm text-gray-500 mb-4">
      {breadcrumbs.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <FaChevronRight className="mx-2 text-xs" />}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-primary">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}; 