<template>
  <div class="recommend">
    <div id="bianse">
      <div class="recommend1">
        <div class="recommend2">
          <div class="block">
            <el-carousel trigger="click" height="336px" arrow="always"  @change="change($event)">
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
    </div>
    <div class="recommendBody">
      <div class="recommendBodyLeft">
        <div class="recommendBodyRightTop">
          <div class="r-brt-1">
            <a class="r-brt-1-a">热门推荐</a>
            <div class="r-brt-1-d">
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
            <span class="r-brt-1-s">
              <a>更多</a>
              <i>&nbsp</i>
            </span>
          </div>
          <ul class="r-brt-2">
            <li v-for="(hotRecommend, index) in hotRecommends" :key="index">
              <div class="r-brt-2-d">
                <img :src="hotRecommend.img"/>
                <a class="r-brt-2-d-a" title="在这些孤单角色里，你是否找到了自己？"></a>
                <div>
                  <a></a>
                  <span class="r-brt-2-d-d-s"></span>
                  <span class="r-brt-2-d-d-s2">100万</span>
                </div>
              </div>
              <p class="r-brt-2-p">
                <a>{{hotRecommend.title}}</a>
              </p>
            </li>
          </ul>
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
      },
      change(e){
        let bianse = document.getElementById('bianse');
        bianse.style.backgroundColor = this.images[e].color;
      }
    },
    data () {
      return {
        images: [
          {img: require("../../../assets/网易轮播图images/1.jpg"), color:"rgb(222,221,219)"},
          {img: require("../../../assets/网易轮播图images/2.jpg"), color:"rgb(227,188,94)"},
          {img: require("../../../assets/网易轮播图images/3.jpg"), color:"rgb(236,249,261)"},
          {img: require("../../../assets/网易轮播图images/4.jpg"), color:"rgb(44,52,106)"},
          {img: require("../../../assets/网易轮播图images/5.jpg"), color:"rgb(244,217,228)"},
        ],
        hotRecommends: [
          {
            img: require("../../../assets/热门推荐images/109951163471486090.jpg"), title: "毛式土嗨（今天政委不在家.jpg）"
          },
          {
            img: require("../../../assets/热门推荐images/109951163520422030.jpg"), title: "「星空电子」充满自由，无限希望"
          },
          {
            img: require("../../../assets/热门推荐images/109951163560553058.jpg"), title: "写城市的歌"
          },
          {
            img: require("../../../assets/热门推荐images/109951163575819047.jpg"), title: "在这些孤单角色里，你是否找到了自己？"
          },
          {
            img: require("../../../assets/热门推荐images/109951163582829847.jpg"), title: " 苏谭谭-流浪合唱完整版"
          },
          {
            img: require("../../../assets/热门推荐images/109951163596401683.jpg"), title: "《太空乐鉴赏与简史》"
          },
          {
            img: require("../../../assets/热门推荐images/109951163598029062.jpg"), title: " 《以物易食》第2集：她写的书和一盘辣酱鱿鱼"
          },
          {
            img: require("../../../assets/热门推荐images/109951163598909773.jpg"), title: " 【马来西亚】原始雨林秘境中，邂逅历史遗迹洪荒盛景"
          }
        ]
      }
    },
    mounted: function() {

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
  }
  #bianse{
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
    margin-left: -5px;
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
  .r-brt-1-d{
    float: left;
    margin: 7px 0 0 20px;
    line-height: 16px;
  }
  .r-brt-1-d a{
    color: #666;
    font-size: 12px;
    float: left;
  }
  .r-brt-1-d a:hover{
    color: #666;
    text-decoration: underline;
    font-size: 12px;
    float: left;
  }

  .r-brt-1-d span{
    margin: 0 10px;
    color: #ccc;
    font-size: 12px;
    float: left;
  }
  .r-brt-1-s{
    float: right;
    margin-top: 9px;
    color: #333;
    font-size: 12px;
  }
  .r-brt-1-s a{
    color: #666;
    font-size: 12px;
  }
  .r-brt-1-s a:hover{
    color: #666;
    font-size: 12px;
    text-decoration: underline;
  }
  .r-brt-1-s i{
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    vertical-align: middle;
    background: url("../../../assets/index.png") no-repeat 0 -240px;
  }
  .r-brt-2{
    margin: 20px 0 0 -42px;
  }
  .r-brt-2 li{
    width: 140px;
    height: 204px;
    float: left;
    display: inline-block;
    overflow: hidden;
    padding: 0 0 30px 42px;
    line-height: 1.4;
  }
  .r-brt-2-d{
    width: 140px;
    height: 140px;
    position: relative;
    color: #333;
  }
  .r-brt-2-d-a{
    color: #333;
    font-size: 12px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../../../assets/coverall.png") no-repeat 0 0;
  }
  .r-brt-2-d div{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background: url("../../../assets/coverall.png") no-repeat 0 -537px;
    color: #ccc;
  }
  .r-brt-2-d div a{
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 16px;
    height: 17px;
    background: url("../../../assets/iconall.png") no-repeat 0 0;

    display: inline-block;
    float: right;
    color: #333;
  }
  .r-brt-2-d-d-s{
    float: left;
    width: 14px;
    height: 11px;
    margin: 9px 5px 9px 10px;
    display: inline-block;
    background: url("../../../assets/iconall.png") no-repeat 0 -24px;
  }
  .r-brt-2-d-d-s2{
    float: left;
    margin: 7px 0 0 0;
    color: #ccc;
    font-size: 12px;
  }
  .r-brt-2-p{
    margin: 8px 0 3px;
    font-size: 14px;
    color: #333;
  }
  .r-brt-2-p a{
    display: inline-block;
    max-width: 100%;
    color: #000;
    font-size: 14px;
    text-align: left;
  }
  .r-brt-2-p a:hover{
    display: inline-block;
    max-width: 100%;
    color: #000;
    font-size: 14px;
    text-align: left;
    text-decoration: underline;
  }
</style>

