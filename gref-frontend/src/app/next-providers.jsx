'use client'

import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'react-hot-toast'

const Providers = ({ children }) => {
  return (
    <NextUIProvider>
      {children}

      <Toaster
        position='top-right'
        reverseOrder={false}
      />
    </NextUIProvider>
  )
}

export default Providers
