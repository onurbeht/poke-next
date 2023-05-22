import './globals.css'
import { Inter } from 'next/font/google'

import NavbarFooter from './components/navbar-footer'

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
        <NavbarFooter>
          {children}
        </NavbarFooter>
      </body>
    </html>
  )
}
