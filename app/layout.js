import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Poke Next',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico'}
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
