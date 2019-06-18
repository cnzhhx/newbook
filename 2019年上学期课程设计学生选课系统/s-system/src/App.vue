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
    }
}
</script>

<style>

</style>
