<template>
    <div id="app">
        <TabBar class="TabBar"></TabBar>
        <router-view class="view"></router-view>
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
    },
    created () {
        setTimeout(() => {
            //萌萌的看板娘
            window.L2Dwidget.init({
                pluginRootPath: 'static/live2dw/',
                pluginJsPath: 'lib/',
                pluginModelPath: 'live2d-widget-model-koharu/assets/',
                tagMode: false,
                debug: false,
                model: { jsonPath: '/static/live2dw/live2d-widget-model-koharu/assets/koharu.model.json' },
                display: { position: 'left', width: 150, height: 300 },
                mobile: { show: true },
                log: false
            })
        }, 1000)
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    #app{
        min-width: 1000px;
    }
    .biubiu{
        position: fixed;
        top: 70%;
        left: 90%;
    }
    .TabBar{
        position: fixed;
        min-width: 1000px;
        top: 0;
        z-index: 10000;
    }
    .view{
        margin-top: 50px;
    }
</style>



