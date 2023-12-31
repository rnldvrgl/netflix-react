import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: 'Netflix Clone | Next.js',
  description: 'Netflix Clone using Next JS, Tailwind CSS',
  icons: {
    icon: '/images/netflix.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} id="__next">
        {children}
      </body>
    </html>
  );
}
