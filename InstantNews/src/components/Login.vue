<template>
    <div class="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username">
        <input type="password" name="password" v-model="input.password" placeholder="Password">
        <br>
        <br>
        <button type="button" @click.stop="login">Login</button>
        <button type="button" @click="cancel()">Cancel</button>
    </div>
</template>

<script>
import { EventBus } from '../event-bus.js';
export default {
  name: "Login",
  props: ['users'],
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
        for (let i = 0; i < this.users.length; i++) {
          if (
            this.input.username == this.users[i].Username &&
            this.input.password == this.users[i].Password
          ) {
            if (this.users[i].isAdmin) {
              this.$router.replace({ name: "Admin" });
            } else {
              this.$router.replace({ name: "Homepage" });
            }
          } else {
            console.log("The username and / or password is incorrect");
          }
        }
      } else {
        console.log("A username and password must be present");
      }
    },
    cancel() {
      this.$router.replace({ name: "Homepage" });
    }
  }
};
</script>