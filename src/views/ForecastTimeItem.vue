<template>
  <v-flex xs12 sm12 md1 lg1 xl1 class="time-item">
    <h2>{{ time | moment('h:mm a') }}</h2>
    <Weather
      :main="weather.main"
      :main-description="weather.description"
      :icon="weather.icon"
      :detail="main"
      :wind-speed="wind.speed"
    />
  </v-flex>
</template>

<script>
import Weather from './Weather'

export default {
  name: 'ForecastTimeITem',
  components: {
    Weather
  },
  props: {
    time: {
      type: [String, Date],
      required: true
    },
    weather: {
      type: Object,
      require: true
    },
    main: {
      type: Object,
      required: true
    },
    wind: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0 auto;
  text-align: center;
}
  .time-item {
    margin: 0 2rem;
  }
</style>
