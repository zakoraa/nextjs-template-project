import type { Metadata } from 'next';
import './globals.css';
import { siteMetadata } from '@/shared/config/metadata';
import { inter } from '@/shared/config/fonts';


export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className}>
      <body className="min-h-screen text-text font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
