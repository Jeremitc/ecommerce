// components/ContentForm.tsx
'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTheme } from '@/app/context/ThemeContext';
import { CgKey } from 'react-icons/cg';

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export default function ContentForm() {
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try{
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Error en el envío del formulario');
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const inputClasses = theme === 'dark'
    ? 'bg-black border-neutral-700 text-neutral-100 focus:border-red-500'
    : theme === 'red-global'
    ? 'bg-red-900 border-red-700 text-neutral-100 focus:border-red-300'
    : 'bg-white border-neutral-300 text-neutral-900 focus:border-red-600';

  const labelClasses = theme === 'dark' || theme === 'red-global'
    ? 'text-neutral-300'
    : 'text-neutral-600';

  return (
    <div>
      <h1>ContentForm</h1>
    </div>
  );
}