'use client';

import React from 'react';
import Image from 'next/image';

interface SearchItem {
  title: string;
  price: string;
  image: string;
}

interface Props {
  onOpenAuth: () => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
  suggestions: SearchItem[];
  onSuggestionClick: (title: string) => void;
}

const navItems = [
  { label: 'Головна', href: '#home' },
  { label: 'Про нас', href: '#about' },
  { label: 'Меню', href: '#menu' },
  { label: 'Контакти', href: '#contacts' },
];

export function Navbar({
  onOpenAuth,
  searchValue,
  onSearchChange,
  suggestions,
  onSuggestionClick,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [isSearchFocused, setIsSearchFocused] = React.useState(false);

  const showSuggestions = isSearchFocused && searchValue.trim().length > 0;

  return (
    <header className="sticky top-0 z-50 border-b border-orange-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="LoveSushi logo"
            width={44}
            height={44}
            className="rounded-md object-cover"
          />

          <div>
            <h1 className="text-xl font-black uppercase text-gray-900">LoveSushi</h1>
            <p className="text-xs text-gray-500">Смачний суші-бар</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="relative hidden flex-1 justify-center md:flex">
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Пошук..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => {
                setTimeout(() => setIsSearchFocused(false), 200);
              }}
              className="w-full rounded-2xl border border-gray-200 px-4 py-2 outline-none transition focus:border-orange-400"
            />

            {showSuggestions && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-lg">
                {suggestions.length > 0 ? (
                  suggestions.map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => onSuggestionClick(item.title)}
                      className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-orange-50"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={48}
                        height={32}
                        className="h-8 w-12 rounded object-cover"
                      />
                      <span className="flex-1 text-sm font-medium text-gray-800">{item.title}</span>
                      <span className="text-sm font-semibold text-gray-500">{item.price}</span>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    Нічого не знайдено.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex">
          <button
            onClick={onOpenAuth}
            className="rounded-xl border border-orange-400 px-4 py-2 text-sm font-semibold text-orange-500 transition hover:bg-orange-50"
          >
            Авторизуватися
          </button>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-xl border border-orange-300 px-3 py-2 text-sm md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-orange-100 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            <input
              type="text"
              placeholder="Пошук..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 px-4 py-2 outline-none transition focus:border-orange-400"
            />

            {searchValue.trim() && (
              <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm">
                {suggestions.length > 0 ? (
                  suggestions.map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => {
                        onSuggestionClick(item.title);
                        setOpen(false);
                      }}
                      className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-orange-50"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={48}
                        height={32}
                        className="h-8 w-12 rounded object-cover"
                      />
                      <span className="flex-1 text-sm font-medium text-gray-800">{item.title}</span>
                      <span className="text-sm font-semibold text-gray-500">{item.price}</span>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    Нічого не знайдено
                  </div>
                )}
              </div>
            )}

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700"
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                onOpenAuth();
              }}
              className="mt-2 rounded-xl border border-orange-400 px-4 py-2 text-sm font-semibold text-orange-500"
            >
              Авторизуватися
            </button>
          </div>
        </div>
      )}
    </header>
  );
}