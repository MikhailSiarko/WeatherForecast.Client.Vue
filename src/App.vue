<template>
  <v-app>
    <NavigationBar :items="items" />
    <v-content>
      <router-view @authenticated="setAuthentication($event)"></router-view>
    </v-content>
  </v-app>
</template>

<script>

import NavigationBar from './views/NavigationBar'
import Vue from 'vue'

export default {
  name: 'App',
  components: {
    NavigationBar
  },
  data () {
    return {
      authenticated: Vue.$isAuthenticated()
    }
  },
  methods: {
    setAuthentication (event) {
      this.authenticated = event
    }
  },
  computed: {
    items () {
      const that = this
      return this.authenticated ? [
        {
          name: 'Logout',
          action () {
            that.$auth.logout()
            that.setAuthentication(false)
            that.$router.push('/login')
          }
        }
      ] : [
        { path: '/login', name: 'Login' },
        { path: '/register', name: 'Register' }
      ]
    }
  }
}
</script>
