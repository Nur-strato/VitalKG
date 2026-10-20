import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VitalKG — Карта доступности Бишкека',
  description: 'Безбарьерная навигация для маломобильных граждан',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="ru">
      <body className="bg-slate-950 text-slate-100 antialiased">
      {children}
      </body>
      </html>
  );
}