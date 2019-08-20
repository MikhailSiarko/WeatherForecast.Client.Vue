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

axiosInstance.interceptors.response.use(response => response, handleError)

function handleError (error) {
  alert(error.response.data.errorMessage)
  return Promise.reject(error)
}

export {
  axiosInstance,
  handleError
}
