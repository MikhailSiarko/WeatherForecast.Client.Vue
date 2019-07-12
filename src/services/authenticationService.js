import axiosInstance from '../config/axios'
import apiUrls from '../config/apiUrls'

export default {
  login (login, password) {
    return axiosInstance.post(apiUrls.LOGIN, { login, password })
      .then(setAuthData)
  },
  register (login, password, confirmPassword) {
    return axiosInstance.post(apiUrls.LOGIN, { login, password, confirmPassword })
      .then(setAuthData)
  },
  logout () {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
  },
  isAuthenticated () {
    return sessionStorage.getItem('token')
  }
}

function setAuthData (response) {
  sessionStorage.setItem('token', response.data.token)
  sessionStorage.setItem('user', JSON.stringify(response.data.user))
  return response
}
