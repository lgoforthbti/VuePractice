<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      userList: [
        {
          Id: 1,      
          Username: "Test1",
          FName: "John",
          LName: "Smith",
          Email: "test1@test.com",
          Password: "test",
          isAdmin: false
        },
        {
          Id: 2,
          Username: "Test2",
          FName: "Jane",
          LName: "Doe",
          Email: "test2@test.com",
          Password: "test",
          isAdmin: false
        },
        {
          Id: 3,
          Username: "Test3",
          FName: "Shirley",
          LName: "Temple",
          Email: "test3@test.com",
          Password: "test",
          isAdmin: false
        },
        {
          Id: 4,
          Username: "admin",
          FName: "testAdmin",
          LName: "testAdmin",
          Email: "testadmin@test.com",
          Password: "test",
          isAdmin: true
        }
      ]
    };
  },
  methods: {
    logout() {
      this.authenticated = false;
    }
  },
  components: {
    "Navbar": Navbar,
    "Footer": Footer
  }
};
</script>
