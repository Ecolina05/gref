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
  Button,
  ScrollShadow
} from '@nextui-org/react'
import Header from '@/app/components/header'
import { getUsersService } from './users.service'
import UserDetails from './user-details'
import { FiEye } from 'react-icons/fi'

const Users = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState('')

  const headerInfo = {
    title: 'Usuarios',
    subtitle: 'Listado de todos los usuarios registrados en nuestro sistema.',
    action: 'users/add'
  }

  const getUsers = async () => {
    setLoading(true)
    const response = await getUsersService()
    response && setUsers(response)

    setLoading(false)
  }

  const setCurrentUserData = (user) => {
    onOpen()
    setCurrentUser(user)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <Header header={headerInfo} />
      <h1 className='text-xl'></h1>
      <h2 className='text-md italic text-default-500 mb-5'></h2>

      <ScrollShadow className='w-full h-[550px]'>
        <Table aria-label='Tabla de usuarios'>
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Identificación</TableColumn>
            <TableColumn>Nombre</TableColumn>
            <TableColumn>Apellidos</TableColumn>
            <TableColumn>Teléfono</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>Rol</TableColumn>
            <TableColumn></TableColumn>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user?.id}</TableCell>
                <TableCell>{`${user?.tipoDocumento} - ${user?.numeroDocumento}`}</TableCell>
                <TableCell>{user?.nombres}</TableCell>
                <TableCell>{`${user?.primerApellido} ${user?.primerApellido}`}</TableCell>
                <TableCell>{user?.telefono}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>{user?.tipo}</TableCell>
                <TableCell>
                  <Button
                    color='success'
                    variant='light'
                    onPress={() => setCurrentUserData(user)}
                  >
                    <FiEye /> Detalles
                  </Button>
                </TableCell>
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

      <UserDetails
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        user={currentUser}
      />
    </>
  )
}

export default Users
