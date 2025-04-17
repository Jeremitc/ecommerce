// components/ContentForm.tsx
'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTheme } from '@/app/context/ThemeContext';
import { CgKey } from 'react-icons/cg';
import { div } from 'framer-motion/client';

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
    <div className="max-w-2xl mx-auto px-4">
      {isSubmitSuccessful ? (
        <div className="p-4 mb-4 text-green-500 border border-green-500 rounded-lg text-center">
          ¡Mensaje enviado con éxito!
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div>
            <label className={`block text-sm font-medium ${labelClasses} mb-2`}>
              Nombre
            </label>
            <input
              {...register('name', { required: 'Este campo es obligatorio' })}
              className={`w-full px-4 py-2 border rounded-lg ${inputClasses}`}
            />
            {errors.name && (
              <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className={`block text-sm font-medium ${labelClasses} mb-2`}>
              Email
            </label>
            <input
              type='email'
              {...register('email', {
                required: 'Este campo es obligatorio',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido',
                }
              })}
              className={`w-full px-4 py-2 border rounded-lg ${inputClasses}`}
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className={`block text-sm font-medium ${labelClasses} mb-2`}>
              Teléfono
            </label>
            <input
              type='tel'
              {...register('phone')}
              className={`w-full px-4 py-2 border rounded-lg ${inputClasses}`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium ${labelClasses} mb-2`}>
              Mensaje
            </label>
            <textarea
              {...register('message', { required: 'Este campo es obligatorio' })}
              rows={4}
              className={`w-full px-4 py-2 border rounded-lg ${inputClasses}`}
            />
            {errors.message && (
              <p className='text-red-500 text-sm mt-1'>{errors.message.message}</p>
            )}
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg font-medium ${
              theme === 'dark'
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : theme === 'red-global'
                ? 'bg-red-800 hover:bg-red-900 text-white'
                : 'bg-red-500 hover:bg-red-600 text-white'
            } transition-colors duration-200`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      )}
    </div>
  );
}