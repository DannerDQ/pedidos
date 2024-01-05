import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'
import Nav from '@component/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pedidos - Arrechos',
  description: 'Pedidos arrechos - comida rápida',
  icons: "/favicon.ico"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Nav/>
        </header>
        {children}
      </body>
    </html>
  )
}
