'use client'

import React, { useState } from 'react'
import { Button, Card, CardBody, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import Header from '@/app/components/header'
import Link from 'next/link'

const AddSavingGroup = () => {
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false)
  const headerInfo = {
    title: 'Agregar grupo ahorro',
    subtitle: 'Para agregar un grupo de ahorro complete los siguiente campos:'
  }

  const registerSavinggroup = handleSubmit(async (formValue) => {
    // setLoading(true)
    // const payload = {
    //   ...formValue
    // }
    // const response = await regirterUserService(payload)
    // if ([400, 401, 404].includes(response?.status)) {
    //   showToast('error', 'Error al registar el usuario, verifique los campos por favor')
    //   setLoading(false)
    //   return
    // }
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
            onSubmit={registerSavinggroup}
          >
            <div className='flex gap-3 items-center mt-3 justify-center mx-10'>
              <Input
                type='text'
                label='Nombre grupo'
                {...register('name')}
              />

              <Input
                type='text'
                label='Descripción'
                {...register('description')}
              />
            </div>

            <div className='flex gap-3 items-center mt-3 justify-center'>
              <Link href='/logged/saving-groups'>
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

export default AddSavingGroup
