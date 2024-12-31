import { PWAProvider } from "@/hooks/usePWA";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "JC Atacados",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable}`}
    >
      <body className={` antialiased dark:bg-zinc-900 bg-zinc-50`}>
        <PWAProvider>{children}</PWAProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
