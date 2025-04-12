"use client";
import React from "react";
import { Header } from "../organisms/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>

      <footer className="bg-gray-100 py-8">FOOTER</footer>
    </div>
  );
};
