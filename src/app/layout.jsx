import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '../components/footer/Footer';
import {ThemeProvider }from '../context/ThemeContext'
import { SessionProvider } from "next-auth/react"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to JLT page',
  description: 'Created by JLT',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <SessionProvider>
          <div className="container">
            <Navbar/>
          {children}
          <Footer/>
          </div>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
