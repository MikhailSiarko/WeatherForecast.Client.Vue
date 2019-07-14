import Vue from 'vue'
import './plugins/vuetify'
import './plugins/authentication'
import './plugins/moment'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
