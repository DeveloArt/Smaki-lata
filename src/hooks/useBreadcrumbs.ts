import { useEffect, useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { getProduct } from '@/helpers/productHelpers';
import { BreadcrumbItem, PathType } from '@/types/breadcrumbs';
import { PATH_LABELS, DEFAULT_BREADCRUMB } from '@/constants/breadcrumbs';

export const useBreadcrumbs = () => {
  const pathname = usePathname();
  const [productName, setProductName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const { paths, pathType, productId } = useMemo(() => {
    const paths = pathname.split('/').filter(Boolean);
    const relevantPaths = paths.filter(path => path !== 'dashboard');
    
    const isProductPage = relevantPaths[0] === 'products' && 
      relevantPaths[1] && 
      !relevantPaths[2] && 
      !isNaN(Number(relevantPaths[1]));
    
    const isAddProductPage = relevantPaths[0] === 'products' && 
      relevantPaths[1] === 'add';
    
    const isEditProductPage = relevantPaths[0] === 'products' && 
      relevantPaths[1] && 
      relevantPaths[2] === 'edit';

    let pathType: PathType = 'default';
    if (isProductPage) pathType = 'product';
    else if (isEditProductPage) pathType = 'edit-product';
    else if (isAddProductPage) pathType = 'add-product';

    return {
      paths: relevantPaths,
      pathType,
      productId: relevantPaths[1]
    };
  }, [pathname]);

  useEffect(() => {
    if (pathType === 'product' || pathType === 'edit-product') {
      getProduct(productId)
        .then(product => {
          if (product) {
            setProductName(product.name);
            setError(null);
          }
        })
        .catch(err => {
          setError('Nie udało się załadować nazwy produktu');
          console.error('Błąd ładowania produktu:', err);
        });
    }
  }, [pathType, productId]);

  const breadcrumbs = useMemo(() => {
    const items: BreadcrumbItem[] = [DEFAULT_BREADCRUMB];

    switch (pathType) {
      case 'product':
        items.push(
          { label: 'Produkty', href: '/dashboard/products' },
          { label: productName || productId, href: `/dashboard/products/${productId}` }
        );
        break;
      case 'edit-product':
        items.push(
          { label: 'Produkty', href: '/dashboard/products' },
          { label: productName || productId, href: `/dashboard/products/${productId}` },
          { label: 'Edytuj', href: `/dashboard/products/${productId}/edit` }
        );
        break;
      case 'add-product':
        items.push(
          { label: 'Produkty', href: '/dashboard/products' },
          { label: 'Nowy', href: '/dashboard/products/add' }
        );
        break;
      default:
        let currentPath = '/dashboard';
        paths.forEach((path) => {
          currentPath += `/${path}`;
          const label = PATH_LABELS[path] || path.charAt(0).toUpperCase() + path.slice(1);
          items.push({ label, href: currentPath });
        });
    }

    return items;
  }, [pathType, paths, productName, productId]);

  return { breadcrumbs, error };
}; 