'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { registerContributionsService } from '../contributions.service'
import { showToast } from '@/utils/toast'
import Header from '@/app/components/header'
import { Button, Card, CardBody, Input } from '@nextui-org/react'
import Link from 'next/link'

const AddContribution = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false)
  const headerInfo = {
    title: 'Agregar aporte',
    subtitle: 'Para agregar un aporte complete los siguiente campos:'
  }

  const registerContribution = handleSubmit(async ({ name }) => {
    setLoading(true)
    const payload = {
      id: 1,
      idUser: '6',
      periodicidad: '',
      meta: '100000',
      estado: 'vigente',
      duracion: 'MENSUAL',
      fecha: '25/11/23'
    }

    const response = await registerContributionsService(payload)
    if ([400, 401, 404].includes(response?.status)) {
      showToast('error', 'Error al registar el país, verifique los campos por favor')
      setLoading(false)
      return
    }

    setLoading(false)
    showToast('success', 'País registrado con éxito')
    setTimeout(() => router.push('/logged/countries'), 500)
  })

  return (
    <>
      <Header header={headerInfo} />

      <Card
        shadow='none'
        className='register-container__card p-4 mt-5'
      >
        <CardBody>
          <form
            className='flex flex-col gap-5'
            onSubmit={registerContribution}
          >
            <div className='flex gap-3 items-center mt-3 justify-center mx-10'>
              <Input
                type='text'
                label='Periodicidad'
                {...register('periodicidad')}
              />
            </div>

            <div className='flex gap-3 items-center mt-3 justify-center'>
              <Link href='/logged/countries'>
                <Button
                  color='success'
                  variant='light'
                >
                  Regresar
                </Button>
              </Link>
              <Button
                color='success'
                type='submit'
                isLoading={loading}
              >
                Registrar
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  )
}

export default AddContribution
