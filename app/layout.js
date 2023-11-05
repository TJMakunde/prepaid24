
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Subfooter from './components/Subfooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prepaid24',
  description: 'Pay all your bills in one place',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <Subfooter></Subfooter>
      </body>
    </html>
  )
}
