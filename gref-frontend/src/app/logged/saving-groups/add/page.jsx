import Header from '@/app/components/header'
import React from 'react'

const AddSavingGroup = () => {
  const headerInfo = {
    title: 'Agregar grupo ahorro',
    subtitle: 'Para agregar un grupo de ahorro complete los siguiente campos:'
  }

  return (
    <>
      <Header header={headerInfo} />
    </>
  )
}

export default AddSavingGroup
