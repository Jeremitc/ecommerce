'use client';

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Carrusel from '@/app/components/Carrusel';
import ContentDashboard from '@/app/components/ContentDashboard';
import Footer from '@/app/components/Footer';
import { useTheme } from '@/app/context/ThemeContext';
import '@/app/globals.css';

export default function DashboardPage() {
  const { theme } = useTheme();

  // Apply theme-based styles, with theme-red only for red-global
  const pageClasses = theme === 'dark'
    ? 'dark bg-black text-neutral-100'
    : 'bg-neutral-100 text-black';

  // Define los slides para el carrusel principal
  const mainCarouselSlides = [
    { src: '/img/Carrusel-Imagen2.webp', alt: 'Promoción Especial Refrigeradoras' },
    { src: '/img/Carrusel-Imagen1.webp', alt: 'Ofertas en Línea Blanca' },
  ];

  return (
    <div className={`flex flex-col min-h-screen font-sans transition-colors duration-300 ${pageClasses}`}>
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <h1 className="pt-20 text-center text-3xl font-bold">Dashboard</h1>
        <section>
          <Carrusel slides={mainCarouselSlides} height="h-[300px] md:h-[450px]"/>
        </section>
        <section>
          <ContentDashboard />
        </section>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}