'use client'

import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'

const Countries = () => {
  return (
    <>
      <h1 className='text-xl'>Países</h1>
      <h2 className='text-md italic text-default-500 mb-5'>
        Listado de todos los países registrados en nuestro sistema.
      </h2>

      <Table aria-label='Tabla de países'>
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Nombre país</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>1</TableCell>
            <TableCell>Colombia</TableCell>
          </TableRow>
          <TableRow key='2'>
            <TableCell>2</TableCell>
            <TableCell>Perú</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default Countries
