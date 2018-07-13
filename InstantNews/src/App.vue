<template>
  <div id="app">
    <router-link :to="{ name: 'HelloWorld'}">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/resetpw">Reset Password</router-link>
    <router-link to="/admin">Admin</router-link>
    <router-link to="/vnews">News</router-link>
    <router-link to="/vweather">Weather</router-link>
    <hr/>
    <router-view @authenticated="setAuthenticated"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAdmin: {
          Id: 1,      
          Username: "Test1",
          FName: "John",
          LName: "Smith",
          Email: "test1@test.com",
          Password: "test"
      },
      userList: [
        {
          Id: 1,      
          Username: "Test1",
          FName: "John",
          LName: "Smith",
          Email: "test1@test.com",
          Password: "test"
        },
      ]
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "Login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>
