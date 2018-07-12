<template>
  <div id="app">
    <router-link :to="{ name: 'HelloWorld'}">Home</router-link>
    <router-link :to="{ name: 'Login'}">Login</router-link>
    <router-link :to="{ name: 'Register'}">Register</router-link>
    <router-link :to="{ name: 'Admin'}">Admin</router-link>
    <router-link :to="{ name: 'VNews'}">News</router-link>
    <router-link :to="{ name: 'VWeather'}">Weather</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
