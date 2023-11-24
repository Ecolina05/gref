import Header from '@/app/components/header'
import React from 'react'

const AddUser = () => {
  const headerInfo = {
    title: 'Agregar usuario',
    subtitle: 'Para agregar un usuario complete los siguiente campos:'
  }

  return (
    <>
      <Header header={headerInfo} />
    </>
  )
}

export default AddUser
