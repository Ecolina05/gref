import React from 'react'

import User from '../components/user'

const Topbar = () => {
  return (
    <article className='flex justify-between items-center mx-10 py-6'>
      <h1 className='text-sm flex items-center gap-2'></h1>
      <User />
    </article>
  )
}

export default Topbar
