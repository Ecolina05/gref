import useFetch from '../../utils/fetch'

export const regirterUserService = async (user) => {
  return await useFetch('POST', 'Users', user)
}

export const loginService = async (user) => {
  return await useFetch('POST', 'Login', user)
}
