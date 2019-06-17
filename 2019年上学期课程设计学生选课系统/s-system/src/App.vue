<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    beforeCreate(){
        this.$router.replace("/selectCourses/first");
    }
}
</script>

<style>

</style>
