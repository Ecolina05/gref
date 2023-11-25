'use client'

import Header from '@/app/components/header'
import { Card, CardBody } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { getSavingGroupsService } from './saving-groups.service'

const SavingGroups = () => {
  const [groups, setGroups] = useState([])

  const headerInfo = {
    title: 'Grupos de ahorros',
    subtitle: 'Listado de todos los grupos de ahorros registrados en nuestro sistema.',
    action: 'saving-groups/add'
  }

  const getGroups = async () => {
    const response = await getSavingGroupsService()
    setGroups(response || [])
  }

  useEffect(() => {
    getGroups()
  }, [])

  return (
    <>
      <Header header={headerInfo} />

      <section className='flex gap-4 items-center flex-wrap border-r-1 border-gray-700'>
        {groups?.map((group, index) => (
          <Card
            key={`group-${index}`}
            shadow='none'
            className='w-1/5 h-36 border border-gray-700'
          >
            <CardBody>
              <h2 className='bold uppercase'>{group?.nombreGrupo}</h2>
              <p className='italic text-default-500 text-sm'>{group?.descripcion}</p>
              <h3 className='text-4xl'># {index + 1}</h3>
            </CardBody>
          </Card>
        ))}

        {!groups?.length && <i className='mt-10'>No hay grupos registrados</i>}
      </section>
    </>
  )
}

export default SavingGroups
