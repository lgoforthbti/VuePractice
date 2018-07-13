<template>
    <div id="vnews">
        <h1>Viewer News</h1>
        <input type="text" name=description v-model="input.description" placeholder="Describe the News"/>
        <br><br>
        <button type="button" v-on:click="submit()">Submit</button>
        <button type="button" v-on:click="cancel()">Cancel</button>
    </div>
</template>

<script>
export default {
  name: "VNews",
  data() {
    return {
      input: {
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
