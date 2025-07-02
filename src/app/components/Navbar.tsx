'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/app/context/ThemeContext';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Productos', href: '/#products' },
  { label: 'Ofertas', href: '/#ofertas' },
  { label: 'Contactos', href: '/pages/form' },
  { label: 'Information', href: '#footer' },
];

// --- Variables de Colores ---
const lightThemeTextColor = 'text-black';
const lightThemeLogoHover = 'hover:text-red-800';
const lightThemeNavLinkColor = 'text-neutral-600';
const lightThemeNavLinkHover = 'hover:text-red-700';
const lightThemeBorderColor = 'border-red-300';
const lightThemeSpanBg = 'bg-red-600';
const lightThemeIconShadow = 'rgba(185, 28, 28, 0.3)';
const lightThemeNavbarBg = 'from-white/95 via-neutral-50/90 to-white/95';
const lightThemeMobileMenuBg = 'bg-white';
const lightThemeToggleText = 'text-neutral-700';
const lightThemeToggleHover = 'hover:text-red-700';

const darkThemeTextColor = 'text-white';
const darkThemeLogoHover = 'hover:text-red-300';
const darkThemeNavLinkColor = 'text-neutral-300';
const darkThemeNavLinkHover = 'hover:text-red-400';
const darkThemeBorderColor = 'border-red-700';
const darkThemeSpanBg = 'bg-red-500';
const darkThemeIconShadow = 'rgba(248, 113, 113, 0.4)';
const darkThemeNavbarBg = 'from-neutral-950/90 via-neutral-900/85 to-neutral-950/90';
const darkThemeMobileMenuBg = 'bg-neutral-900';
const darkThemeToggleText = 'text-neutral-400';
const darkThemeToggleHover = 'hover:text-red-400';

const Navbar: React.FC = () => {
  const { theme, toggleLightDark } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // --- Lógica de selección de colores ---
  const logoColor = theme === 'dark' ? darkThemeTextColor : lightThemeTextColor;
  const logoHoverColor = theme === 'dark' ? darkThemeLogoHover : lightThemeLogoHover;
  const navLinkColor = theme === 'dark' ? darkThemeNavLinkColor : lightThemeNavLinkColor;
  const navLinkHoverColor = theme === 'dark' ? darkThemeNavLinkHover : lightThemeNavLinkHover;
  const borderColor = theme === 'dark' ? darkThemeBorderColor : lightThemeBorderColor;
  const spanBgColor = theme === 'dark' ? darkThemeSpanBg : lightThemeSpanBg;
  const iconShadowColor = theme === 'dark' ? darkThemeIconShadow : lightThemeIconShadow;
  const toggleButtonRing = 'focus:ring-red-500';
  const toggleLDButtonText = theme === 'dark' ? darkThemeToggleText : lightThemeToggleText;
  const toggleLDButtonHover = theme === 'dark' ? darkThemeToggleHover : lightThemeToggleHover;
  const navbarBgGradient = theme === 'dark' ? darkThemeNavbarBg : lightThemeNavbarBg;
  const mobileMenuBg = theme === 'dark' ? darkThemeMobileMenuBg : lightThemeMobileMenuBg;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 h-16
                    transition-shadow duration-300 ease-out
                    ${theme === 'dark' ? 'shadow-lg shadow-red-900/20' : 'shadow-md shadow-red-500/30'}
                    ${borderColor} border-b`}
      >
        {/* Fondo y Blur */}
        <div className={`absolute inset-0 z-0 backdrop-blur-lg bg-gradient-to-b ${navbarBgGradient}`} aria-hidden="true"></div>

        {/* Contenedor Principal */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo con Icono */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              animate={{
                boxShadow: [
                  `0 0 0px 0px rgba(220, 38, 38, 0)`,
                  `0 0 15px 3px ${iconShadowColor}`,
                  `0 0 0px 0px rgba(220, 38, 38, 0)`,
                ],
                rotateY: [0, 360],
              }}
              transition={{
                boxShadow: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
                rotateY: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.5 },
              }}
              className="rounded-full"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Image src="/favicon.ico" alt="InkaTecPeru Logo Icon" width={32} height={32} className="h-8 w-8 object-contain" />
            </motion.div>
            <span className={`text-xl font-bold transition-colors duration-200 ${logoColor} ${logoHoverColor}`}>
              InkaTecPeru
            </span>
          </Link>

          {/* Contenedor Botones Derecha (Desktop) */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Links Desktop */}
            <div className="flex gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 group ${navLinkColor} ${navLinkHoverColor}`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 ${spanBgColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center`}
                  ></span>
                </Link>
              ))}
            </div>
            {/* Botón Toggle Light/Dark */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: [0, 15, -10, 0] }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLightDark}
              className={`p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 ${toggleButtonRing} ${toggleLDButtonText} ${toggleLDButtonHover} ${theme === 'dark' ? 'focus:ring-offset-black' : 'focus:ring-offset-white'}`}
              aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
            >
              {theme === 'light' ? <MdDarkMode className="h-5 w-5" /> : <MdLightMode className="h-5 w-5" />}
            </motion.button>
          </div>

          {/* Contenedor Botones Derecha (Móvil) */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Botón Toggle Light/Dark (móvil) */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLightDark}
              className={`p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 ${toggleButtonRing} ${toggleLDButtonText} ${toggleLDButtonHover} ${theme === 'dark' ? 'focus:ring-offset-black' : 'focus:ring-offset-white'}`}
              aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
            >
              {theme === 'light' ? <MdDarkMode className="h-5 w-5" /> : <MdLightMode className="h-5 w-5" />}
            </motion.button>
            {/* Botón Hamburguesa */}
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 ${toggleButtonRing} ${theme === 'dark' ? 'focus:ring-offset-black' : 'focus:ring-offset-white'} ${navLinkColor} ${navLinkHoverColor}`}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* --- Panel Menú Hamburguesa Móvil --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={`sm:hidden fixed inset-x-0 top-16 z-30 shadow-lg ${mobileMenuBg} border-b ${borderColor}`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${navLinkColor} ${navLinkHoverColor} ${theme === 'dark' ? 'hover:bg-neutral-700/50' : 'hover:bg-red-600/10'}`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;