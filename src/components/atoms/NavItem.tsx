"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const NavItem: React.FC<INavItemProps> = ({ href, icon, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
        isActive
          ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
          : ""
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};
