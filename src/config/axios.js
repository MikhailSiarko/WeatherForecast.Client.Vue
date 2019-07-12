import apiUrls from './apiUrls'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: apiUrls.BASE_URL,
  responseType: 'json'
})

axiosInstance.interceptors.request.use(requestConfig => {
  const token = sessionStorage.getItem('token')
  if (token) {
    requestConfig.headers.common['Authorization'] = 'Bearer ' + token
  }
  return requestConfig
}, handleError)

function handleError (error) {
  return Promise.reject(error)
}

export {
  axiosInstance,
  handleError
}
