import useFetch from '@/utils/fetch'

export const getSavingGroupsService = async () => {
  return await useFetch('GET', 'Grupos')
}

export const registerSavingGroupsService = async (group) => {
  return await useFetch('POST', 'Grupos', group)
}
