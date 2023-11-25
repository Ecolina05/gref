'use client'

import React from 'react'
import ModuleName from './module-name'
import menu from '../../utils/menu'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'

const Sidebar = () => {
  const { user } = useAuthStore()
  const userRole = user?.tipo

  return (
    <article
      className='h-full p-8 w-1/4'
      style={{ backgroundColor: '#1e2122' }}
    >
      <ModuleName />

      <section className='mt-14'>
        {menu.map((item, index) => {
          return (
            (item.role.includes(userRole) || item.role === 'all') && (
              <Link
                key={`menu-${index}`}
                href={item.href}
              >
                <div className='cursor-pointer flex items-center gap-3 my-8'>
                  {item.icon}
                  <h3>{item.name}</h3>
                </div>
              </Link>
            )
          )
        })}
      </section>
    </article>
  )
}

export default Sidebar
