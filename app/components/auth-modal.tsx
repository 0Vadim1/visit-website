'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  email: z.string().email('Введіть коректний email'),
  password: z.string().min(6, 'Пароль має містити мінімум 6 символів'),
});

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Введіть ім'я"),
    email: z.string().email('Введіть коректний email'),
    password: z.string().min(6, 'Пароль має містити мінімум 6 символів'),
    confirmPassword: z.string().min(6, 'Підтвердіть пароль'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Паролі не співпадають',
    path: ['confirmPassword'],
  });

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

interface Props {
  open: boolean;
  onClose: () => void;
}

export function AuthModal({ open, onClose }: Props) {
  const [mode, setMode] = React.useState<'login' | 'register'>('login');

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  React.useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  if (!open) return null;

  const onLoginSubmit = (data: LoginFormValues) => {
    localStorage.setItem('loveSushiUser', JSON.stringify(data));
    alert('Успішний вхід');
    onClose();
  };

  const onRegisterSubmit = (data: RegisterFormValues) => {
    localStorage.setItem(
      'loveSushiUser',
      JSON.stringify({
        fullName: data.fullName,
        email: data.email,
      }),
    );
    alert('Успішна реєстрація');
    onClose();
  };

  const isLogin = mode === 'login';

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/45 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              {isLogin ? 'Вхід в акаунт' : 'Реєстрація'}
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              {isLogin
                ? 'Введіть свої дані для входу'
                : 'Створіть акаунт для швидкого замовлення'}
            </p>
          </div>

          <button onClick={onClose} className="text-xl text-gray-500">
            ×
          </button>
        </div>

        {isLogin ? (
          <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">E-Mail</label>
              <input
                {...loginForm.register('email')}
                className="h-12 w-full rounded-2xl border border-gray-200 px-4 outline-none focus:border-orange-400"
              />
              {loginForm.formState.errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {loginForm.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Пароль</label>
              <input
                type="password"
                {...loginForm.register('password')}
                className="h-12 w-full rounded-2xl border border-gray-200 px-4 outline-none focus:border-orange-400"
              />
              {loginForm.formState.errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {loginForm.formState.errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-2xl bg-orange-500 text-white transition hover:bg-orange-600"
            >
              Увійти
            </button>
          </form>
        ) : (
          <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Повне ім&apos;я</label>
              <input
                {...registerForm.register('fullName')}
                className="h-12 w-full rounded-2xl border border-gray-200 px-4 outline-none focus:border-orange-400"
              />
              {registerForm.formState.errors.fullName && (
                <p className="mt-1 text-sm text-red-500">
                  {registerForm.formState.errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">E-Mail</label>
              <input
                {...registerForm.register('email')}
                className="h-12 w-full rounded-2xl border border-gray-200 px-4 outline-none focus:border-orange-400"
              />
              {registerForm.formState.errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {registerForm.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Пароль</label>
              <input
                type="password"
                {...registerForm.register('password')}
                className="h-12 w-full rounded-2xl border border-gray-200 px-4 outline-none focus:border-orange-400"
              />
              {registerForm.formState.errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {registerForm.formState.errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Підтвердіть пароль</label>
              <input
                type="password"
                {...registerForm.register('confirmPassword')}
                className="h-12 w-full rounded-2xl border border-gray-200 px-4 outline-none focus:border-orange-400"
              />
              {registerForm.formState.errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {registerForm.formState.errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-2xl bg-orange-500 text-white transition hover:bg-orange-600"
            >
              Зареєструватися
            </button>
          </form>
        )}

        <button
          onClick={() => setMode(isLogin ? 'register' : 'login')}
          className="mt-5 w-full rounded-2xl border border-orange-400 px-4 py-3 text-sm font-medium text-orange-500 transition hover:bg-orange-50"
        >
          {isLogin ? 'Реєстрація' : 'Повернутись до входу'}
        </button>
      </div>
    </div>
  );
}