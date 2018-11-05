<template>
  <div id="app">
    <TabBar></TabBar>
    <router-view></router-view>
    <Login></Login>
  </div>
</template>

<script>
  import TabBar from './components/TabBar/TabBar'
  import Login from "./components/Login/Login";

export default {
  name: 'App',
  components:{
    Login,
    TabBar
  },
  beforeCreate(){
    this.$router.replace("/found/recommend");
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
