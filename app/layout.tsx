import type { Metadata } from "next";
import "./globals.css";
import { Old_Standard_TT } from 'next/font/google';

const oldStandardTT = Old_Standard_TT({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-old-standard-tt',
});

export const metadata: Metadata = {
  title: "Gustaf Avenue",
  description: "Gustaf Avenue — ресторан, где встречаются скандинавская простота и французская изысканность. Вдохновленные культурным наследием короля Густава III, мы предлагаем уникальное гастрономическое путешествие, объединяя свежесть и натуральность северной кухни с утонченными вкусами Франции.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${oldStandardTT.className} w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
