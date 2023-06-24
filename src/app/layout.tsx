import { Inter } from 'next/font/google'

import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body id="__next" className={inter.className}>
        {children}
      </body>
    </html>
  )
}
