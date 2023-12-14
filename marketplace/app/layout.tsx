import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import CartProvider from '@/providers/CartProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jineepinee Marketplace',
  description: 'Marketplace application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="corporate">
      <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <body className={`${inter.className} text-slate-700`}>
        <Toaster toastOptions={{
          style: {
            background: 'rgb(51 65 85)',
            color: '#fff'
          },
        }}/>
        <CartProvider>
        <div className="flex flex-col min-h-screen text-slate-700">
        <Nav/>
          <main className='flex-grow'>
            {children}
          </main>
        <Footer/>
      </div>
        </CartProvider>
      </body>
    </html>
  )
}
