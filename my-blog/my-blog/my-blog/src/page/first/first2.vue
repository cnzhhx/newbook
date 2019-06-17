<template>
    <div class="first2">
        <div class="top">
            <div class="xiaozhjpg">
                <img src="../../assets/-34550ac663a8f32b.jpg">
            </div>
            <p class="topp1">hello，我叫张浩翔</p>
            <p class="topp2">一名学习前端开发的学生</p>
            <p class="topp3">“Diligence is the mother of good fortune.”</p>
        </div>
        <div class="about">
            <div class="aboutd1">
                <p>关于我</p>
                <hr>
            </div>
            <p class="aboutp">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp您好，我现在是一名湖南工程学院大二学生，软件工程专业。从小对计算机感兴趣，读大学后开始自学前端。不浮躁，学习能力还算ok。</p>
            <p class="aboutp">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp暂时目标是朝着前端发展,正在学习vue，nodejs等一些技术（nodejs仅仅能够使用一部分，了解的程度），写过响应式布局，移动端页面，pc端页面。</p>
        </div>
        <div class="skills">
            <div class="aboutd1">
                <p>前端技能</p>
                <hr>
            </div>
            <p class="skillsp">
                1.熟悉Web前端技术，包括HTML、CSS、Javascript、AJAX、JSON、Cookie等。<br/>

                2.使用响应式布局,设备判断,解决不同移动端设备的适配和兼容问题<br/>

                3.熟悉vue库进行pc端项目快速开发。<br/>

                4.能够使用github进行代码管理。<br/>

                5.熟悉原生JS,熟悉JavaScript的面向对象编程，了解作用域以及闭包的原理。<br/>

                6.熟练使用Chrome 、Firefox等主流浏览器的开发人员工具调试页面。<br/>

                7.了解nodejs,了解mysql数据库，并对此有兴趣,期待向全栈方向发展<br/>
            </p>
            <div class="mui">
                <mu-container>
                    <p class="html5">HTML5</p>
                    <mu-flex class="demo-linear-progress">
                        <mu-linear-progress mode="determinate" :value="75"  :size="30" color="green"></mu-linear-progress>
                    </mu-flex>
                </mu-container>
            </div>
            <div class="mui">
                <mu-container>
                    <p class="html5">CSS3</p>
                    <mu-flex class="demo-linear-progress">
                        <mu-linear-progress mode="determinate" :value="70"  :size="30" color="orange"></mu-linear-progress>
                    </mu-flex>
                </mu-container>
            </div>
            <div class="mui">
                <mu-container>
                    <p class="html5">JAVASCRIPT</p>
                    <mu-flex class="demo-linear-progress">
                        <mu-linear-progress mode="determinate" :value="80"  :size="30" color="pink"></mu-linear-progress>
                    </mu-flex>
                </mu-container>
            </div>
            <div class="mui">
                <mu-container>
                    <p class="html5">VUE</p>
                    <mu-flex class="demo-linear-progress">
                        <mu-linear-progress mode="determinate" :value="60"  :size="30" color="skyblue"></mu-linear-progress>
                    </mu-flex>
                </mu-container>
            </div>
            <div class="mui">
                <mu-container>
                    <p class="html5">NODEJS</p>
                    <mu-flex class="demo-linear-progress">
                        <mu-linear-progress mode="determinate" :value="20"  :size="30" color="gray"></mu-linear-progress>
                    </mu-flex>
                </mu-container>
            </div>
            <div class="mui">
                <mu-container>
                    <p class="html5">MYSQL</p>
                    <mu-flex class="demo-linear-progress">
                        <mu-linear-progress mode="determinate" :value="40"  :size="30" color="yellow"></mu-linear-progress>
                    </mu-flex>
                </mu-container>
            </div>
        </div>
        <div class="experience">
            <div class="experience1">
                <p>学习经历</p>
                <hr>
            </div>
            <p class="experiencep">2017年进入大学</p>
            <p class="experiencep">2018年上半年开始自学前端，并且模仿了学校教务处的静态网页</p>
            <p class="experiencep">2018年暑假去了我表哥那，在他的帮助下，更加详细的了解了h5跟c3还有js，并学习了一定的vue知识</p>
            <p class="experiencep">2018年下半年通过自学简单使用vue nodejs mysql做了一个半成品的网易云音乐，实现了自适应布局，登录注册和一些基本功能。其中遇到了很多问题，类似于跨域，配置数据库、服务器，布局。从中也学到了很多调试bug的经验</p>
            <p class="experiencep">2018年寒假在家花了点时间用写网易云音乐的技术栈快速开发了我的博客（pc版），也就是当前这个网站，移动端跟pc端展示内容不同</p>
            <p class="experiencep">2019年上半年（这学期结束补充）</p>
        </div>
        <div class="sample_reels">
            <div class="sample_reel1">
                <p>我的作品</p>
                <hr>
            </div>
            <a class="sample_reela1" href="http://152.136.94.149:3001/" target="_blank">
                <img width="250px" height="250px" src="../../assets/20190412190857.png">
                <p>仿制网易云音乐开发的可实现登录注册（暂未增加听音乐功能，后面会加上）的简易网站</p>
            </a>
            <a class="sample_reela2" href="http://xiaozhqq.cn/" target="_blank">
                <img width="250px" height="250px" src="../../assets/20190412190552.png">
                <p>自己的小博客</p>
            </a>
        </div>
        <div class="liuyan">
            <div class="liuyan1">
                <p>留言</p>
                <hr>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "first2"
    }
