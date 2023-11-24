'use client'

import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'
import Header from '@/app/components/header'

const Users = () => {
  const headerInfo = {
    title: 'Usuarios',
    subtitle: 'Listado de todos los usuarios registrados en nuestro sistema.',
    action: 'users/add'
  }

  return (
    <>
      <Header header={headerInfo} />
      <h1 className='text-xl'></h1>
      <h2 className='text-md italic text-default-500 mb-5'></h2>
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
