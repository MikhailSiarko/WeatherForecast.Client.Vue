<template>
  <v-app>
    <v-content>
      <NavigationBar :items="items" />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import NavigationBar from '@/components/NavigationBar'

export default {
  name: 'App',
  components: {
    NavigationBar
  },
  data () {
    return {
      items: [
        { path: '/login', name: 'Login' },
        { path: '/register', name: 'Register' }
      ]
    }
  }
}
</script>
