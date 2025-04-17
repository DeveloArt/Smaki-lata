'use client'
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs';

export const Breadcrumbs = () => {
  const { breadcrumbs, error } = useBreadcrumbs();

  if (error) {
    return (
      <div className="text-red-500 text-sm mb-4" role="alert">
        {error}
      </div>
    );
  }

  return (
    <nav 
      className="flex items-center text-sm text-gray-500 mb-4"
      aria-label="Nawigacja okruszków"
    >
      {breadcrumbs.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && (
            <FaChevronRight 
              className="mx-2 text-xs" 
              aria-hidden="true"
            />
          )}
          {index === breadcrumbs.length - 1 ? (
            <span 
              className="text-primary"
              aria-current="page"
            >
              {item.label}
            </span>
          ) : (
            <Link 
              href={item.href} 
              className="hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};