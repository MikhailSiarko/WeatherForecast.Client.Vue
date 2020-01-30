<template>
  <v-layout row class="forecast-item">
    <v-flex xs12 sm12 md10 lg10 xl10 offset-xl1 offset-md1 offset-lg1>
      <v-layout row>
        <v-flex xs10 sm10 md10 lg10 xl10 offset-xl1 offset-xs1 offset-sm1 offset-md1 offset-lg1>
          <h1>
            {{ date | moment('MMM Do YYYY') }}
          </h1>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center row fill-height class="time-item-collection">
        <ForecastTimeItem
          v-for="timeItem in timeItems"
          :key="timeItem.time"
          :weather="timeItem.weather"
          :main="timeItem.main"
          :time="timeItem.time"
          :wind="timeItem.wind"
        />
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import ForecastTimeItem from './ForecastTimeItem'

export default {
  name: 'ForecastItem',
  components: {
    ForecastTimeItem
  },
  props: {
    date: {
      type: [String, Date],
      required: true
    },
    timeItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  h1 {
    margin: 0 auto;
    text-align: center;
  }
  .forecast-item {
    margin: 2rem 0;
  }
</style>
