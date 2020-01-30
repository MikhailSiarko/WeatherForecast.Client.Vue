<template>
  <v-layout row>
    <v-flex xs12 sm12 md4 lg4 xl4 offset-md4 offset-lg4 offset-xl4>
      <v-layout row>
        <v-flex xs12 sm12 md8 lg8 xl8 offset-md2 offset-lg2 offset-xl2>
          <v-text-field
            v-model="location"
            label="Location"
            @keyup.enter="submit"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'LocationInput',
  data () {
    return {
      location: ''
    }
  },
  methods: {
    submit () {
      this.$emit('submit', this.location)
    }
  }
}
</script>

<style scoped>
</style>
