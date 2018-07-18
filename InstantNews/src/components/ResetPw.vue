<template>
    <div class="resetpw">
        <h1>Reset Password</h1>
        <input type='text' name="currentpw" v-model="input.currentpw" placeholder="Current Password">
        <br>
        <br>
        <input type='text' name="newpw" v-model="input.newpw" placeholder="New Password">
        <br>
        <br>
        <button type="button" v-on:click="updatepw()">Update Password</button>
        <button type="button" v-on:click="cancel()">Cancel</button>
    </div>
</template>

<script>
export default{
    name: 'ResetPw',
    data() {
        return {
            input: {
                currentpw: "",
                newpw: ""
            }

        }
    },
    methods: {
        updatepw() {

        },
        cancel() {
            this.$router.replace({ name: "Homepage" });
        }
    }
}
</script>