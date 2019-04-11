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
                        <mu-list-item button>
                            <mu-list-item-content>
                                <mu-list-item-title>Menu Item 1</mu-list-item-title>
                            </mu-list-item-content>
                        </mu-list-item>
                        <mu-list-item button>
                            <mu-list-item-content>
                                <mu-list-item-title>Menu Item 2</mu-list-item-title>
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
        props: ["model"],
        mounted() {
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
                //电脑版一定范围自适应

                const that = this;
                window.onresize = function () {
                    this.TopBalWidth = document.getElementsByClassName("pagetop")[0].style.width*10/6;
                    console.log(that.TopBalWidth);
                };

                // if( this.TopBalWidth > 747){
                //     for(let i=0; i<4; i++){
                //         Right[i].style.fontSize = 15+"px";
                //         Right[i].style.paddingLeft = 15+"px";
                //         Right[i].style.paddingRight = 15+"px";
                //     }
                //     xiaozh.style.fontSize = 20+"px";
                // }else if(this.TopBalWidth<747&&this.TopBalWidth>615){
                //     for(let i=0; i<4; i++){
                //         Right[i].style.fontSize = 10+"px";
                //         Right[i].style.paddingLeft = 10+"px";
                //         Right[i].style.paddingRight = 10+"px";
                //     }
                //     xiaozh.style.fontSize = 20+"px";
                // }else if(this.TopBalWidth<615){
                //     for(let i=0; i<4; i++){
                //         Right[i].style.fontSize = 7+"px";
                //         Right[i].style.paddingLeft = 5+"px";
                //         Right[i].style.paddingRight = 5+"px";
                //     }
                //     xiaozh.style.fontSize = 15+"px";
                // }

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


            TopBalWidth (val) {
                this.TopBalWidth = val;
                console.log(that.TopBalWidth);
                let Right = document.getElementsByClassName("Right");
                let xiaozh = document.getElementById("xiaozh");
                // if( this.TopBalWidth > 747){
                //     for(let i=0; i<4; i++){
                //         Right[i].style.fontSize = 15+"px";
                //         Right[i].style.paddingLeft = 15+"px";
                //         Right[i].style.paddingRight = 15+"px";
                //     }
                //     xiaozh.style.fontSize = 20+"px";
                // }else if(this.TopBalWidth<747&&this.TopBalWidth>615){
                //     for(let i=0; i<4; i++){
                //         Right[i].style.fontSize = 10+"px";
                //         Right[i].style.paddingLeft = 10+"px";
                //         Right[i].style.paddingRight = 10+"px";
                //     }
                //     xiaozh.style.fontSize = 20+"px";
                // }else if(this.TopBalWidth<615){
                //     for(let i=0; i<4; i++){
                //         Right[i].style.fontSize = 7+"px";
                //         Right[i].style.paddingLeft = 5+"px";
                //         Right[i].style.paddingRight = 5+"px";
                //     }
                //     xiaozh.style.fontSize = 15+"px";
                //
                // }
            }
        },
        methods: {
            switchTo(path) {
                this.$router.push(path);
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
        width: 100%;
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

