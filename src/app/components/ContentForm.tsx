// components/ContentForm.tsx
'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTheme } from '@/app/context/ThemeContext';

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

  return (
    <div>
      <h1>ContentForm</h1>
    </div>
  );
}