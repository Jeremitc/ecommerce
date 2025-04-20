// src/components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdDarkMode, MdLightMode, MdPalette } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/app/context/ThemeContext'; // Importa Theme también

// ... navItems  ...
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Productos', href: '/#products' },
    { label: 'Ofertas', href: '/#ofertas' },
    { label: 'Contactos', href: '/pages/form' },
    { label: 'Information', href: '#footer' },
];

// --- Variables de Colores ---
// ... (todas las variables lightTheme, darkTheme, redTheme) ...
const lightThemeTextColor = 'text-black';
const lightThemeLogoHover = 'hover:text-red-800';
const lightThemeNavLinkColor = 'text-neutral-600';
const lightThemeNavLinkHover = 'hover:text-red-700';
const lightThemeBorderColor = 'border-red-300';
const lightThemeSpanBg = 'bg-red-600';
const lightThemeIconShadow = 'rgba(185, 28, 28, 0.3)'; // Color para boxShadow
const lightThemeNavbarBg = 'from-white/95 via-neutral-50/90 to-white/95';
const lightThemeMobileMenuBg = 'bg-white';
const lightThemeToggleText = 'text-neutral-700';
const lightThemeToggleHover = 'hover:text-red-700';

// Dark Mode
const darkThemeTextColor = 'text-white';
const darkThemeLogoHover = 'hover:text-red-300';
const darkThemeNavLinkColor = 'text-neutral-300';
const darkThemeNavLinkHover = 'hover:text-red-400';
const darkThemeBorderColor = 'border-red-700';
const darkThemeSpanBg = 'bg-red-500';
const darkThemeIconShadow = 'rgba(248, 113, 113, 0.4)'; // Color para boxShadow
const darkThemeNavbarBg = 'from-neutral-950/90 via-neutral-900/85 to-neutral-950/90';
const darkThemeMobileMenuBg = 'bg-neutral-900';
const darkThemeToggleText = 'text-neutral-400';
const darkThemeToggleHover = 'hover:text-red-400';

// Red Mode (Basado en Dark pero con acentos rojos más fuertes)
const redThemeTextColor = 'text-white'; // Mantenemos texto blanco
const redThemeLogoHover = 'hover:text-red-300'; // Hover rojo claro
const redThemeNavLinkColor = 'text-neutral-200'; // Un poco más claro que dark
const redThemeNavLinkHover = 'hover:text-red-400'; // Hover rojo claro
const redThemeBorderColor = 'border-red-500'; // Borde rojo más intenso
const redThemeSpanBg = 'bg-red-500'; // Span rojo
const redThemeIconShadow = 'rgba(248, 113, 113, 0.5)'; // Sombra roja más intensa
const redThemeNavbarBg = 'from-red-950/90 via-red-900/85 to-red-950/90'; // Fondo rojo oscuro
const redThemeMobileMenuBg = 'bg-red-950'; // Fondo menú móvil rojo muy oscuro
const redThemeToggleText = 'text-red-300'; // Iconos toggle rojos
const redThemeToggleHover = 'hover:text-red-200'; // Hover más claro


