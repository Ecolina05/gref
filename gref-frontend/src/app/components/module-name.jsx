import React from 'react'

const ModuleName = () => {
  return (
    <div className='flex items-center gap-3'>
      <img
        src='/logo.png'
        alt='logo'
        width={50}
      />
      <div className='flex flex-col'>
        <h2 className='font-light italic'>Módulo</h2>
        <h1 className='uppercase bold text-md'>dashboard</h1>
      </div>
    </div>
  )
}

export default ModuleName
