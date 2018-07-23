<template>
    <div id="register">
        <h1>Register</h1>
        <input type="text" name="fname" v-model="input.FName" placeholder="First Name"/>
        <input type="text" name="lname" v-model="input.LName" placeholder="Last Name"/>
        <input type="text" name="email" v-model="input.Email" placeholder="Email"/>
        <input type="text" name="username" v-model="input.Username" placeholder="Username"/>
        <input type="password" name="password" v-model="input.Password" placeholder="Password"/>
        <br>
        <br>
        <button type="button" @click="register()">Register</button>
        <button type="button" v-on:click="cancel()">Cancel</button>
    </div>
</template>

<script>
import { EventBus } from "../event-bus.js"
import axios from 'axios';

export default {
  name: "Register",
  authenticated: false,
  props: ['ulist'],
  data() {
    return {
      input: {
        FName: "",
        LName: "",
        Email: "",
        Username: "",
        Password: "",
        isAdmin: false
      }
    };
  },
  methods: {
    register() {
      if (
        this.input.Username != "" &&
        this.input.Password != "" &&
        this.input.FName != "" &&
        this.input.LName != "" &&
        this.input.Email != ""
      ) {
          let lastID = this.ulist[this.ulist.length - 1].Id;
          let u = {
            Id: 0,
            FName: "",
            LName: "",
            Email: "",
            Username: "",
            Password: "",
            isAdmin: false
          }
          u.Id = ++lastID;
          u.FName = this.input.FName;
          u.LName = this.input.LName;
          u.Email = this.input.Email;
          u.Username = this.input.Username;
          u.Password = this.input.Password;
          axios.post('https://24997153-7f13-4353-8660-c3e595fa5bb0.mock.pstmn.io/users', u
          ).then(response => {
          console.log(response)
          })
        this.$emit("authenticated", true);
        this.$router.replace({ name: "Admin" });
      } else {
        console.log("Username, password, first name, last name, and email must be present");
      }
    },
    cancel() {
      this.$router.replace({ name: "Homepage" });
    }
  }
};
</script>