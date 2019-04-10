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
        if (/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Fennec|BlackBerry|Mobile|IEMobile|MQQBrowser|JUC|Fennec|WosBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)) {

//如果是移动端，则跳转到移动端对应的页面；否则，跳转到PC端对应的页面
            this.$router.replace("/first2");

        } else {
            this.$router.replace("/first");
        }
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



