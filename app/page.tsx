'use client';

import React from 'react';
import { Navbar } from './components/navbar';
import { AuthModal } from './components/auth-modal';

const basePath = process.env.NODE_ENV === 'production' ? '/visit-website' : '';

const menuItems = [
  {
    title: 'Філадельфія',
    description: 'Лосось, сир філадельфія, огірок, рис, норі',
    price: '299 ₴',
    image: `${basePath}/menu/Philadelphia.png`,
  },
  {
    title: 'Каліфорнія',
    description: 'Креветка, авокадо, ікра тобіко, рис, норі',
    price: '329 ₴',
    image: `${basePath}/menu/California.png`,
  },
  {
    title: 'Спайсі Тунець',
    description: 'Тунець, соус спайсі, огірок, рис, норі',
    price: '319 ₴',
    image: `${basePath}/menu/SpicyTuna.png`,
  },
];

export default function HomePage() {
  const [authOpen, setAuthOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const suggestions = menuItems.filter((item) => {
    if (!search.trim()) return false;

    const firstChar = search[0];
    const isFirstUpperCase = firstChar === firstChar.toUpperCase();

    if (!isFirstUpperCase) return false;

    return item.title.includes(search);
  });

  const handleSuggestionClick = (title: string) => {
    setSearch(title);

    setTimeout(() => {
      const element = document.getElementById(`menu-item-${title}`);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen bg-orange-50 text-gray-900">
      <Navbar
        onOpenAuth={() => setAuthOpen(true)}
        searchValue={search}
        onSearchChange={setSearch}
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionClick}
      />

      <section id="home" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="mb-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
            Сайт-візитка проєкту
          </p>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            LoveSushi — суші та роли з любов&apos;ю
          </h1>

          <p className="mt-5 max-w-2xl text-base text-gray-600">
            Ми готуємо свіжі роли, сети та авторські позиції. Цей сайт-візитка створено для
            презентації нашого проєкту та демонстрації адаптивного інтерфейсу з меню й формою
            авторизації.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Переглянути меню
            </a>

            <button
              onClick={() => setAuthOpen(true)}
              className="rounded-2xl border border-orange-400 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-50"
            >
              Авторизуватися
            </button>

            <a
              className="rounded-2xl border border-orange-400 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-50"
            >
              Контакти
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Про нас</h2>
            <p className="mt-4 text-gray-600">
              LoveSushi — це концепт сучасного суші-бренду з акцентом на зручне онлайн-замовлення,
              якісні інгредієнти та стильний візуальний дизайн.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Чому саме ми</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Адаптивний сучасний інтерфейс</li>
              <li>• Просте меню навігації</li>
              <li>• Зручна форма входу з валідацією</li>
              <li>• Приємний дизайн у стилі бренду</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">Наше меню</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => (
              <article
                key={item.title}
                id={`menu-item-${item.title}`}
                className="rounded-2xl border border-orange-100 p-5"
              >
                <div className="mb-4 overflow-hidden rounded-2xl bg-orange-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 w-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                <p className="mt-4 text-lg font-bold text-orange-600">{item.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-6xl px-4 py-8 pb-16">
        <div className="rounded-3xl bg-gray-900 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">Контакти</h2>
          <div className="mt-5 grid gap-3 text-sm text-gray-200 md:grid-cols-2">
            <p>📍 м. Миколаїв, вул. Центральна, 12</p>
            <p>📞 +38 (098) 111-22-33</p>
            <p>
              ✉️{' '}
              <a
                href="mailto:hello@lovesushi.ua"
                className="text-white underline transition hover:text-orange-300"
              >
                hello@lovesushi.ua
              </a>
            </p>
            <p>🕒 Щодня: 10:00–22:00</p>
          </div>
        </div>
      </section>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </main>
  );
}