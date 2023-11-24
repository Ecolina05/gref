import { Card, CardBody } from '@nextui-org/react'
import React from 'react'

const SavingGroups = () => {
  const groups = ['Grupo de familia', 'Grupo de trabajo', 'Grupo de fútbol']

  return (
    <>
      <h1 className='text-xl'>Grupos de ahorros</h1>
      <h2 className='text-md italic text-default-500 mb-5'>
        Listado de todos los grupos de ahorros registrados en nuestro sistema.
      </h2>

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
