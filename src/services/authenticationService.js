import { axiosInstance, handleError } from '../config/axios'
import apiUrls from '../config/apiUrls'
import router from '../router'

class AuthenticationService {
  constructor () {
    const that = this
    axiosInstance.interceptors.response.use(response => {
      if (response.status === 401) {
        that.logout()
      }
      return response
    }, handleError)
  }

  login (login, password) {
    return axiosInstance.post(apiUrls.LOGIN, { login, password })
      .then(setAuthData)
      .then(redirect('/'))
  }
  register (login, password, confirmPassword) {
    return axiosInstance.post(apiUrls.LOGIN, { login, password, confirmPassword })
      .then(setAuthData)
      .then(redirect('/'))
  }
  logout () {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    router.push('/')
  }
  isAuthenticated () {
    if (sessionStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }
}

function setAuthData (response) {
  sessionStorage.setItem('token', response.data.token)
  sessionStorage.setItem('user', JSON.stringify(response.data.user))
  return response
}

function redirect (to) {
  return function () {
    router.push(to)
  }
}

export default AuthenticationService
