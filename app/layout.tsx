import type {Metadata} from 'next';
import { Quicksand, Outfit } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Arifah Machi | Software Engineer & UI/UX Designer',
  description: 'Portfolio of Arifah Nur Basyiroh Machi - Software Engineer & UI/UX Designer specialized in Laravel, Flutter, and Next.js.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${quicksand.variable} ${outfit.variable}`}>
      <body suppressHydrationWarning className="bg-[#FFF9FB] text-neutral-800 font-quicksand">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
