<template>
    <h2>Forecast!!</h2>
</template>

<script>
import ForecastService from '../services/forecastService'

export default {
  name: 'Forecast',
  data () {
    return {
      forecast: null
    }
  },
  methods: {
    getForecast (city) {
      const that = this
      new ForecastService().get(city)
        .then(forecast => {
          that.forecast = forecast
        })
    }
  }
}
</script>

<style scoped>

</style>
