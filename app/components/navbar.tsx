'use client';

import React from 'react';
import Image from 'next/image';

interface Props {
  onOpenAuth: () => void;
}

const navItems = [
  { label: 'Головна', href: '#home' },
  { label: 'Про нас', href: '#about' },
  { label: 'Меню', href: '#menu' },
  { label: 'Контакти', href: '#contacts' },
];

export function Navbar({ onOpenAuth }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
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