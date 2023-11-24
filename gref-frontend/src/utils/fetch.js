import { API_URL } from '../../env'
import { showToast } from './toast'

const useFetch = async (method, endpoint, body = null) => {
  method = method.toUpperCase()

  const headers = new Headers()
  headers.append('Accept', '*/*')

  const config = {
    method,
    headers,
    ...(method !== 'GET' ? { body } : {})
  }

  return fetch(`${API_URL}/${endpoint}`, config)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error)
      showToast('error', error)
      return error
    })
}

export default useFetch
