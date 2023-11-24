import React from 'react'
import { Inter } from 'next/font/google'
import NextProviders from './next-providers'

import '../styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gref',
  description: 'Gref'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={`dark ${inter.className}`}>
        <NextProviders>{children}</NextProviders>
      </body>
    </html>
  )
}
