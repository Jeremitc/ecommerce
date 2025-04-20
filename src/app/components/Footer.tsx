'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/app/context/ThemeContext';

// Reusing color variables from Navbar.tsx for consistency
const lightThemeTextColor = 'text-black';
const lightThemeLinkColor = 'text-neutral-600';
const lightThemeLinkHover = 'hover:text-red-700';
const lightThemeBg = 'bg-white';
const lightThemeHeadingColor = 'text-red-600';

const darkThemeTextColor = 'text-white';
const darkThemeLinkColor = 'text-neutral-300';
const darkThemeLinkHover = 'hover:text-red-400';
const darkThemeBg = 'bg-neutral-900';
const darkThemeHeadingColor = 'text-red-400';

const redThemeTextColor = 'text-white';
const redThemeLinkColor = 'text-neutral-200';
const redThemeLinkHover = 'hover:text-red-400';
const redThemeBg = 'bg-red-950';
const redThemeHeadingColor = 'text-red-300';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  // Determine if red theme is active
  const isRedActive = theme === 'red-navbar' || theme === 'red-global';

  // Select theme-based colors
  const textColor = theme === 'dark' ? darkThemeTextColor : isRedActive ? redThemeTextColor : lightThemeTextColor;
  const linkColor = theme === 'dark' ? darkThemeLinkColor : isRedActive ? redThemeLinkColor : lightThemeLinkColor;
  const linkHoverColor = theme === 'dark' ? darkThemeLinkHover : isRedActive ? redThemeLinkHover : lightThemeLinkHover;
  const bgColor = theme === 'dark' ? darkThemeBg : isRedActive ? redThemeBg : lightThemeBg;
  const headingColor = theme === 'dark' ? darkThemeHeadingColor : isRedActive ? redThemeHeadingColor : lightThemeHeadingColor;

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`w-full py-10 px-4 sm:px-6 lg:px-8 ${bgColor} ${textColor}`}
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Section 1: About the company */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="min-w-[250px]"
        >
          <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>InkaTecPerú</h3>
          <p className="text-sm leading-relaxed">
            Nos especializamos en la venta de artefactos electrónicos y todo tipo de electrodomésticos para el hogar y la oficina. Calidad garantizada y tecnología al alcance de todos.
          </p>
        </motion.div>

        {/* Section 2: Useful links */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="min-w-[250px]"
        >
          <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>Enlaces</h3>
          <ul className="list-none p-0 space-y-2">
            {[
              { label: 'Inicio', href: '#inicio' },
              { label: 'Productos', href: '#productos' },
              { label: 'Ofertas', href: '#ofertas' },
              { label: 'Contacto', href: '#contacto' },
            ].map((item) => (
              <motion.li
                key={item.label}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm ${linkColor} ${linkHoverColor} transition-colors duration-200`}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Section 3: Contact */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="min-w-[250px]"
        >
          <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>Contáctanos</h3>
          <div className="text-sm space-y-2">
            <p>
              <strong>Email:</strong>{' '}
              <motion.a
                href="mailto:ventas@inkatecperu.com"
                className={` ${linkColor} ${linkHoverColor} transition-colors duration-200`}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                ventas@inkatecperu.com
              </motion.a>
            </p>
            <p>
              <strong>Teléfono:</strong> +51 999 888 777
            </p>
            <p>
              <strong>Dirección:</strong> Av. Perú 1234, Lima, Perú
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;