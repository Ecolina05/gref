'use client'

import React, { useState } from 'react'
import { Button, Card, CardBody, Input, Select, SelectItem } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import '../_auth.scss'
import { showToast } from '@/utils/toast'
import { typeIdentityDocuments, usersType } from '@/services/common.service'
import { regirterUserService } from '../auth.service'

const Register = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false)

  const registerUser = handleSubmit(async (formValue) => {
    setLoading(true)
    const payload = {
      ...formValue,
      id: 0
    }
    console.log(payload)

    const response = await regirterUserService(payload)
    if ([400, 401, 404].includes(response?.status)) {
      showToast('error', 'Error al registar el usuario, verifique los campos por favor')
      setLoading(false)
      return
    }

    setLoading(false)
    showToast('success', 'Usuario registrado con éxito')
    setTimeout(() => router.push('login'), 500)
  })

  return (
    <article className='login-container w-full h-full'>
      <img
        src='/logo.png'
        alt='logo'
        width={100}
      />
      <h1 className='text-xl mt-5'>Registro de usuarios</h1>
      <h2 className='text-md text-center font-light'>
        Para registrarte en Gref, Ingresa los <br /> siguientes datos:
      </h2>

      <Card
        shadow='none'
        className='register-container__card p-4 mt-5'
      >
        <CardBody>
          <form
            className='flex flex-col gap-5'
            onSubmit={registerUser}
          >
            <div className='flex items-center gap-2'>
              <Select
                label='Tipo de documento'
                selectionMode='single'
                {...register('tipoDocumento')}
              >
                {typeIdentityDocuments.map((identityType) => (
                  <SelectItem
                    key={identityType}
                    value={identityType}
                  >
                    {identityType}
                  </SelectItem>
                ))}
              </Select>

              <Input
                type='number'
                label='Número de identificacion'
                {...register('numeroDocumento')}
              />
            </div>

            <div className='flex items-center gap-2'>
              <Input
                type='text'
                label='Nombres'
                {...register('nombres')}
              />
              <Input
                type='text'
                label='Primer apellido'
                {...register('primerApellido')}
              />
            </div>

            <div className='flex items-center gap-2'>
              <Input
                type='text'
                label='Segundo apellido'
                {...register('segundoApellido')}
              />
              <Input
                type='text'
                label='Teléfono'
                {...register('telefono')}
              />
            </div>

            <div className='flex items-center gap-2'>
              <Input
                type='text'
                label='Email'
                {...register('email')}
              />
              <Input
                type='text'
                label='Dirección'
              />
            </div>

            <div className='flex items-center gap-2'>
              <Select
                label='Tipo de usuario'
                selectionMode='single'
                {...register('tipo')}
              >
                {usersType.map((userType) => (
                  <SelectItem
                    key={userType}
                    value={userType}
                  >
                    {userType}
                  </SelectItem>
                ))}
              </Select>

              <Input
                type='password'
                label='Contraseña'
                {...register('pwd')}
              />
            </div>

            <div className='flex items-center justify-center gap-2 mt-7'>
              <Link href='/auth/login'>
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
    </article>
  )
}

export default Register
