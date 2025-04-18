// src/app/dashboard/page.tsx
'use client';
import React from 'react';
import ContentDashboard from "@/app/components/ContentDashboard"; // Importa el contenido principal
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Carrusel from "@/app/components/Carrusel"; // Importa el componente Carrusel
import { useTheme } from '@/app/context/ThemeContext'; // Asegúrate que la ruta es correcta
import "@/app/globals.css"; // Importa estilos globales (incluyendo Tailwind)

export default function DashboardPage() {
    const { theme } = useTheme();

    // Define las clases de la página basadas en el tema
    const pageClasses = theme === 'dark'
        ? 'dark bg-black text-neutral-100'
        : theme === 'red-global'
        ? 'theme-red bg-red-950 text-neutral-100'
        : 'bg-neutral-50 text-neutral-900'; // light y red-navbar usan este por defecto

    // Define los slides para el carrusel principal
    const mainCarouselSlides = [
        { src: '/img/Carrusel-Imagen2.webp', alt: 'Promoción Especial Refrigeradoras' }, // Asegúrate que la ruta sea correcta desde /public
        { src: '/img/Carrusel-Imagen1.webp', alt: 'Ofertas en Línea Blanca' },          // Asegúrate que la ruta sea correcta desde /public
    ];

    return (
        // Aplica las clases de tema al contenedor principal
        <div className={`min-h-screen font-sans transition-colors duration-300 ${pageClasses}`}>
            <section>
                {/* Renderiza la barra de navegación */}
                <Navbar />
            </section>

            {/* Título de la página (con padding top para compensar el navbar fijo si lo hubiera) */}
            <h1 className="pt-20 text-center text-3xl font-bold mb-6">Dashboard Principal</h1>

            {/* Renderiza el componente Carrusel, pasando los slides como props */}
            <Carrusel slides={mainCarouselSlides} height="h-[300px] md:h-[450px]" /> {/* Altura ajustable */}

            <main> {/* Usamos <main> para el contenido principal por semántica */}
                {/* Renderiza el contenido principal de la página */}
                <ContentDashboard />
            </main>

            <section>
                {/* Renderiza el pie de página */}
                <Footer />
            </section>
        </div>
    );
}