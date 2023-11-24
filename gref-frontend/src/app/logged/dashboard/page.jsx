import { Card, CardBody } from '@nextui-org/react'
import React from 'react'

const Dashboard = () => {
  const groups = ['Grupo de ahorros creados', 'Aportes pendientes', 'Préstamos aprobados']

  return (
    <>
      <section className='flex gap-4 items-center border-r-1 border-gray-700'>
        {groups.map((group, index) => (
          <Card
            key={`group-${index}`}
            shadow='none'
            className='w-1/3 h-28 border border-gray-700'
          >
            <CardBody>
              <h2>{group}</h2>
              <h3 className='text-4xl'>#4</h3>
            </CardBody>
          </Card>
        ))}
      </section>
    </>
  )
}

export default Dashboard
