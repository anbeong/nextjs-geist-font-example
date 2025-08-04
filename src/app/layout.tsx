import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'KissKH Clone',
  description: 'A clone of kisskh.co streaming site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black text-white" style={{ fontFamily: 'var(--font-inter)' }}>
      <body className={`${inter.variable} min-h-screen bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
