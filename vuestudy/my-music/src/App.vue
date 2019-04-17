<template>
  <div id="app">
    <TabBar></TabBar>
    <router-view></router-view>
    <Login></Login>
    <play></play>
  </div>
</template>

<script>
  import TabBar from './components/TabBar/TabBar'
  import Login from "./components/Login/Login";
  import Play from "./components/play/play";

export default {
  name: 'App',
  created(){
    this.$store.dispatch('getUserInfo')
  },
  components:{
    Play,
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
