import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Buy Gift Cards',
  description: 'gift card shopping',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-300`} >
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
