// src/app/pages/form/page.tsx (o donde esté)
'use client';
import React from 'react';
import ContentForm from "@/app/components/ContentForm"; // Revisa si es correcto
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useTheme } from '@/app/context/ThemeContext'; // Corregido para usar @/
import "@/app/globals.css";

export default function FormPage() {
    const { theme } = useTheme();
     //  Aplica estilos rojos solo para 'red-global'
    const pageClasses = theme === 'dark'
        ? 'dark bg-black text-neutral-100'
        : theme === 'red-global' // <--- tema global de rojo
        ? 'theme-red bg-red-950 text-neutral-100'
        : 'bg-neutral-50 text-neutral-900'; // light y red-navbar usan este

    return (
        <div className={`min-h-screen font-sans transition-colors duration-300 ${pageClasses}`}>
            <section>
                <Navbar />
            </section>
            <section className="pt-20">
                <h1 className="text-center text-3xl font-bold mb-8">Formulario</h1>
                <ContentForm />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}