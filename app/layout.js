"use client"

import './globals.css';
import { Bebas_Neue } from 'next/font/google';
import { useEffect } from 'react';
import { magic } from '@/lib/magic-client';
import { useRouter } from 'next/navigation';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Netflix Clone | Next.js',
  description: 'Netflix Clone using React JS, Next JS, Tailwind CSS',
};

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    console.log(router)
    const isLoggedIn = async () => {
      try {
        const isAuthenticated = await magic.user.isLoggedIn();

        if (!isAuthenticated) {
          router.push('/sign-in');
        } else {
          router.push('/');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    isLoggedIn();
  }, [router]);

  return (
    <html lang="en">
      <body className={bebas.className}>{children}</body>
    </html>
  );
}
