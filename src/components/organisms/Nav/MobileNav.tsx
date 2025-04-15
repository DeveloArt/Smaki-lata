"use client";
import { NavGroup } from "../../molecules/NavGroup";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="lg:hidden">
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="fixed top-4 left-4 z-50 flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          aria-label="Otwórz menu"
        >
          <FaBars size={20} />
        </button>
      )}

      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <aside
          className={`fixed inset-y-0 left-0 w-64 border-r bg-gray-100/40 dark:bg-gray-800/40 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full max-h-screen flex-col">
            <header className="flex h-[60px] items-center justify-between border-b px-6">
              <h2 className="font-semibold">Smaki Lata</h2>
              <button
                onClick={closeMenu}
                className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Zamknij menu"
              >
                <FaTimes />
              </button>
            </header>
            <main className="flex-1 overflow-auto py-2">
              <div className="px-3">
                <NavGroup />
              </div>
            </main>
          </div>
        </aside>
      </div>
    </nav>
  );
};
