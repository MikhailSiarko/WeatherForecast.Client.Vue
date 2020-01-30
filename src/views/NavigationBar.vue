<template>
  <v-toolbar dark>
    <v-toolbar-title class="headline text-uppercase">
      <span>Weather</span>
      <span class="font-weight-light">Forecast</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-for="(item, i) in items" :key="i">
      <v-btn
        flat
        v-if="item.action"
        @click.prevent="item.action()"
      >
        {{ item.name }}
      </v-btn>
      <v-btn
        v-else
        flat
        :to="item.path"
      >
        {{ item.name }}
      </v-btn>
    </div>
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
