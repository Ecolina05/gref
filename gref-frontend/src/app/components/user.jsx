'use client'

import React from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Avatar
} from '@nextui-org/react'
import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'

const User = () => (
  <>
    <Dropdown placement='bottom-end'>
      <DropdownTrigger>
        <Avatar
          isBordered
          as='button'
          className='transition-transform'
          color='success'
          name='Ernesto Colina'
          size='sm'
          showFallback
          fallback={<AiOutlineUser size='17' />}
        />
      </DropdownTrigger>

      <DropdownMenu
        aria-label='Profile Actions'
        variant='flat'
      >
        <DropdownSection
          aria-label='Options'
          showDivider
        >
          <DropdownItem
            isReadOnly
            key='profile'
            className='h-14 gap-2'
          >
            <p className='font-semibold'>Ernesto Colina</p>
            <p className='font-normal'>Administrador</p>
          </DropdownItem>
        </DropdownSection>

        <DropdownItem
          key='logout'
          color='danger'
        >
          <Link href='/auth/login'>Cerrar sesión</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </>
)

export default User
