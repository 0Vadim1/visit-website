'use client';

import React from 'react';

const basePath = process.env.NODE_ENV === 'production' ? '/visit-website' : '';

interface SearchItem {
  title: string;
  price: string;
  image: string;
}

interface NavbarProps {
  onOpenAuth: () => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
  suggestions: SearchItem[];
  onSuggestionClick: (title: string) => void;
}

export function Navbar({
  onOpenAuth,
  searchValue,
  onSearchChange,
  suggestions,
  onSuggestionClick,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={`${basePath}/logo.png`}
            alt="LoveSushi logo"
            className="h-11 w-11 rounded-md object-cover"
          />
          <div>
            <p className="text-lg font-bold text-orange-600">LoveSushi</p>
            <p className="text-xs text-gray-500">Смачний суші-бар</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#home" className="text-sm font-medium text-gray-700 transition hover:text-orange-500">
            Головна
          </a>
          <a href="#about" className="text-sm font-medium text-gray-700 transition hover:text-orange-500">
            Про нас
          </a>
          <a href="#menu" className="text-sm font-medium text-gray-700 transition hover:text-orange-500">
            Меню
          </a>
          <a href="#contacts" className="text-sm font-medium text-gray-700 transition hover:text-orange-500">
            Контакти
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            <input
              type="text"
              placeholder="Пошук по меню..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-64 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-2 text-sm outline-none transition focus:border-orange-400"
            />

            {suggestions.length > 0 && (
              <div className="absolute left-0 top-full mt-2 w-full overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-lg">
                {suggestions.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => onSuggestionClick(item.title)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-orange-50"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-8 w-12 rounded object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.title}</p>
                      <p className="text-xs text-orange-600">{item.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={onOpenAuth}
            className="rounded-2xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Авторизуватися
          </button>
        </div>

        <button
          type="button"
          className="rounded-xl border border-orange-200 p-2 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-orange-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <a href="#home" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700">
              Головна
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700">
              Про нас
            </a>
            <a href="#menu" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700">
              Меню
            </a>
            <a href="#contacts" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700">
              Контакти
            </a>
          </nav>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Пошук по меню..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full rounded-2xl border border-orange-200 bg-orange-50 px-4 py-2 text-sm outline-none transition focus:border-orange-400"
            />
          </div>

          {suggestions.length > 0 && (
            <div className="mt-2 overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-lg">
              {suggestions.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    onSuggestionClick(item.title);
                    setMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-orange-50"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-8 w-12 rounded object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">{item.title}</p>
                    <p className="text-xs text-orange-600">{item.price}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          <button
            onClick={onOpenAuth}
            className="mt-4 w-full rounded-2xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Авторизуватися
          </button>
        </div>
      )}
    </header>
  );
}