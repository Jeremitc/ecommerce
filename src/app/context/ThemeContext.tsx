// src/context/ThemeContext.tsx
'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// 1. Define los NUEVOS tipos de tema
export type Theme = 'light' | 'dark' | 'red-navbar' | 'red-global';

// 2. Define la forma del valor del contexto (sin cambios estructurales aquí)
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleLightDark: () => void;
  toggleRedMode: () => void;
}

// 3. Crea el Contexto con valor inicial 'light'
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  toggleLightDark: () => {},
  toggleRedMode: () => {},
});

// 4. Crea el Componente Proveedor (ThemeProvider)
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Usa el nuevo tipo Theme para el estado
  const [theme, setThemeState] = useState<Theme>('light');
  const [isMounted, setIsMounted] = useState(false);

  // Efecto para leer tema inicial (localStorage/preferencia) - ¡Importante manejar los nuevos estados!
  useEffect(() => {
    setIsMounted(true);
    // Lee el valor guardado, que puede ser uno de los 4 tipos
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme && ['light', 'dark', 'red-navbar', 'red-global'].includes(storedTheme)) {
        setThemeState(storedTheme);
    } else {
      // Si no hay nada guardado o es inválido, usa preferencia o light
      setThemeState(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Efecto para aplicar cambios (localStorage/clase <html>) - ¡Modificado!
  useEffect(() => {
    if (!isMounted) return;

    // Limpia clases anteriores
    document.documentElement.classList.remove('dark', 'theme-red');
    localStorage.removeItem('theme'); // Limpia antes de setear el nuevo

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'red-global') { // <--- Solo aplica clase global aquí
      document.documentElement.classList.add('theme-red');
      // Opcional: añadir 'dark' si red-global se basa en dark
      // document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'red-global');
    } else if (theme === 'red-navbar') { // <--- No aplica clase global
      localStorage.setItem('theme', 'red-navbar');
    } else {
      // Es 'light'
      localStorage.setItem('theme', 'light');
    }
  }, [theme, isMounted]);

  // Función para actualizar directamente (puede ser útil)
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  // Lógica para cambiar entre light/dark (¡Debe ignorar estados rojos!)
  const toggleLightDark = () => {
    // Solo cambia si es estrictamente light o dark
    if (theme === 'light' || theme === 'dark') {
      setThemeState(theme === 'light' ? 'dark' : 'light');
    }
    // Si está en 'red-navbar' o 'red-global', este botón no hace nada
  };

  // Lógica de 3 clics para el modo rojo - ¡Modificada!
  const toggleRedMode = () => {
    if (theme === 'light' || theme === 'dark') {
      // Click 1 (desde light/dark): -> red-navbar
      setThemeState('red-navbar');
    } else if (theme === 'red-navbar') {
      // Click 2 (desde red-navbar): -> red-global
      setThemeState('red-global');
    } else if (theme === 'red-global') {
      // Click 3 (desde red-global): -> light
      setThemeState('light');
    }
  };

  // Valor que se pasará a los consumidores
  const contextValue: ThemeContextType = {
    theme,
    setTheme,
    toggleLightDark,
    toggleRedMode,
  };

  if (!isMounted) {
    return null; // Evita renderizado SSR antes de determinar tema
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// 5. Hook personalizado (sin cambios)
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};