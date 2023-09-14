"use client"

import './globals.css'
import { Bebas_Neue } from 'next/font/google'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { magic } from '@/lib/magic-client';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Netflix Clone | Next.js',
  description: 'Netflix Clone using React JS, Next JS, Tailwind CSS',
}

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleLoggedIn = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        router.push("/");
      } else {
        router.push("/sign-in");
      }
    };

    handleLoggedIn();
  }, [router]);

  return (
    <html lang="en">
      <body className={bebas.className}>{children}
      </body>
    </html>
  )
}
