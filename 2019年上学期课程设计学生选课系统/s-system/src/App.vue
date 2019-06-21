<template>
  <div id="app">
      <router-view/>
      <login></login>
  </div>
</template>

<script>
import Login from "./components/login";
export default {
    name: 'App',
    components: {Login},
    beforeCreate(){
        this.$router.replace("/selectCourses/first");
    },
    created(){
        this.$store.dispatch('getUserInfo');
        console.log(this.$store.state.userInfo)
    },
}
</script>

<style>

</style>
