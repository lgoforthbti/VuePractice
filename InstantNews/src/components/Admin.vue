<template>
    <div class="admin">
        <table>
          <thead>
            <tr>
              <th>UserID</th>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="u in listUsers" v-bind:key="u.Id">
              <td>{{u.Id}}</td>
              <td>{{u.Username}}</td> 
              <td>{{u.FName}}</td> 
              <td>{{u.LName}}</td>
            </tr> 
          </tbody>
        </table>
        <!-- <router-view @authenticated="setAuthenticated"/> -->
    </div>
</template>

<script>
export default {
  name: "Admin",
  props: [ 'listUsers' ],
  // data() {
  //   return {
  //     // authenticated: false,
  //     listUsers: this.listUsers
  //   };
  // },
  // mounted() {
  //   if(!this.authenticated) {
  //       this.$router.replace({ name: "Login" });
  //   }
  // },
  // methods: {
  //   setAuthenticated(status) {
  //       this.authenticated = status;
  //   }
  // }
};
</script>