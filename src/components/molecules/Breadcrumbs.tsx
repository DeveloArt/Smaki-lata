'use client'
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
  
  // Usuwamy segment 'dashboard' z paths, ponieważ zawsze zaczynamy od niego
  const relevantPaths = paths.filter(path => path !== 'dashboard');

  const breadcrumbs: BreadcrumbItem[] = relevantPaths.map((path, index) => {
    const href = `/dashboard/${relevantPaths.slice(0, index + 1).join('/')}`;
    const label = pathLabels[path] || path.charAt(0).toUpperCase() + path.slice(1);
    return { label, href };
  });

  return (
    <nav className="flex items-center text-sm text-gray-500 mb-4">
      <Link href="/dashboard" className="hover:text-primary">
        Strona główna
      </Link>
      {breadcrumbs.map((item, index) => (
        <div key={item.href} className="flex items-center">
          <FaChevronRight className="mx-2 text-xs" />
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