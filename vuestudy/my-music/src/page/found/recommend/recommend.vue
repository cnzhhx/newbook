<template>
  <div class="recommend">
    <div id="bianse">
      <div class="recommend1">
        <div class="recommend2">
          <div class="block">
            <el-carousel trigger="click" height="336px" arrow="always"  @change="change($event)">
              <el-carousel-item v-for="(img, index) in $store.state.images" :key="index">
                <img :src="img.img"/>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="pangB">
          <a @mouseenter="enterdown($event)" @mouseleave="leavedown($event)" @click="switchTo('/down');selectd()" class="aaaa"></a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
      </div>
    </div>
    <div class="recommendBody">
      <div class="recommendBodyRight">
        <div class="recommendBodyRightTop">
          <div class="r-brt-1">
            <a class="r-brt-1-a"  @click="switchTo('/found/songSheet');select1()">热门推荐</a>
            <div class="r-brt-1-d">
              <a @click="switchTo('/found/songSheet');select1()">华语</a>
              <span>|</span>
              <a @click="switchTo('/found/songSheet');select1()">流行</a>
              <span>|</span>
              <a @click="switchTo('/found/songSheet');select1()">摇滚</a>
              <span>|</span>
              <a @click="switchTo('/found/songSheet');select1()">民谣</a>
              <span>|</span>
              <a @click="switchTo('/found/songSheet');select1()">电子</a>
            </div>
            <span class="r-brt-1-s">
              <a @click="switchTo('/found/songSheet');select1()">更多</a>
              <i>&nbsp</i>
            </span>
          </div>
          <ul class="r-brt-2">
            <li v-for="(hotRecommend, index) in $store.state.hotRecommends" :key="index" @click="switchTo('/found/songSheet');select1()">
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
      <div class="recommendBodyLeft">
        <div class="recommendBodyLeftTop">
          <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <a>用户登录</a>
        </div>
        <div class="recommendBodyLeftCenter">
          <h3>
            <span>入驻歌手</span>
            <a>查看全部 ></a>
          </h3>
          <ul class="r-blc-ul">
            <li v-for="(singer, index) in $store.state.singers" :key="index">
              <a>
                <div class="r-blc-ul-d1">
                  <img :src="singer.img"/>
                </div>
                <div class="r-blc-ul-d2">
                  <h4>
                    <span>{{singer.name}}</span>
                  </h4>
                  <p>{{singer.introduce}}</p>
                </div>
              </a>
            </li>
          </ul>
          <div class="r-blc-d">
            <a>
              <i>申请成为网易音乐人</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    name: "recommend",
    mounted(){
      this.$store.dispatch('reqRecommends');
      this.$store.dispatch('reqImages');
      this.$store.dispatch('reqSinger');
    },

    methods: {
      enterdown(e) {
        e.target.className = "aaa";
      },
      leavedown(e) {
        e.target.className = "aaaa";
      },
      change(e){
        let bianse = document.getElementById('bianse');
        bianse.style.backgroundColor = this.$store.state.images[e].color;
      },
      switchTo(path) {
        this.$router.replace(path);
      },
      select1() {
        let yanShi = document.getElementsByClassName('em em1')[0];
        let goal = document.getElementById("songSheet");
        yanShi.className = "em1";
        goal.className = "em em1";
        goal.className = "em em1";
      },
      selectd() {
        let yanShi = document.getElementsByClassName('select')[0];
        let down = document.getElementById("down");
        yanShi.className = "";
        let cor = document.getElementsByClassName('cor')[0];
        down.className = "select";
        cor.style.display = "none";
      }
    },
    data () {
      return {

      }
    }
  }
  //  recommendBody中left跟right颠倒了   请注意
</script>


<style scoped>
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
  .recommendBodyRight{
    width: 729px;
    height: 500px;
    float: left;
  }
  .recommendBodyLeft{
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
  .recommendBodyLeftTop{
    height: 126px;
    padding-top: 0;
    background: url("../../../assets/index.png") no-repeat 0 0;
  }
  .recommendBodyLeftTop p{
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    color: #666;
    font-size: 12px;
  }
  .recommendBodyLeftTop a{
    display: block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    margin: 0 75px;
    background: url("../../../assets/index.png") no-repeat 0 -195px;
    font-size: 12px;
  }
  .recommendBodyLeftTop a:hover{
    display: block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    margin: 0 75px;
    background: url("../../../assets/index.png") no-repeat -110px -195px;
    font-size: 12px;
  }
  .recommendBodyLeftCenter{
    margin-top: 15px;
  }
  .recommendBodyLeftCenter h3{
    position: relative;
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
  }
  .recommendBodyLeftCenter h3 span{
    float: left;
    color: #333;
    font-size: 12px;
  }
  .recommendBodyLeftCenter h3 a{
    float: right;
    font-weight: normal;
    color: #666;
  }
  .r-blc-ul{
    margin: 6px 0 14px 20px;
  }
  .r-blc-ul li{
    margin-top: 14px;
    float: left;
    width: 210px;
    height: 62px;
    background: #fafafa;
  }
  .r-blc-ul li a{
    float: left;
    width: 210px;
    height: 62px;
    background: #fafafa;
    font-size: 12px;
  }
  .r-blc-ul-d1{
    float: left;
    width: 62px;
    height: 62px;
  }
  .r-blc-ul-d2{
    float: left;
    width: 133px;
    height: 60px;
    padding-left: 14px;
    border: 1px solid #e9e9e9;
    border-left: none;
  }
  .r-blc-ul-d1 img{
    float: left;
    width: 62px;
    height: 62px;
  }
  .r-blc-ul-d2 h4{
    margin-top: 8px;
  }
  .r-blc-ul-d2 h4 span{
    width: 90%;
    font-size: 14px;
    margin-left: -20px;
    color: #333;
    display: inline-block;
  }
  .r-blc-ul-d2 p{
    width: 90%;
    font-size: 12px;
    color: #666;
    margin-top: 8px;
  }
  .r-blc-d{
    width: 250px;
    height: 31px;
    float: left;
    margin-top: 10px;
  }
  .r-blc-d a{
    margin-left: 20px;
    border-radius: 4px;
    color: #333;
    padding: 0 5px 0 0;
    background: url("../../../assets/button2.png") no-repeat right -100px;
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
  }
  .r-blc-d a i{
    width: 170px;
    color: #333;
    font-weight: bold;
    background: url("../../../assets/button2.png") no-repeat 0 -59px;
    padding: 0 15px 0 20px;
    pointer-events: none;
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    font-style: normal;
    font-size: inherit;
    font-family: Arial, Helvetica, sans-serif;
    word-break: break-word;
  }
</style>

