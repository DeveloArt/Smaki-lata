import React from "react";
import { SearchForm } from "../molecules/SearchForm";
import { Button } from "../atoms/Button";

interface HeaderProps {
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-gray-800">Smaki Lata</h1>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Головна
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Меню
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Про нас
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Контакти
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <SearchForm onSearch={onSearch} />
            <Button variant="outline">Увійти</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
