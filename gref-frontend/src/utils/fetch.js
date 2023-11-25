import { API_URL } from '../../env'
import { showToast } from './toast'

const useFetch = async (method, endpoint, body = null) => {
  method = method.toUpperCase()

  const headers = {
    Accept: 'application/json, text/plain',
    'Content-Type': 'application/json;charset=UTF-8'
  }

  const config = {
    method,
    headers,
    ...(method !== 'GET' ? { body: JSON.stringify(body) } : {})
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
