<template>
    <div class="top-bar">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <div id="xiaozh">小zh个人博客</div>
            <el-menu-item index="1" @click="switchTo('/first')">网站首页</el-menu-item>
            <el-menu-item index="2" @click="switchTo('/about')">关于我</el-menu-item>
            <el-menu-item index="3" @click="switchTo('/note')">博客笔记</el-menu-item>
            <el-menu-item index="4" @click="switchTo('/message')">留言</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        data() {
            return {
                activeIndex: '1',
                screenWidth: document.body.clientWidth   // 这里是给到了一个默认值
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            switchTo(path) {
                this.$router.replace(path);
            },
        },

        mounted () {
            const that = this;
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth;
                    that.screenWidth = window.screenWidth
                })()
            }
            let xiaozh = document.getElementById("xiaozh");
            let leftz = document.getElementsByClassName("top-bar")[0];
            xiaozh.style.left = leftz.offsetWidth*0.2 + "px";
        },
        watch: {
            screenWidth (val) {
                this.screenWidth = val;
                let xiaozh = document.getElementById("xiaozh");
                let leftz = document.getElementsByClassName("top-bar")[0];
                xiaozh.style.left = leftz.offsetWidth*0.2 + "px";
            }
        }
    }
</script>

<style>
    #xiaozh{
        position: absolute;
        color: rgb(255, 255, 255);
        border-bottom-color: transparent;
        background-color: rgb(84, 92, 100);
        left: 50px;
        top: 15px;
        font-size: 20px;
    }
    .el-menu-demo{
        padding-left: 60%;
        position: relative;
    }
</style>
