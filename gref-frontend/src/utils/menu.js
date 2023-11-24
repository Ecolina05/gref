import React from 'react'

import { VscGraph } from 'react-icons/vsc'
import { FaLayerGroup } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { LuWallet } from 'react-icons/lu'
import { GiWorld } from 'react-icons/gi'

const MENU = [
  // { name: 'Dashboard', icon: <VscGraph size={20} />, href: 'dashboard' },
  { name: 'Paises', icon: <GiWorld size={20} />, href: 'countries' },
  { name: 'Grupos de ahorros', icon: <FaLayerGroup size={20} />, href: 'saving-groups' },
  { name: 'Admin. usuarios', icon: <FiUsers size={20} />, href: 'users' }
  // { name: 'Aportes', icon: <RiMoneyDollarCircleLine size={20} />, href: '' },
  // { name: 'Préstamos', icon: <LuWallet size={20} />, href: '' },
]

export default MENU
