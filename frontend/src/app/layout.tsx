import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import { Toaster } from 'sonner';
import StoreProvider from '@/providers/ReduxStoreProvider';
import AuthChecker from '@/components/AuthChecker';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster />
        <ReactQueryProvider>
          <StoreProvider>
            <AuthChecker>{children}</AuthChecker>
          </StoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