const Navbar: React.FC = () => {
  const { theme, toggleLightDark, toggleRedMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // --- Determina si algún modo rojo está activo ---
  const isRedActive = theme === 'red-navbar' || theme === 'red-global';

  // --- Lógica de selección de colores MODIFICADA ---
  const logoColor = theme === 'dark' ? darkThemeTextColor : isRedActive ? redThemeTextColor : lightThemeTextColor;
  const logoHoverColor = theme === 'dark' ? darkThemeLogoHover : isRedActive ? redThemeLogoHover : lightThemeLogoHover;
  const navLinkColor = theme === 'dark' ? darkThemeNavLinkColor : isRedActive ? redThemeNavLinkColor : lightThemeNavLinkColor;
  const navLinkHoverColor = theme === 'dark' ? darkThemeNavLinkHover : isRedActive ? redThemeNavLinkHover : lightThemeNavLinkHover;
  const borderColor = theme === 'dark' ? darkThemeBorderColor : isRedActive ? redThemeBorderColor : lightThemeBorderColor;
  const spanBgColor = theme === 'dark' ? darkThemeSpanBg : isRedActive ? redThemeSpanBg : lightThemeSpanBg;
  const iconShadowColor = theme === 'dark' ? darkThemeIconShadow : isRedActive ? redThemeIconShadow : lightThemeIconShadow;
  const toggleButtonRing = 'focus:ring-red-500';
  // Botón Light/Dark usa colores L/D base, no los rojos
  const toggleLDButtonText = theme === 'dark' ? darkThemeToggleText : lightThemeToggleText;
  const toggleLDButtonHover = theme === 'dark' ? darkThemeToggleHover : lightThemeToggleHover;
  // Botón Red usa colores rojos si CUALQUIER rojo está activo
  const toggleRedButtonText = isRedActive ? redThemeToggleText : (theme === 'dark' ? darkThemeToggleText : lightThemeToggleText);
  const toggleRedButtonHover = isRedActive ? redThemeToggleHover : (theme === 'dark' ? darkThemeToggleHover : lightThemeToggleHover);
  // El fondo del Navbar sí cambia si es red-navbar o red-global
  const navbarBgGradient = theme === 'dark' ? darkThemeNavbarBg : isRedActive ? redThemeNavbarBg : lightThemeNavbarBg;
  // El fondo del menú móvil también
  const mobileMenuBg = theme === 'dark' ? darkThemeMobileMenuBg : isRedActive ? redThemeMobileMenuBg : lightThemeMobileMenuBg;

  // Determina el aria-label para el botón rojo
  let redButtonAriaLabel = 'Activar modo rojo (Navbar)';
  if (theme === 'red-navbar') {
    redButtonAriaLabel = 'Activar modo rojo (Global)';
  } else if (theme === 'red-global') {
    redButtonAriaLabel = 'Desactivar modo rojo';
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        // Ajusta la sombra basado en si es rojo activo o no
        className={`fixed top-0 left-0 right-0 z-40 h-16
                    transition-shadow duration-300 ease-out
                    ${isRedActive ? 'shadow-lg shadow-red-500/40' : theme === 'dark' ? 'shadow-lg shadow-red-900/20' : 'shadow-md shadow-red-500/30'}
                    ${borderColor} border-b
                   `}
      >
        {/* Fondo y Blur */}
        <div className={`absolute inset-0 z-0 backdrop-blur-lg bg-gradient-to-b ${navbarBgGradient}`} aria-hidden="true"></div>

        {/* Contenedor Principal */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo con Icono */}
          <Link href="/" className="flex items-center gap-2 group">
             {/* Envoltura del Icono */}
            <motion.div
               animate={{
                 boxShadow: [ `0 0 0px 0px rgba(220, 38, 38, 0)`, `0 0 15px 3px ${iconShadowColor}`, `0 0 0px 0px rgba(220, 38, 38, 0)` ],
                 rotateY: [0, 360],
               }}
               transition={{
                 boxShadow: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
                 rotateY: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.5 }
               }}
               className="rounded-full" style={{ transformStyle: "preserve-3d" }}>
               <Image src="/favicon.ico" alt="InkaTecPeru Logo Icon" width={32} height={32} className="h-8 w-8 object-contain" />
            </motion.div>
            <span className={`text-xl font-bold transition-colors duration-200 ${logoColor} ${logoHoverColor}`}> InkaTecPeru </span>
          </Link>

          {/* Contenedor Botones Derecha (Desktop) */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Links Desktop */}
            <div className="flex gap-1">
              {navItems.map((item) => ( <Link key={item.label} href={item.href} className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 group ${navLinkColor} ${navLinkHoverColor}`}> {item.label} <span className={`absolute bottom-0 left-0 w-full h-0.5 ${spanBgColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center`}></span> </Link> ))}
            </div>
            {/* Botón Toggle Light/Dark */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: !isRedActive ? [0, 15, -10, 0] : 0 }} // Rota solo si no está activo el rojo
              whileTap={{ scale: 0.9 }} onClick={toggleLightDark}
              disabled={isRedActive} // Deshabilitado si CUALQUIER rojo está activo
              className={`p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 ${toggleButtonRing} ${toggleLDButtonText} ${!isRedActive ? toggleLDButtonHover : 'opacity-50 cursor-not-allowed'} ${theme === 'dark' ? 'focus:ring-offset-black' : 'focus:ring-offset-white'}`}
              aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'} >
              {theme === 'light' ? <MdDarkMode className="h-5 w-5" /> : <MdLightMode className="h-5 w-5" />}
            </motion.button>
            {/* Botón Toggle Red Mode */}
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={toggleRedMode}
              className={`p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 ${toggleButtonRing} ${toggleRedButtonText} ${toggleRedButtonHover} ${isRedActive ? 'ring-2 ring-red-500 ring-offset-2' : ''} ${theme === 'dark' ? 'focus:ring-offset-black' : isRedActive ? 'ring-offset-red-950' : 'focus:ring-offset-white'}`} // Ajusta offset para red
              aria-label={redButtonAriaLabel} >
               <MdPalette className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Contenedor Botones Derecha (Móvil) */}
           <div className="flex sm:hidden items-center gap-2">
             {/* Botón Toggle Light/Dark (móvil) */}
             <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
               onClick={toggleLightDark} disabled={isRedActive}
               className={`p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 ${toggleButtonRing} ${toggleLDButtonText} ${!isRedActive ? toggleLDButtonHover : 'opacity-50 cursor-not-allowed'} ${theme === 'dark' ? 'focus:ring-offset-black' : 'focus:ring-offset-white'}`}
               aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'} >
               {theme === 'light' ? <MdDarkMode className="h-5 w-5" /> : <MdLightMode className="h-5 w-5" />}
             </motion.button>
            {/* Botón Toggle Red Mode (móvil) */}
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={toggleRedMode}
              className={`p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 ${toggleButtonRing} ${toggleRedButtonText} ${toggleRedButtonHover} ${isRedActive ? 'ring-2 ring-red-500 ring-offset-2' : ''} ${theme === 'dark' ? 'focus:ring-offset-black' : isRedActive ? 'ring-offset-red-950' : 'focus:ring-offset-white'}`}
              aria-label={redButtonAriaLabel} >
               <MdPalette className="h-5 w-5" />
            </motion.button>
             {/* Botón Hamburguesa */}
            <motion.button onClick={toggleMenu} whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 ${toggleButtonRing} ${theme === 'dark' ? 'focus:ring-offset-black' : isRedActive ? 'ring-offset-red-950' : 'focus:ring-offset-white'} ${navLinkColor} ${navLinkHoverColor}`}
              aria-label="Abrir menú" >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* --- Panel Menú Hamburguesa Móvil --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={`sm:hidden fixed inset-x-0 top-16 z-30 shadow-lg ${mobileMenuBg} border-b ${borderColor}`} >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navItems.map((item) => ( <Link key={item.label} href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${navLinkColor} ${navLinkHoverColor} ${isRedActive ? 'hover:bg-red-400/10' : theme === 'dark' ? 'hover:bg-neutral-700/50' : 'hover:bg-red-600/10'}`} // Ajusta hover bg
                  onClick={toggleMenu} > {item.label} </Link> ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;