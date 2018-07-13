<template>
    <div id="vweather">
        <h1>Viewer Weather</h1>
        <h3>Current Conditions</h3>
        <input type="text" name="temp" v-model="input.temp" placeholder="Temperature" />
        <input type="text" name="feelslike" v-model="input.feelslike" placeholder="Heat Index/Wind Chill" />
        <input type="text" name="bp" v-model="input.bp" placeholder="Barometric Pressure" />
        <input type="text" name="precip" v-model="input.precip" placeholder="Precipitation" />
        <input type="text" name="winddir" v-model="input.winddir" placeholder="Wind Direction" />
        <input type="text" name="description" v-model="input.description" placeholder="Describe the Weather"/>
        <br><br>
        <button type="button" v-on:click="submit()">Submit</button>
        <button type="button" v-on:click="cancel()">Cancel</button>
    </div>
</template>

<script>
export default {
  name: "VWeather",
  data() {
    return {
      input: {
        temp: "",
        feelslike: "",
        bp: "",
        precip: "",
        winddir: "",
        description: ""
      }
    };
  },
  methods: {
    cancel() {
      this.$router.replace({ name: "HelloWorld" });
    }
  }
};
</script>