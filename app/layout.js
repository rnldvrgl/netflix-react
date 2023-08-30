import './globals.css'
import { Bebas_Neue, Roboto_Slab } from 'next/font/google'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebas.className}>{children}</body>
    </html>
  )
}
