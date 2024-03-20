import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Fe Aranha',
  description: 'FullStack Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body
        className={`${GeistMono.className}max-w-[760px] bg-tuna-900 text-tuna-300 antialiased m-4 overflow-y-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
