'use client'

import { useCountryStore } from '@/store/country-store'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const CountryDetails = ({ isOpen, onOpenChange, country }) => {
  const router = useRouter()
  const { updateCurrentCountry } = useCountryStore()

  const openAddState = () => {
    updateCurrentCountry(country)
    router.push('/logged/countries/states')
  }

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
            <ModalHeader className='flex flex-col gap-1'>Detalles del país</ModalHeader>
            <ModalBody>
              <div className='flex flex-col gap-2'>
                <p>
                  <b className='mr-3'>Nombre país:</b> {country?.name}{' '}
                </p>
                <p>
                  <b className='mr-3'>Departamentos:</b> {country?.statesNumber}{' '}
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
              <Button
                color='success'
                variant='solid'
                onClick={() => openAddState()}
              >
                Agregar departamento
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default CountryDetails
