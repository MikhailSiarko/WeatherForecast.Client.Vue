import Vue from 'vue'
import AuthenticationService from '../services/authenticationService'

const service = new AuthenticationService()

Vue.use({
  install (Vue) {
    Vue.prototype.$auth = service
    Vue.$isAuthenticated = service.isAuthenticated
  }
})
