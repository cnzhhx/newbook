<template>
    <div id="app">
        <TabBar></TabBar>
        <router-view></router-view>
        <BiuBiu class="biubiu"></BiuBiu>
        <Bottom></Bottom>
    </div>
</template>

<script>
import TabBar from "./components/TabBar/TabBar";
import BiuBiu from "./components/BiuBiu/BiuBiu";
import Bottom from "./components/Bottom/Bottom";
export default {
    name: 'App',
    components: {
        Bottom,
        BiuBiu,
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
    .biubiu{
        position: fixed;
        top: 70%;
        left: 90%;
    }
</style>
