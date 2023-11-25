import useFetch from '@/utils/fetch'

export const getCountriesService = async () => {
  return await useFetch('GET', 'Countries')
}

export const registerCountryService = async (country) => {
  return await useFetch('POST', 'Countries', country)
}

export const getStatesService = async () => {
  return await useFetch('GET', 'States')
}

export const registerStateService = async (state) => {
  return await useFetch('POST', 'States', state)
}
