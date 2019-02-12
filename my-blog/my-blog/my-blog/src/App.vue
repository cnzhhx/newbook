<template>
    <div id="app">
        <TabBar></TabBar>
        <router-view></router-view>
    </div>
</template>

<script>
import TabBar from "./components/TabBar/TabBar";
export default {
    name: 'App',
    components: {
        TabBar
    },
    beforeCreate(){
        this.$router.replace("/first");
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
