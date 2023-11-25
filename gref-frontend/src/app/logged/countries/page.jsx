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
  Button,
  useDisclosure,
  ScrollShadow
} from '@nextui-org/react'
import Header from '@/app/components/header'
import { getCountriesService } from './countries.service'
import { FiEye } from 'react-icons/fi'
import CountryDetails from './country-details'

const Countries = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [loading, setLoading] = useState(false)
  const [countries, setCountries] = useState([])
  const [currentCountry, setCurrentCountry] = useState('')

  const headerInfo = {
    title: 'Países',
    subtitle: 'Listado de todos los países registrados en nuestro sistema.',
    action: 'countries/add'
  }

  const getUsers = async () => {
    setLoading(true)
    const response = await getCountriesService()
    response && setCountries(response)

    setLoading(false)
  }

  const setCurrentCountryData = (user) => {
    onOpen()
    setCurrentCountry(user)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <Header header={headerInfo} />

      <ScrollShadow className='w-full h-[550px]'>
        <Table aria-label='Tabla de países'>
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Nombre país</TableColumn>
            <TableColumn>Departamentos/Estados</TableColumn>
            <TableColumn></TableColumn>
          </TableHeader>
          <TableBody>
            {countries?.map((country, index) => (
              <TableRow key={index}>
                <TableCell>{country?.id}</TableCell>
                <TableCell>{country?.name}</TableCell>
                <TableCell>{country?.statesNumber}</TableCell>
                <TableCell>
                  <Button
                    color='success'
                    variant='light'
                    onPress={() => setCurrentCountryData(country)}
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

      <CountryDetails
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        country={currentCountry}
      />
    </>
  )
}

export default Countries
