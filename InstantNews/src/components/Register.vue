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
        <button type="button" v-on:click="register()">Register</button>
        <button type="button" v-on:click="cancel()">Cancel</button>
    </div>
</template>

<script>
export default {
  name: "Register",
  props: {
    users: Array
  },
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
          let u = {
            Id: "",
            FName: "",
            LName: "",
            Email: "",
            Username: "",
            Password: "",
            isAdmin: false
          }
          u.Id = this.users[(users.length) - 1].Id ++;
          u.FName = this.input.FName;
          u.LName = this.input.LName;
          u.Email = this.input.Email;
          u.Username = this.input.Username;
          u.Password = this.input.Password;
        console.log(u)
        this.users.push(u);
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