import useFetch from '@/utils/fetch'

export const getContributionsService = async () => {
  return await useFetch('GET', 'Aportes')
}

export const registerContributionsService = async (group) => {
  return await useFetch('POST', 'Aportes', group)
}
