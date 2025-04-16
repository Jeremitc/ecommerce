// src/app/dashboard/page.tsx (o donde esté)
'use client';
import React from 'react';
import ContentDashboard from "@/app/components/ContentDashboard";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Carrusel from "@/app/components/Carrusel";
import { useTheme } from '@/app/context/ThemeContext'; // Corregido para usar @/
import "@/app/globals.css";

export default function DashboardPage() {
    const { theme } = useTheme();
    // MODIFICADO: Aplica estilos rojos solo para 'red-global'
    const pageClasses = theme === 'dark'
        ? 'dark bg-black text-neutral-100'
        : theme === 'red-global' // <--- Solo aquí
        ? 'theme-red bg-red-950 text-neutral-100'
        : 'bg-neutral-50 text-neutral-900'; // light y red-navbar usan este
    return (
        <div className={`min-h-screen font-sans transition-colors duration-300 ${pageClasses}`}>
            <section>
                <Navbar />
            </section>
            <h1 className="pt-20 text-center text-3xl font-bold">Dashboard</h1>
            <Carrusel />
            <section>
                <ContentDashboard />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}