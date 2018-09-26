<template>
  <div id="app">
    <TabBar></TabBar>
  </div>
</template>

<script>
  import TabBar from './components/TabBar/TabBar'

export default {
  name: 'App',
  components:{
    TabBar
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
