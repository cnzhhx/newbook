<template>
    <div class="pagetop">
        <div class="top-bar">
            <div id="xiaozh">小zh个人博客</div>
            <div class="Right" @click="switchTo('/message');select($event)">留言</div>
            <div class="Right" @click="switchTo('/note');select($event)">博客笔记</div>
            <div class="Right" @click="switchTo('/about');select($event)">关于我</div>
            <div class="Right" @click="switchTo('/first');select($event)">网站首页</div>
        </div>
        <div class="top-bar2">
            <mu-appbar style="width: 100%; height: 65px" color="#545C64">
                个人简历
                <mu-menu slot="right">
                    <mu-button flat>MENU</mu-button>
                    <mu-list slot="content">
                        <mu-list-item button @click.prevent="Return(0)">
                            <mu-list-item-content>
                                <mu-list-item-title>首页</mu-list-item-title>
                            </mu-list-item-content>
                        </mu-list-item>
                        <mu-list-item button @click.prevent="Return(500)">
                            <mu-list-item-content>
                                <mu-list-item-title>关于我</mu-list-item-title>
                            </mu-list-item-content>
                        </mu-list-item>
                        <mu-list-item button @click.prevent="Return(800)">
                            <mu-list-item-content>
                                <mu-list-item-title>前端技能</mu-list-item-title>
                            </mu-list-item-content>
                        </mu-list-item>
                        <mu-list-item button @click.prevent="Return(1750)">
                            <mu-list-item-content>
                                <mu-list-item-title>学习经历</mu-list-item-title>
                            </mu-list-item-content>
                        </mu-list-item>
                        <mu-list-item button @click.prevent="Return(2350)">
                            <mu-list-item-content>
                                <mu-list-item-title>我的作品</mu-list-item-title>
                            </mu-list-item-content>
                        </mu-list-item>
                        <mu-list-item button @click.prevent="Return(3200)">
                            <mu-list-item-content>
                                <mu-list-item-title>留言</mu-list-item-title>
                            </mu-list-item-content>
                        </mu-list-item>
                    </mu-list>
                </mu-menu>
            </mu-appbar>
        </div>
    </div>
</template>

<!--onresize="this.TopBalWidth = document.getElementsByClassName('pagetop')[0].style.width*10/6;"-->
<script>
    export default {
        name: "TabBar",
        data(){
            return{
                scrollTop:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            }
        },
        props: ["model"],
        mounted() {
            window.addEventListener('scroll', this.handleScroll);



            const luJing = this.$route.path;
            let Right = document.getElementsByClassName("Right");
            let xiaozh = document.getElementById("xiaozh");
            let top_bar = document.getElementsByClassName("top-bar")[0];
            let top_bar2 = document.getElementsByClassName("top-bar2")[0];
            let pagetop = document.getElementsByClassName("pagetop")[0];
            
            //更改手机版
            if(luJing === "/first2"){
                top_bar.style.display = "none";
                pagetop.style.padding = "";
            }else{ 
                top_bar2.style.display = "none";
                pagetop.style.padding = "0 20%";
            }
            
            //路径
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
              //路径
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
        },
        methods: {
            handleScroll () {
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            },

            switchTo(path) {
                this.$router.push(path);
            },
            select(e) {
                let Right = document.getElementsByClassName('Right');
                for(let i=0; i<Right.length; i++) {
                    Right[i].className = "Right";
                }
                e.target.className = "Right taCor";
            },

            Return(end){

                let begin = this.scrollTop, timer = null;

                //清除定时器
                clearInterval(timer);

                //开启缓动动画
                timer = setInterval(function () {
                    begin = begin + (end - begin) * 0.2;
                    window.scrollTo(0,begin);

                    //清除定时器
                    if(Math.round(begin) === end) {
                        clearInterval(timer);
                    }
                }, 15);
            }

        }
    }
</script>

<style>
    .pagetop{
        width: 100%;
        min-width: 1000px;
        background-color: rgb(84, 92, 100);
        height: 60px;
    }
    .top-bar{
        width: 100%;
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

