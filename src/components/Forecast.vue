<template>
    <v-container fluid>
      <LocationInput @submit="getForecast" />
      <div v-if="forecast">
        <LocationHeader :location="forecast.city" :country-code="forecast.countryCode" />
        <v-layout column>
          <ForecastItem
            v-for="item in forecast.items"
            :key="item.date"
            :time-items="item.timeItems"
            :date="item.date"
          />
        </v-layout>
      </div>
    </v-container>
</template>

<script>
import ForecastService from '../services/forecastService'
import LocationInput from '../views/LocationInput'
import LocationHeader from '../views/LocationHeader'
import ForecastItem from '../views/ForecastItem'

export default {
  name: 'Forecast',
  components: {
    LocationInput,
    LocationHeader,
    ForecastItem
  },
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
        }).catch(error => {
          if (error.response.status === 401) {
            that.$auth.logout()
            that.$emit('authenticated', false)
            that.$router.push('/login')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
