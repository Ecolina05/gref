'use client'

import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'

const Users = () => {
  return (
    <>
      <h1 className='text-xl'>Usuarios</h1>
      <h2 className='text-md italic text-default-500 mb-5'>
        Listado de todos los usuarios registrados en nuestro sistema.
      </h2>
      <Table aria-label='Tabla de usuarios'>
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Identificación</TableColumn>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Apellidos</TableColumn>
          <TableColumn>Teléfono</TableColumn>
          <TableColumn>Email</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>1</TableCell>
            <TableCell>123123</TableCell>
            <TableCell>Jaime</TableCell>
            <TableCell>Grisales Salazar</TableCell>
            <TableCell>3212313123</TableCell>
            <TableCell>jaimito@emailsito.io</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default Users
