import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.png'

const Logo = () => (
  <Image
    alt='logo'
    height={100}
    src={logo}
    width={100}
    sizes='100vw'
  />
)

export default Logo
