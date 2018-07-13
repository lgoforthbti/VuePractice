<template>
    <div class="admin">
        <ol>
            <li v-for="u in users" v-bind:key="u.Id">{{u.Username, u.FName, u.LName, u.Email}}</li>
        </ol>
        <table>{{ users }}</table>
    </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      users: [
        {
          Id: 1,      
          Username: "Test1",
          FName: "Testfn",
          LName: "Testln",
          Email: "test1@test.com"
        },
        {
          Id: 2,
          Username: "Test2",
          FName: "Testfn",
          LName: "Testln",
          Email: "test2@test.com"
        },
        {
          Id: 3,
          Username: "Test3",
          FName: "Testfn",
          LName: "Testln",
          Email: "tes3t@test.com"
        }
      ]
    };
  }
};
</script>