</script>

<style scoped>
    .first2{
        background-color: rgb(241,241,241);
        height: 4000px;
        width: 100%;
    }
    .top{
        background-image:  url('../../assets/4721555e92120412e03c56d6857af908.jpeg');
        text-align: center;
    }
    .top p{
        color: rgb(255,245,225);
    }
    .xiaozhjpg{
        width: 100%;
        height: 300px;
        position: relative;
        text-align: center;
        padding-top: 100px;
    }
    .xiaozhjpg img{
        height: 100px;
        width: 100px;
        border-radius: 50%;
    }
    .topp1{
        font-size: 32px;
    }
    .topp2{
        font-size: 15px;
    }
    .topp3{
        padding-bottom: 100px;
        font-size: 18px;
    }
    .about{
        background-color: rgb(241,241,241);
        width: 100%;
        height: 200px;
    }
    .aboutd1{
        text-align: center;
    }
    .about div p{
        font-size: 36px;
        margin-top: 20px;
    }
    .about div hr{
        width: 200px;
        height: 5px;
        margin: 10px auto;
        border: none;
        background: #333;
    }
    .aboutp{
        margin: 20px;
        line-height: 30px;
    }
    .skills{
        background-color: rgb(241,241,241);
        width: 100%;
        height: 850px;
        margin-top: 100px;
    }
    .skills div p{
        font-size: 36px;
        margin-top: 20px;
    }
    .skills div hr{
        width: 200px;
        height: 5px;
        margin: 10px auto;
        border: none;
        background: #333;
    }
    .skillsp{
        margin: 20px;
        line-height: 30px;
    }
    .mui{
        margin: 20px;
    }
    .html5{
        font-size: 15px!important;
    }
    .experience{
        background-color: rgb(241,241,241);
        width: 100%;
        height: 500px;
        margin-top: 100px;
    }
    .experience div p{
        font-size: 36px;
        margin-top: 20px;
    }
    .experience div hr{
        width: 200px;
        height: 5px;
        margin: 10px auto;
        border: none;
        background: #333;
    }
    .experience1{
        text-align: center;
    }
    .experiencep{
        margin: 20px;
        line-height: 30px;
    }
    .sample_reels{
        background-color: rgb(241,241,241);
        width: 100%;
        height: 750px;
        margin-top: 100px;
        position: relative;
    }
    .sample_reels div p{
        font-size: 36px;
        margin-top: 20px;
    }
    .sample_reels div hr{
        width: 200px;
        height: 5px;
        margin: 10px auto;
        border: none;
        background: #333;
    }
    .sample_reel1{
        text-align: center;
    }
    .sample_reela1 img{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -125px;
    }
    .sample_reela1 p{
        position: absolute;
        left: 0;
        top: 50%;
        width: 60%;
        margin: 0 20% 0 20%;
        color: orangered;
    }
    .sample_reela2 img{
        position: absolute;
        top: 100%;
        left: 50%;
        margin-top: -200px;
        margin-left: -125px;
    }
    .sample_reela2 p{
        position: absolute;
        left: 0;
        top: 100%;
        width: 60%;
        margin: 0 20% 0 20%;
        color: orangered;
    }
    .liuyan{
        background-color: rgb(241,241,241);
        width: 100%;
        height: 750px;
        margin-top: 100px;
        position: relative;
    }
    .liuyan div p{
        font-size: 36px;
        margin-top: 20px;
    }
    .liuyan div hr{
        width: 200px;
        height: 5px;
        margin: 10px auto;
        border: none;
        background: #333;
    }
</style>
