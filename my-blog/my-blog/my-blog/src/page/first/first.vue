<template>
    <div class="First">
        <div class="block">
            <el-carousel trigger="click" height="300px">
                <el-carousel-item v-for="(img, index) in ImgFirst" :key="index">
                    <img :src="img.img"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="leftbox">
            <div class="tuijian">
                <h2 class="hometitle">
                    <span></span>
                    特别推荐
                </h2>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "first",
        data() {
            return {
                ImgFirst: [
                    {img: require("./../../assets/banner01.jpg")},
                    {img: require("./../../assets/banner02.jpg")}
                ]
            }
        }
    }
</script>

<style scoped>
    .First{
        background: #f1f1f1;
    }
    .block{
        margin-top: 20px;
        width: 60%;
        margin-left: 20%;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .leftbox{
        width: 40%;
        float: left;
        overflow: hidden;
        margin-left: 20%;
    }
    .tuijian{
        background: #fff;
        overflow: hidden;
        width: 100%;
        clear: both;
        border-radius: 10px;
    }
    .hometitle{
        padding: 0 10px;
        line-height: 40px;
        height: 40px;
        font-size: 18px;
        border-bottom: #000 2px solid;
        position: relative;
    }
    .hometitle span{
        float: right;
        font-weight: normal;
        font-size: 14px;
        height: 42px;
        overflow: hidden;
        position: absolute;
        right: 0;
        width: 100%;
        text-align: right;
    }
    .tuijian ul{
        overflow: hidden;
        padding: 20px 10px;
        position: relative;
    }
</style>
