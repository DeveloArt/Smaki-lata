"use client";
import React from "react";
import { MainLayout } from "../templates/MainLayout";
import { Button } from "../atoms/Button";
import { LoginForm } from "../molecules/LoginForm";
export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Ласкаво просимо до Smaki Lata
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Смачна їжа та гарна атмосфера для вас
        </p>
        <LoginForm onSearch={() => {}} />
        <Button size="lg">Переглянути меню</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Свіжі продукти</h3>
          <p className="text-gray-600">
            Ми використовуємо тільки найсвіжіші та найякісніші інгредієнти
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Професійні кухарі</h3>
          <p className="text-gray-600">
            Наші кухарі готують з любов'ю та професійним підходом
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Затишна атмосфера</h3>
          <p className="text-gray-600">
            Ідеальне місце для сімейних обідів та зустрічей з друзями
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Наші спеціальні пропозиції</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Сімейний обід</h3>
            <p className="text-gray-600 mb-4">
              Спеціальна пропозиція для сімей з дітьми
            </p>
            <Button>Дізнатися більше</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Бізнес-ланч</h3>
            <p className="text-gray-600 mb-4">
              Швидкий та смачний обід для бізнес-зустрічей
            </p>
            <Button>Дізнатися більше</Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
