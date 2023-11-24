/* eslint-disable react/prop-types */
import React from 'react'

import Sidebar from '../components/sidebar'
import Topbar from '../components/topbar'

export const metadata = {
  title: 'Gref',
  description: 'Gref'
}

export default function DashboardLayout ({ children }) {
  return (
    <main className='flex h-full'>
      <Sidebar />

      <section className='w-full'>
        <article>
          <Topbar />
        </article>

        <article className='h-full m-10'>{children}</article>
      </section>
    </main>
  )
}
