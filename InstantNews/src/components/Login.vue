<template>
    <div class="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username">
        <input type="password" name="password" v-model="input.password" placeholder="Password">
        <br>
        <br>
        <button type="button" v-on:click="login()">Login</button>
        <button type="button" v-on:click="cancel()">Cancel</button>
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      users: this.$parent.userList,
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    userExists() {
      for(let i = 0; i < this.users.length; i++){
        if(this.input.username == this.users[i].Username && this.input.password == this.users[i].Password) {
          console.log(i)
          console.log("userExists = true")
          return true
        } else {
          console.log(i)
          console.log("userExists = false")
          return false
        }
      }
    },
    isAdmin() {
      for(let i =0; i < this.$parent.userList.length; i++){
        if(this.input.username == this.users[i].Username && this.input.password == this.users[i].Password) {
          if(this.$parent.userList[i].isAdmin){
            console.log("isAdmin = true")
            return true
          } else {
            console.log("isAdmin = false")
            return false
          }
        }
      }
    },
    login() {
      if (this.input.username != "" && this.input.password != "") 
      {
        console.log("check if user exists")
        if (this.userExists())
          {
            console.log("if user does exist then check is admin")
            if(this.isAdmin()){
              
              this.$router.replace({ name: "Admin" });
            } else {
              
              this.$router.replace({ name: "HelloWorld" });
            }
          } 
        else 
          {
            console.log("The username and / or password is incorrect");
          }
      } 
        else {
        console.log("A username and password must be present");
      }
    },
    cancel() {
      this.$router.replace({ name: "HelloWorld" });
    }
  }
};
</script>