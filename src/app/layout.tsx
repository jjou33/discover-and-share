import { Inter } from 'next/font/google'

import './globals.css'

import Footer from '~/common/Footer/page'
import Header from '~/common/Header/page'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
