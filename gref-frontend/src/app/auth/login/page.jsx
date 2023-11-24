'use client'

import React, { useState } from 'react'
import { Button, Card, CardBody, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

import { showToast } from '@/utils/toast'
import '../_auth.scss'
import { loginService } from '../auth.service'

const Login = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false)

  const onLogin = handleSubmit(async ({ email, pwd }) => {
    setLoading(true)
    const payload = {
      id: 1,
      tipoDocumento: '',
      numeroDocumento: '',
      nombres: '',
      primerApellido: '',
      segundoApellido: '',
      telefono: '',
      email,
      tipo: '',
      pwd,
      estadoUsuario: '',
      grupoAhorro: ''
    }
    console.log(payload)

    const response = await loginService(payload)
    if ([400, 401, 404, 415].includes(response?.status)) {
      showToast('error', 'Error al iniciar sesión')
      setLoading(false)
      return
    }
    console.log(response)

    showToast('success', '¡Bienvenido!')
    setTimeout(() => router.push('/logged/countries'), 500)
    setLoading(false)
  })

  return (
    <article className='login-container w-full h-full'>
      <img
        src='/logo.png'
        alt='logo'
        width={100}
      />
      <h1 className='text-xl mt-5'>Iniciar sesión</h1>
      <h2 className='text-md text-center font-light'>
        Para acceder a las funcionalidades, <br /> Ingresa los siguientes datos:
      </h2>

      <Card
        shadow='none'
        className='login-container__card p-4 mt-5'
      >
        <CardBody>
          <form onSubmit={onLogin}>
            <Input
              type='email'
              label='Email'
              {...register('email')}
            />
            <Input
              type='password'
              label='Contraseña'
              className='mt-3'
              {...register('pwd')}
            />

            <div className='flex items-center justify-center gap-2 mt-7'>
              <Link href='/auth/register'>
                <Button
                  color='success'
                  variant='light'
                >
                  Registrar
                </Button>
              </Link>
              <Button
                color='success'
                type='submit'
                isLoading={loading}
              >
                Acceder
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </article>
  )
}

export default Login
