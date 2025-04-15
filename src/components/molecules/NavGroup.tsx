import { NavItem } from "../atoms/NavItem";
import {
  FaHome,
  FaBox,
  FaUsers,
  FaStore,
  FaTruck,
  FaSignOutAlt,
  FaChartBar,
} from "react-icons/fa";

export const NavGroup: React.FC = () => (
  <nav className="flex flex-col gap-2">
    <NavItem
      href="/dashboard"
      icon={<FaHome className="h-4 w-4" />}
      label="Strona główna"
    />
    <NavItem
      href="/dashboard/products"
      icon={<FaBox className="h-4 w-4" />}
      label="Produkty"
    />
    <NavItem
      href="/dashboard/employees"
      icon={<FaUsers className="h-4 w-4" />}
      label="Pracownicy"
    />
    <NavItem
      href="/dashboard/tables"
      icon={<FaStore className="h-4 w-4" />}
      label="Stoiska"
    />
    <NavItem
      href="/dashboard/delivery"
      icon={<FaTruck className="h-4 w-4" />}
      label="Dostawy"
    />
    <NavItem
      href="/dashboard/reports"
      icon={<FaChartBar className="h-4 w-4" />}
      label="Raporty"
    />
    <NavItem
      href="/"
      icon={<FaSignOutAlt className="h-4 w-4" />}
      label="Wyloguj"
    />
  </nav>
);
