import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const Header = ({ header }) => {
  return (
    <header className='flex items-center justify-between'>
      <div className='flex flex-col'>
        <h1 className='text-xl'>{header.title || ''}</h1>
        <h2 className='text-md text-default-500 mb-5'>{header.subtitle || ''}</h2>
      </div>

      {header.action && (
        <Link href={header.action}>
          <Button
            color='success'
            type='button'
          >
            Agregar
          </Button>
        </Link>
      )}
    </header>
  )
}

export default Header
