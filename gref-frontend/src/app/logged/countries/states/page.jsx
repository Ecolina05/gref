'use client'

import React, { useEffect, useState } from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  useDisclosure,
  ScrollShadow
} from '@nextui-org/react'
import Header from '@/app/components/header'
import { getStatesService } from '../countries.service'
import AddState from './add-state'

const States = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [loading, setLoading] = useState(false)
  const [states, setStates] = useState([])
  const [, setCurrentState] = useState('')

  const getUsers = async () => {
    setLoading(true)
    const response = await getStatesService()
    response && setStates(response)

    setLoading(false)
  }

  const setCurrentStateData = (user) => {
    onOpen()
    setCurrentState(user)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const headerInfo = {
    title: 'Departamentos/estados',
    subtitle: 'Listado de todos los departamentos registrados en nuestro sistema.',
    action: setCurrentStateData
  }

  return (
    <>
      <Header header={headerInfo} />

      <ScrollShadow className='w-full h-[550px]'>
        <Table aria-label='Tabla de departamentos/estados'>
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Nombre</TableColumn>
            <TableColumn>Número de ciudades</TableColumn>
          </TableHeader>
          <TableBody>
            {states.map((state, index) => (
              <TableRow key={index}>
                <TableCell>{state?.id}</TableCell>
                <TableCell>{state?.name}</TableCell>
                <TableCell>{state?.citiesNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollShadow>

      {loading && (
        <div className='w-full text-center mt-8'>
          <Spinner color='success' />
        </div>
      )}

      <AddState
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  )
}

export default States
