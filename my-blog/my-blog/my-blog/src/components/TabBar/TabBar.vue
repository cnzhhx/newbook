<template>
    <div class="pagetop">
        <div class="top-bar">
            <div id="xiaozh">小zh个人博客</div>
            <div class="Right" @click="switchTo('/message');select($event)">留言</div>
            <div class="Right" @click="switchTo('/note');select($event)">博客笔记</div>
            <div class="Right" @click="switchTo('/about');select($event)">关于我</div>
            <div class="Right" @click="switchTo('/first');select($event)">网站首页</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        data() {
            return {

            };
        },
        mounted() {
            let Right = document.getElementsByClassName("Right");
            const lujing = this.$route.path;
            for(let i=0; i<Right.length; i++) {
                Right[i].className = "Right";
            }
            if(lujing.indexOf("/first") === 0){
                Right[3].className = "Right taCor";
            }else if(lujing.indexOf("/note") === 0){
                Right[1].className = "Right taCor";
            }else if(lujing.indexOf("/about") === 0){
                Right[2].className = "Right taCor";
            }else if(lujing.indexOf("/message") === 0){
                Right[0].className = "Right taCor";
            }
        },
        watch: {
          $route(to, from)  {
              let Right = document.getElementsByClassName("Right");
              const lujing = this.$route.path;
              for(let i=0; i<Right.length; i++) {
                  Right[i].className = "Right";
              }
              if(lujing.indexOf("/first") === 0){
                  Right[3].className = "Right taCor";
              }else if(lujing.indexOf("/note") === 0){
                  Right[1].className = "Right taCor";
              }else if(lujing.indexOf("/about") === 0){
                  Right[2].className = "Right taCor";
              }else if(lujing.indexOf("/message") === 0){
                  Right[0].className = "Right taCor";
              }
          }
        },
        methods: {
            switchTo(path) {
                this.$router.replace(path);
            },
            select(e) {
                let Right = document.getElementsByClassName('Right');
                for(let i=0; i<Right.length; i++) {
                    Right[i].className = "Right";
                }
                e.target.className = "Right taCor";
                }

        }
    }
</script>

<style>
    .pagetop{
        width: 60%;
        padding: 0 20%;
        background-color: rgb(84, 92, 100);
        height: 60px;
    }
    #xiaozh{
        float: left;
        height: 60px;
        line-height: 60px;
        font-size: 20px;
        color: rgb(255, 255, 255);
    }
    .Right{
        float: right;
        color: rgb(255, 255, 255);
        height: 60px;
        line-height: 60px;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 15px;
        cursor: pointer;
        background-color: rgb(84, 92, 100);;
    }
    .Right:hover{
        background-color: rgb(67, 74, 80);
        color: #ffd04b;
        border-bottom: 2px solid #ffd04b;
    }
    .taCor{
        background-color: rgb(67, 74, 80);
        color: #ffd04b;
        border-bottom: 2px solid #ffd04b;
    }
</style>

