<template>
<div class='navbar'>
    <router-link :to="{ name: 'Homepage'}">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/resetpw">Reset Password</router-link>
    <router-link to="/admin">Admin</router-link>
    <router-link to="/vnews">News</router-link>
    <router-link to="/vweather">Weather</router-link>
    <hr/>
    <router-view/>
</div>
</template>

<script>
    export default {
        name: 'Navbar',
        data(){
            return {

            }
        }
    }
</script>