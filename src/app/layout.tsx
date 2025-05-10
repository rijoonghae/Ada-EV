import type { Metadata } from "next";
//import { Cal } from "next/font/google";
import "./globals.css";


import './globals.css';

export const metadata = {
  title: 'Ada-EV',
  description: 'Aplikasi Rekomendasi Mobil Listrik',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cal+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Cal Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

