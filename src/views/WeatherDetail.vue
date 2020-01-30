<template>
  <div>
    <p>{{ temp }}&deg;C</p>
    <p>{{ pressure }} hpa</p>
    <p>{{ humidity }}%</p>
    <p>{{ windSpeed }} m/s</p>
  </div>
</template>

<script>
export default {
  name: 'WeatherDetail',
  props: {
    temp: {
      type: Number,
      required: true
    },
    pressure: {
      type: Number,
      required: true
    },
    humidity: {
      type: Number,
      required: true
    },
    windSpeed: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
p {
  text-align: center;
  margin: 0 auto;
}
</style>
