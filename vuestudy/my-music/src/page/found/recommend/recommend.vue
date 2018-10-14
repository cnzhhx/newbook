<template>
  <div class="recommend">
    <div class="recommend1">
      <div class="recommend2">
        <div class="block">
          <el-carousel trigger="click" height="336px" arrow="always">
            <el-carousel-item v-for="(img, index) in images" :key="index">
              <img :src="img.img"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="pangB">
        <a @mouseenter="enterdown($event)" @mouseleave="leavedown($event)" class="aaaa"></a>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </div>
    </div>
    <div class="recommendBody">
      <div class="recommendBodyLeft">
        <div class="recommendBodyRightTop">
          <div class="r-brt-1">
            <a class="r-brt-1-a">热门推荐</a>
            <div>
              <a>华语</a>
              <span>|</span>
              <a>流行</a>
              <span>|</span>
              <a>摇滚</a>
              <span>|</span>
              <a>民谣</a>
              <span>|</span>
              <a>电子</a>
            </div>
          </div>
          <div class="r-brt-2">

          </div>
        </div>
      </div>
      <div class="recommendBodyRight">

      </div>
    </div>
  </div>
</template>


<script>

  export default {
    name: "recommend",
    methods: {
      enterdown(e) {
        e.target.className = "aaa";
      },
      leavedown(e) {
        e.target.className = "aaaa";
      }
    },
    data () {
      return {
        images: [
          {img: require("../../../assets/网易轮播图images/1.jpg")},
          {img: require("../../../assets/网易轮播图images/2.jpg")},
          {img: require("../../../assets/网易轮播图images/3.jpg")},
          {img: require("../../../assets/网易轮播图images/4.jpg")},
          {img: require("../../../assets/网易轮播图images/5.jpg")},
        ]
      }
    }
  }
</script>


<style>
  *{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .recommend{
    margin-top: 1px;
    width: 100%;
    height: 336px;
  }
  .recommend1{
    width: 990px;
    margin: 0 auto;
  }
  .recommend2{
    height: 336px;
    width: 730px;
    display: inline-block;
  }

  .el-carousel__item img {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 336px;
    vertical-align: top;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .pangB{
    display: inline-block;
    width: 254px;
    height: 336px;
    background: url("../../../assets/download.png") no-repeat 0 0;
    vertical-align: top;
    margin-left: -4px;
    z-index: 1;
  }
  .aaa{
    display: block;
    width: 215px;
    height: 56px;
    margin: 212px 20px 0 19px;
    text-indent: -9999px;
    background: url("../../../assets/download.png") no-repeat 0  -340px;
    z-index: 100;
  }
  .aaaa{
    display: block;
    width: 215px;
    height: 56px;
    margin: 212px 20px 0 19px;
    text-indent: -9999px;
  }
  .pangB p{
    margin: 15px auto;
    text-align: center;
    color: #8d8d8d;
    font-size: 12px;
  }

  .recommendBody{
    width: 982px;
    min-height: 700px;
    margin: 0 auto;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
  }
  .recommendBodyLeft{
    width: 729px;
    height: 500px;
    float: left;
  }
  .recommendBodyRight{
    width: 250px;
    height: 500px;
    float: right;
  }
  .recommendBodyRightTop{
    padding: 20px 20px 40px;
    width: 689px;
    height: 523px;
  }
  .r-brt-1{
    height: 33px;
    padding: 0 10px 0 34px;
    border-bottom: 2px solid #C10D0C;
    background: url("../../../assets/index.png") no-repeat -225px -156px;
  }
  .r-brt-1-a{
    color: #333;
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    text-decoration: none;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }
</style>
