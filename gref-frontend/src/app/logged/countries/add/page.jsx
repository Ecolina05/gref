import Header from '@/app/components/header'
import React from 'react'

const AddCountry = () => {
  const headerInfo = {
    title: 'Agregar país',
    subtitle: 'Para agregar un país complete los siguiente campos:'
  }

  return (
    <>
      <Header header={headerInfo} />
    </>
  )
}

export default AddCountry
