import './globals.css'
import { Bebas_Neue, Oswald } from 'next/font/google'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Netflix Clone | Next.js',
  description: 'Netflix Clone using React JS, Next JS, Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebas.className}>{children}</body>
    </html>
  )
}
