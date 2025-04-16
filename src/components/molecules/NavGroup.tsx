import { NavItem } from '../atoms/NavItem';
import { icons } from '@/assets/icons';

export const NavGroup: React.FC = () => (
  <nav className="flex flex-col gap-2">
    <NavItem href="/dashboard" icon={<icons.home className="h-4 w-4" />} label="Strona główna" />
    <NavItem
      href="/dashboard/products"
      icon={<icons.products className="h-4 w-4" />}
      label="Produkty"
    />
    <NavItem
      href="/dashboard/employees"
      icon={<icons.employees className="h-4 w-4" />}
      label="Pracownicy"
    />
    <NavItem href="/dashboard/tables" icon={<icons.tables className="h-4 w-4" />} label="Stoiska" />
    <NavItem
      href="/dashboard/delivery"
      icon={<icons.delivery className="h-4 w-4" />}
      label="Dostawy"
    />
    <NavItem
      href="/dashboard/reports"
      icon={<icons.reports className="h-4 w-4" />}
      label="Raporty"
    />
    <NavItem href="/" icon={<icons.logout className="h-4 w-4" />} label="Wyloguj" />
  </nav>
);
