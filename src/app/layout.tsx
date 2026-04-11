import type { Metadata } from 'next';
import './globals.css';
import { siteMetadata } from '@/shared/config/metadata';
import { inter } from '@/shared/config/fonts';
import { ThemeProvider } from 'next-themes';


export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} suppressHydrationWarning>
      <body className="min-h-screen text-text font-sans antialiased">
         <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        > 
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
