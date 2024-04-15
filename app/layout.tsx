import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const IBMPlex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-ibm-plex' });

export const metadata: Metadata = {
  title: 'Transformify',
  description: 'AI-powered image generator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* IBMPlex.variable applies the font while antialiased makes the text more readable */}
      <body className={cn('font-IBMPlex antialiased', IBMPlex.variable)}>{children}</body>
    </html>
  );
}
