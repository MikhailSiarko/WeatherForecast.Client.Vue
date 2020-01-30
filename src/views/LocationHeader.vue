<template>
  <v-layout>
    <v-flex xs10 sm10 md4 lg4 xl4 offset-xs1 offset-sm1 offset-md4 offset-lg4 offset-xl4>
      <h1>{{ location }} ({{ countryCode }})</h1>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'LocationHeader',
  props: {
    location: {
      type: String,
      required: true
    },
    countryCode: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 1rem;
  font-size: 3rem;
  text-align: center;
}
</style>
