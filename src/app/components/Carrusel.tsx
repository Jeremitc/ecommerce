// src/app/components/Carrusel.tsx
'use client'; // Necesario por useState y event handlers

import React, { useState } from 'react';
import Image from 'next/image'; // Usar Next.js Image para optimización

interface Slide {
  src: string;
  alt: string;
}

interface CarruselProps {
  slides: Slide[];
  height?: string; // Prop opcional para la altura (ej: 'h-[450px]')
}

const Carrusel: React.FC<CarruselProps> = ({ slides = [], height = 'h-[450px]' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  // --- Lógica adaptada de carrusel.js ---
  const moverCarrusel = (direction: number) => {
    let newIndex = currentIndex + direction;

    // Corregir el índice (Lógica original sin bucle)
    if (newIndex < 0) {
      newIndex = 0; // No deja ir antes del primero
    }
    if (newIndex >= totalSlides) {
      newIndex = totalSlides - 1; // No deja pasar del último
    }

    setCurrentIndex(newIndex);
  };

  // Manejar caso de array de slides vacío
  if (totalSlides === 0) {
    return <div className={`relative w-full ${height} bg-gray-200 flex items-center justify-center text-gray-500`}>No hay imágenes para mostrar</div>;
  }

  // --- Estructura y Estilos adaptados de index.html y contenido.css (con Tailwind) ---
  return (
    <div className={`carrusel-container relative w-full ${height} overflow-hidden bg-white my-4`}>
      {/* Contenedor interno del carrusel */}
      <div className="carrusel-inner h-full relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carrusel-bloque absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none' // Oculta y deshabilita interacción en bloques no activos
            }`}
            // Nota: Usamos opacidad para la transición fade
          >
            {/* Contenido del bloque - Asumiendo solo una imagen */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Usando el componente Image de Next.js */}
              <Image
                src={slide.src}
                alt={slide.alt}
                layout="fill" // Hace que la imagen llene el div padre
                objectFit="cover" // Equivalente a object-fit: cover
                className="rounded-lg" // Opcional: esquinas redondeadas
                priority={index === 0} // Prioriza la carga de la primera imagen
              />
            </div>
          </div>
        ))}
      </div>

      {/* Botones de Navegación */}
      {totalSlides > 1 && ( // Solo mostrar botones si hay más de un slide
        <>
          <button
            className="carrusel-boton prev absolute top-1/2 left-2.5 transform -translate-y-1/2 bg-black/50 text-white border-none p-2.5 cursor-pointer z-20 rounded-full hover:bg-black/75 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={() => moverCarrusel(-1)}
            aria-label="Slide Anterior"
            disabled={currentIndex === 0} // Deshabilitado en el primer slide
          >
            ❮ {/* Flecha izquierda */}
          </button>
          <button
            className="carrusel-boton next absolute top-1/2 right-2.5 transform -translate-y-1/2 bg-black/50 text-white border-none p-2.5 cursor-pointer z-20 rounded-full hover:bg-black/75 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={() => moverCarrusel(1)}
            aria-label="Siguiente Slide"
            disabled={currentIndex === totalSlides - 1} // Deshabilitado en el último slide
          >
            ❯ {/* Flecha derecha */}
          </button>
        </>
      )}
    </div>
  );
};

export default Carrusel;