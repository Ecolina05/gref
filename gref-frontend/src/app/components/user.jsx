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
import { AiOutlineUser } from 'react-icons/ai'
import { useAuthStore } from '@/store/auth-store'
import { useRouter } from 'next/navigation'

const User = () => {
  const router = useRouter()
  const { user } = useAuthStore()

  return (
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
              <p className='font-semibold'>{`${user?.nombres} ${user?.primerApellido}`}</p>
              <p className='font-normal'>{user?.tipo}</p>
            </DropdownItem>
          </DropdownSection>

          <DropdownItem
            key='logout'
            color='danger'
            onClick={() => router.push('/auth/login')}
          >
            Cerrar sesión
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default User
