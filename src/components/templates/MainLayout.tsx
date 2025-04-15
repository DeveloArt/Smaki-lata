"use client";
import React from "react";
import { Header } from "../organisms/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};
