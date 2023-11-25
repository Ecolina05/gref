'use client'

import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'
import Header from '@/app/components/header'

const Countries = () => {
  const headerInfo = {
    title: 'Países',
    subtitle: 'Listado de todos los países registrados en nuestro sistema.',
    action: 'countries/add'
  }

  return (
    <>
      <Header header={headerInfo} />
      <Table aria-label='Tabla de países'>
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Nombre país</TableColumn>
          <TableColumn>Departamentos/Estados</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>1</TableCell>
            <TableCell>Colombia</TableCell>
            <TableCell>33</TableCell>
          </TableRow>
          <TableRow key='2'>
            <TableCell>2</TableCell>
            <TableCell>Perú</TableCell>
            <TableCell>44</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default Countries
