"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface INavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export const NavItem: React.FC<INavItemProps> = ({
  href,
  icon,
  label,
  onClick,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const baseClasses =
    "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 cursor-pointer";
  const activeClasses =
    "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50";

  const className = `${baseClasses} ${isActive ? activeClasses : ""}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={className}>
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </button>
    );
  }

  return (
    <Link href={href} className={className}>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};
