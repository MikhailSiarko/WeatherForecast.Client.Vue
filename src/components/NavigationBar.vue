<template>
  <v-toolbar dark>
    <v-toolbar-title class="headline text-uppercase">
      <span>Weather</span>
      <span class="font-weight-light">Forecast</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="item in items"
      flat
      :to="item.path"
      :key="item.path"
    >
      {{ item.name }}
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
