import Vue from 'vue'
import authenticationService from '../services/authenticationService'

Vue.use({
  install (Vue) {
    Vue.prototype.$auth = authenticationService
  }
})
