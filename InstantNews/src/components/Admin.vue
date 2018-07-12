<template>
    <div class="admin">
        <ol></ol>
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
          Username: "Test1",
          FName: "Testfn",
          LName: "Testln",
          Email: "test1@test.com"
        },
        {
          Username: "Test2",
          FName: "Testfn",
          LName: "Testln",
          Email: "test2@test.com"
        },
        {
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