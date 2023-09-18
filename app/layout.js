"use client"

import './globals.css';
import { Poppins } from 'next/font/google';
import { useEffect } from 'react';
import { magic } from '@/lib/magic-client';
import { useRouter } from 'next/navigation';

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: 'Netflix Clone | Next.js',
  description: 'Netflix Clone using Next JS, Tailwind CSS',
};

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = async () => {
      try {
        const isAuthenticated = await magic.user.isLoggedIn();

        if (!isAuthenticated) {
          router.push('/sign-in');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    isLoggedIn();
  }, [router]);

  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
