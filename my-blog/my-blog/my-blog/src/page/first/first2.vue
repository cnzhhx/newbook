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
            <div>
                <p>关于我</p>
                <hr>
            </div>
            <p class="aboutp">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp您好，我现在是一名湖南工程学院大二学生，软件工程专业。从小对计算机感兴趣，读大学后开始自学前端。不浮躁，学习能力还算ok。</p>
            <p class="aboutp">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp暂时目标是朝着全栈发展,正在学习vue，nodejs等一些技术（仅仅能够使用一部分），写过响应式布局，移动端页面，pc端页面。</p>
        </div>
        <div></div>
        <div></div>
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
        height: 2000px;
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
    }
</style>
