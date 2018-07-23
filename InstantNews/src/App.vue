<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view :listUsers="userList" :users="userList" :ulist="userList"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { EventBus } from "./event-bus.js";
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      userList: [],
      errors: []
    };
  },
  methods: {
    logout() {
      this.authenticated = false;
    }
  },
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  mounted() {
    // EventBus.$on("registerUser", u => {
    //   let lastID = this.userList[this.userList.length - 1].Id;
    //   u.Id = ++lastID;
    //   axios.post('https://24997153-7f13-4353-8660-c3e595fa5bb0.mock.pstmn.io/users', {
    //     u
    //   }).then(response => {
    //     console.log(response)
    //   })
    //   // this.userList.push(u);
    // });
  },
  created() {
    axios.get('https://24997153-7f13-4353-8660-c3e595fa5bb0.mock.pstmn.io/users')
    .then(response => {
      this.userList = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
};
</script>
