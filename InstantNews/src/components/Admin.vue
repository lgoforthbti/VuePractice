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
            <tr v-for="u in users" v-bind:key="u.Id">
              <td>{{u.Id}}</td>
              <td>{{u.Username}}</td> 
              <td>{{u.FName}}</td> 
              <td>{{u.LName}}</td>
            </tr> 
          </tbody>
        </table>
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
          FName: "John",
          LName: "Smith",
          Email: "test1@test.com"
        },
        {
          Id: 2,
          Username: "Test2",
          FName: "Jane",
          LName: "Doe",
          Email: "test2@test.com"
        },
        {
          Id: 3,
          Username: "Test3",
          FName: "Shirley",
          LName: "Temple",
          Email: "test3@test.com"
        }
      ]
    };
  }
};
</script>