<template>
    <v-layout column>
      <v-img :src="icon" />
      <p v-html="description" />
      <WeatherDetail
        :temp="detail.temp"
        :pressure="detail.pressure"
        :humidity="detail.humidity"
        :wind-speed="windSpeed"
      />
    </v-layout>
</template>

<script>
import WeatherDetail from './WeatherDetail'

export default {
  name: 'Weather',
  components: {
    WeatherDetail
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    main: {
      type: String,
      required: true
    },
    mainDescription: {
      type: String,
      required: true
    },
    detail: {
      type: Object,
      required: true
    },
    windSpeed: {
      type: Number,
      required: true
    }
  },
  computed: {
    description () {
      return `${this.$props.main}<br />(${this.$props.mainDescription})`
    }
  }
}
</script>

<style scoped>
p {
  text-align: center;
}
</style>
