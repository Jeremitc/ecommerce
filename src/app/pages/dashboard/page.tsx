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
    : theme === 'red-global'
    ? 'theme-red bg-red-950 text-neutral-100'
    : 'bg-neutral-50 text-neutral-900';

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
          <Carrusel />
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