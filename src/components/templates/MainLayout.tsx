"use client";
import React from "react";
import { Header } from "../organisms/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Тут буде логіка пошуку
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} />

      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Про нас</h3>
              <p className="text-gray-600">
                Smaki Lata - це місце, де ви можете насолодитися смачною їжею та
                гарною атмосферою.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакти</h3>
              <p className="text-gray-600">
                Адреса: вул. Прикладна, 123
                <br />
                Телефон: +380 12 345 6789
                <br />
                Email: info@smakilata.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Соціальні мережі</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Instagram
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
