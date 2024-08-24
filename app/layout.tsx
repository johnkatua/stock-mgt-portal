import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import StoreProvider from './store/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stock Mgt Portal',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/** Wrap children with AntdRegistry to avoid page flicker */}
        <AntdRegistry>
          <StoreProvider>{children}</StoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
