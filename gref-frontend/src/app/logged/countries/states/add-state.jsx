'use client'

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { registerStateService } from '../countries.service'
import { showToast } from '@/utils/toast'
import { useRouter } from 'next/navigation'
import { useCountryStore } from '@/store/country-store'

const AddState = ({ isOpen, onOpenChange }) => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const { currentCountry } = useCountryStore()
  const [loading, setLoading] = useState(false)

  const registerState = handleSubmit(async ({ name }) => {
    setLoading(true)
    const payload = {
      countryId: currentCountry?.id,
      name
    }

    const response = await registerStateService(payload)
    if (response === 'Registro no encontrado' || [400, 401, 404, 415].includes(response?.status)) {
      showToast('error', 'Error al agregar el departamento')
      setLoading(false)
      return
    }

    showToast('success', 'Departamento registrado')
    setTimeout(() => router.push('/logged/countries'), 500)
    setLoading(false)
  })

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
            <form onSubmit={registerState}>
              <ModalHeader className='flex flex-col gap-1'>Agregar departamento/estado</ModalHeader>
              <ModalBody>
                <Input
                  type='text'
                  label='Nombre del departamento'
                  {...register('name')}
                />
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
                  isLoading={loading}
                  type='submit'
                >
                  Agregar
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default AddState
