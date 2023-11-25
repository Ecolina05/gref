import useFetch from '@/utils/fetch'

export const getUsersService = async () => {
  return await useFetch('GET', 'Users')
}
