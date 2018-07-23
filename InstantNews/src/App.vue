<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view :listUsers="userList" :users="userList"/>
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
    EventBus.$on("registerUser", u => {
      let lastID = this.userList[this.userList.length - 1].Id;
      u.Id = ++lastID;
      axios.post('https://24997153-7f13-4353-8660-c3e595fa5bb0.mock.pstmn.io/users', {
        body: u
      }).then(response => {})
      // this.userList.push(u);
    });
  },
  created() {
    axios.get('https://24997153-7f13-4353-8660-c3e595fa5bb0.mock.pstmn.io/users')
    .then(response => {
      this.userList = response.data
      console.log(response)
      console.log( JSON.parse(this.userList) )
      // console.log(this.userList.length)
      console.log(this.userList)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
};
</script>
