import React from 'react'
import { Raleway } from 'next/font/google'
import NextProviders from './next-providers'

import '../styles/globals.scss'

const font = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Gref',
  description: 'Gref'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={`dark ${font.className}`}>
        <NextProviders>{children}</NextProviders>
      </body>
    </html>
  )
}
