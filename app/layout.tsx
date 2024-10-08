import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'
import ToastProvider from '@/components/providers/ToasterProvider'
import { ConfettiProvider } from '@/components/providers/ConfettiProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'How to train for',
  description: 'How to train for anything',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
