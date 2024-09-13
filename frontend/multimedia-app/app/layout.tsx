import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Navbar from './components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Content Platform',
  description: 'A platform for sharing and discovering content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="min-h-screen flex flex-col">
      <header >
       <Navbar/>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-200 p-4 mt-auto">
        <div className="container mx-auto text-center">
          © 2024 Multimedia App
        </div>
      </footer>
    </div>
      </body>
    </html>
  )
}