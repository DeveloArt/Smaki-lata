"use client";
import React from "react";
import { MainLayout } from "../templates/MainLayout";
import { LoginForm } from "../molecules/LoginForm";
export const HomePage: React.FC = () => {
  const handleSearch = (email: string, password: string) => {
    console.log("data:", email, password);
  };
  return (
    <MainLayout>
      <section className="flex justify-center items-center">
        <LoginForm onSearch={handleSearch} />
      </section>
    </MainLayout>
  );
};
