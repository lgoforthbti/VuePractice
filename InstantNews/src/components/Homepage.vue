<template>
  <div class="Homepage">
    <h1>{{ msg }}</h1>
    <button @click="news">News</button>
    <button @click="weather">Weather</button>
  </div>
</template>

<script>
  export default {
    name: 'Homepage',
    data () {
      return {
        msg: 'Welcome to Instant News and Weather'
      }
    },
    methods: {
      news(){
        this.$router.replace({name: 'VNews'})
      },
      weather(){
        this.$router.replace({name: 'VWeather'})
      }
    }
  }
</script>