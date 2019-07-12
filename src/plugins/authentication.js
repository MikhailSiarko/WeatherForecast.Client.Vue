import Vue from 'vue'
import AuthenticationService from '../services/authenticationService'

Vue.use({
  install (Vue) {
    Vue.prototype.$auth = new AuthenticationService()
  }
})
