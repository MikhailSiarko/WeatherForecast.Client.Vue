<template>
  <v-app>
    <v-content>
      <Sidebar :items="items" />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Sidebar from '@/components/Sidebar'

export default {
  name: 'App',
  components: {
    Sidebar
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
