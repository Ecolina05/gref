'use client'

import Header from '@/app/components/header'
import {
  ScrollShadow,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { getContributionsService } from './contributions.service'

const Contributions = () => {
  const [loading, setLoading] = useState(false)
  const [contributions, setContributions] = useState([])

  const headerInfo = {
    title: 'Aportes',
    subtitle: 'Listado de todos los aportes registrados en nuestro sistema.',
    action: 'contributions/add'
  }

  const getContributions = async () => {
    setLoading(true)
    const response = await getContributionsService()
    response && setContributions(response || [])

    setLoading(false)
  }

  useEffect(() => {
    getContributions()
  }, [])

  return (
    <>
      <Header header={headerInfo} />

      <ScrollShadow className='w-full h-[550px]'>
        <Table aria-label='Tabla de aportes'>
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Periodicidad</TableColumn>
            <TableColumn>Meta</TableColumn>
            <TableColumn>Estado</TableColumn>
            <TableColumn>Duracion</TableColumn>
            <TableColumn>Fecha</TableColumn>
          </TableHeader>
          <TableBody>
            {contributions?.map((c, index) => (
              <TableRow key={index}>
                <TableCell>{c?.id}</TableCell>
                <TableCell>{c?.periodicidad}</TableCell>
                <TableCell>{c?.meta}</TableCell>
                <TableCell>{c?.estado}</TableCell>
                <TableCell>{c?.duracion}</TableCell>
                <TableCell>{c?.fecha}</TableCell>
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
    </>
  )
}

export default Contributions
