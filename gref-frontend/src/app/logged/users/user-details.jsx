'use client'

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

const UserDetails = ({ isOpen, onOpenChange, user }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      backdrop='blur'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Detalles de usuario</ModalHeader>
            <ModalBody>
              <div className='flex flex-col gap-2'>
                <p>
                  <b className='mr-3'>Nombres:</b> {user?.nombres}{' '}
                </p>
                <p>
                  <b className='mr-3'>Apellidos:</b> {user?.primerApellido} {user?.segundoApellido}{' '}
                </p>
                <p>
                  <b className='mr-3'>Teléfono:</b> {user?.telefono}
                </p>
                <p>
                  <b className='mr-3'>Email:</b> {user?.email}
                </p>
                <p>
                  <b className='mr-3'>Rol:</b> {user?.tipo}
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color='danger'
                variant='light'
                onPress={onClose}
              >
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default UserDetails
