import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LoveSushi | Сайт-візитка',
  description: 'Сайт-візитка проєкту LoveSushi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}