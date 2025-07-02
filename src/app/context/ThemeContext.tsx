// src/context/ThemeContext.tsx
'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// 1. Define los tipos de tema (solo light y dark)
export type Theme = 'light' | 'dark';

// 2. Define la forma del valor del contexto
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleLightDark: () => void;
}

// 3. Crea el Contexto con valor inicial 'light'
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  toggleLightDark: () => {},
});

// 4. Crea el Componente Proveedor (ThemeProvider)
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light');
  const [isMounted, setIsMounted] = useState(false);

  // Efecto para leer tema inicial (localStorage/preferencia)
  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'light' || storedTheme === 'dark') {
      setThemeState(storedTheme);
    } else {
      setThemeState(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Efecto para aplicar cambios (localStorage/clase <html>)
  useEffect(() => {
    if (!isMounted) return;

    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme, isMounted]);

  // Función para actualizar directamente
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  // Lógica para cambiar entre light/dark
  const toggleLightDark = () => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const contextValue: ThemeContextType = {
    theme,
    setTheme,
    toggleLightDark,
  };

  if (!isMounted) {
    return null; // Evita render en SSR antes de determinar tema
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// 5. Hook personalizado
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};