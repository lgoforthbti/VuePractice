<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view :userList="listUsers"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { EventBus } from "./event-bus.js"

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
    "Footer": Footer,
    // "Register": Register,
    // "Admin": Admin
  },
  mounted() {  
    EventBus.$on('registerUser', u => {
       let lastID = (this.userList[(this.userList.length) - 1].Id);
       u.Id = ++lastID;
      this.userList.push(u);
  });
    // EventBus.$on('loginUser', u => {
    //   if (this.input.username != "" && this.input.password != "") 
    //   {
    //     console.log("check if user exists")
    //     if (this.userExists())
    //       {
    //         console.log("if user does exist then check is admin")
    //         if(this.isAdmin()){
              
    //           this.$router.replace({ name: "Admin" });
    //         } else {
              
    //           this.$router.replace({ name: "Homepage" });
    //         }
    //       } 
    //     else 
    //       {
    //         console.log("The username and / or password is incorrect");
    //       }
    //   } 
    //     else {
    //     console.log("A username and password must be present");
    //   }
    // })
  }
};
</script>
