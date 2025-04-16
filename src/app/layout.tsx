// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Mantenemos tu importación original
import "@/app/globals.css";
import { ThemeProvider } from "@/app/context/ThemeContext"; // Importa el proveedor (tu ruta)

// Mantenemos tu configuración original de las fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Mantenemos tu metadata original
export const metadata: Metadata = {
  title: "InkaTecPeru",
  description: "App de ventas de electronicos",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Mantenemos lang="en" y añadimos suppressHydrationWarning (recomendado para temas)
    <html lang="en" suppressHydrationWarning>
      {/* Mantenemos tu className original */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ThemeProvider> {/* Proveedor en Context ThemeContext sección de tema aquí */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}