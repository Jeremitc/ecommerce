'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/app/context/ThemeContext';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// --- PANEL DE CONTROL DE COLORES Y DATOS ---
const colorConfig = {
  dark: {
    bg: 'bg-black',
    textColor: 'text-neutral-400',
    headingGradient: 'bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent',
    linkColor: 'text-neutral-400',
    linkHover: 'hover:text-white',
    borderColor: 'border-neutral-800',
    iconColor: 'text-neutral-400',
    iconHover: 'hover:text-white',
    dividerColor: 'border-neutral-700',
  },
  light: {
    bg: 'bg-white',
    textColor: 'text-neutral-500',
    headingGradient: 'bg-gradient-to-br from-black to-neutral-600 bg-clip-text text-transparent',
    linkColor: 'text-neutral-500',
    linkHover: 'hover:text-black',
    borderColor: 'border-neutral-200',
    iconColor: 'text-neutral-500',
    iconHover: 'hover:text-black',
    dividerColor: 'border-neutral-300',
  },
};

// --- CONTENIDO DEL FOOTER ---
const companyInfo = {
  name: 'InkaTec',
  suffix: 'Perú',
  description: 'Llevando la mejor tecnología a tu hogar y oficina con calidad y confianza garantizada.',
};

const navLinks = [
  { label: 'Productos', href: '#productos' },
  { label: 'Ofertas', href: '#ofertas' },
  { label: 'Nosotros', href: '/about' },
  { label: 'Contacto', href: '/contacto' },
];

const contactInfo = [
  { icon: <Mail size={18} aria-hidden="true" />, text: 'ventas@inkatecperu.com', href: 'mailto:ventas@inkatecperu.com', label: 'Email us' },
  { icon: <Phone size={18} aria-hidden="true" />, text: '+51 999 888 777', href: 'tel:+51999888777', label: 'Call us' },
  { icon: <MapPin size={18} aria-hidden="true" />, text: 'Av. Perú 1234, Lima, Perú', href: '#', label: 'Our location' },
];

const socialLinks = [
  { label: 'LinkedIn', icon: <Linkedin size={20} aria-hidden="true" />, href: 'https://linkedin.com' },
  { label: 'Facebook', icon: <Facebook size={20} aria-hidden="true" />, href: 'https://facebook.com' },
  { label: 'Twitter', icon: <Twitter size={20} aria-hidden="true" />, href: 'https://twitter.com' },
  { label: 'Instagram', icon: <Instagram size={20} aria-hidden="true" />, href: 'https://instagram.com' },
];

const legalLinks = [
  { label: 'Términos y Condiciones', href: '/terms' },
  { label: 'Política de Privacidad', href: '/privacy' },
];

// --- ANIMACIÓN ---
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

// --- SUBCOMPONENTE MEMOIZADO ---
interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
  custom: number;
  colors: typeof colorConfig.dark;
  hasDivider?: boolean;
}

const FooterColumn: React.FC<FooterColumnProps> = memo(({ title, children, custom, colors, hasDivider = false }) => {
  return (
    <motion.div
      className="text-center sm:text-left relative pb-6 sm:pb-0"
      custom={custom}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3
        className={`text-base font-bold mb-4 tracking-wide ${colors.headingGradient} relative inline-block group`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        {title}
        <span className={`absolute bottom-0 left-0 w-full h-0.5 ${colors.dividerColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
      </motion.h3>
      {children}
      {/* Dividers: Horizontal on mobile, vertical on large screens */}
      {hasDivider && (
        <>
          <div className={`lg:hidden w-full h-px ${colors.dividerColor} mt-6`} />
          <div className={`hidden lg:block absolute -right-4 top-0 h-full w-px ${colors.dividerColor}`} />
        </>
      )}
    </motion.div>
  );
});
FooterColumn.displayName = "FooterColumn";

// --- COMPONENTE FOOTER PRINCIPAL ---
const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isPageInDarkMode = theme === 'dark';
  const colors = isPageInDarkMode ? colorConfig.light : colorConfig.dark;

  return (
    <footer
      className={`w-full ${colors.bg} ${colors.textColor}`}
      id="footer"
      role="contentinfo"
      aria-label="Footer"
      itemScope
      itemType="http://schema.org/Organization"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 lg:py-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-x-8">
            {/* Columna 1: Información de la empresa */}
            <motion.div
              className="sm:col-span-2 lg:col-span-1 text-center sm:text-left relative pb-6 sm:pb-0"
              custom={0}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link href="/" className="inline-flex items-center mb-4 space-x-2 group" itemProp="url">
                <motion.span
                  className={`text-lg font-bold ${colors.headingGradient} relative inline-block`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  itemProp="name"
                >
                  {companyInfo.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${colors.dividerColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </motion.span>
                <span className="text-red-500 font-bold">{companyInfo.suffix}</span>
              </Link>
              <p className="text-sm leading-relaxed max-w-xs mx-auto sm:mx-0" itemProp="description">
                {companyInfo.description}
              </p>
              <div className={`lg:hidden w-full h-px ${colors.dividerColor} mt-6`} />
              <div className={`hidden lg:block absolute -right-4 top-0 h-full w-px ${colors.dividerColor}`} />
            </motion.div>

            {/* Columna 2: Navegación */}
            <FooterColumn title="Navegación" custom={1} colors={colors} hasDivider>
              <ul className="space-y-2" role="list">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`text-[15px] ${colors.linkColor} ${colors.linkHover} transition-colors duration-200 hover:underline`}
                      itemProp="url"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            {/* Columna 3: Contacto */}
            <FooterColumn title="Contacto" custom={2} colors={colors} hasDivider>
              <ul className="text-[15px] space-y-3" role="list" itemProp="contactPoint" itemScope itemType="http://schema.org/ContactPoint">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 justify-center sm:justify-start">
                    <span className={`mt-0.5 ${colors.iconColor}`}>{item.icon}</span>
                    <a
                      href={item.href}
                      className={`${colors.linkColor} ${colors.linkHover} transition-colors duration-200 hover:underline`}
                      aria-label={item.label}
                      itemProp={item.href.startsWith('mailto:') ? 'email' : item.href.startsWith('tel:') ? 'telephone' : 'url'}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            {/* Columna 4: Redes Sociales */}
            <FooterColumn title="Síguenos" custom={3} colors={colors}>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.label}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className={`${colors.iconColor} ${colors.iconHover} transition-colors duration-200`}
                    itemProp="sameAs"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </FooterColumn>
          </div>
        </motion.div>

        {/* Barra inferior de copyright con grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className={`py-6 border-t ${colors.borderColor} grid grid-cols-1 sm:grid-cols-2 gap-4 items-center`}
        >
          <p className="text-xs text-center sm:text-left" itemProp="copyrightNotice">
            © {new Date().getFullYear()} {companyInfo.name}{companyInfo.suffix}. Todos los derechos reservados.
          </p>
          <div className="grid grid-cols-2 gap-4 justify-center sm:justify-end text-center sm:text-right">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`${colors.linkColor} ${colors.linkHover} transition-colors duration-200 hover:underline text-xs`}
                itemProp="url"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;