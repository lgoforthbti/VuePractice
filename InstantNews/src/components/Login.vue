<template>
    <div class="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username">
        <input type="password" name="password" v-model="input.password" placeholder="Password">
        <button type="button" v-on:click="login()">Login</button>
        <button type="button" v-on:click="cancel()">Cancel</button>
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (this.input.username == this.$parent.mockAdmin.Username && this.input.password == this.$parent.mockAdmin.Password)
         {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "Admin" });
         } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    },
    cancel() {
      this.$router.replace({ name: "HelloWorld" });
    }
  }
};
</script>