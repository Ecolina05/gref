import Header from '@/app/components/header'
import { Card, CardBody } from '@nextui-org/react'
import React from 'react'

const SavingGroups = () => {
  const groups = ['Grupo de familia', 'Grupo de trabajo', 'Grupo de fútbol']
  const headerInfo = {
    title: 'Grupos de ahorros',
    subtitle: 'Listado de todos los grupos de ahorros registrados en nuestro sistema.',
    action: 'saving-groups/add'
  }

  return (
    <>
      <Header header={headerInfo} />

      <section className='flex gap-4 items-center flex-wrap border-r-1 border-gray-700'>
        {groups.map((group, index) => (
          <Card
            key={`group-${index}`}
            shadow='none'
            className='w-1/6 h-28 border border-gray-700'
          >
            <CardBody>
              <h2>{group}</h2>
              <h3 className='text-4xl'># {index + 1}</h3>
            </CardBody>
          </Card>
        ))}
      </section>
    </>
  )
}

export default SavingGroups
