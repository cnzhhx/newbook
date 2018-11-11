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
        <div class="recommendBodyRightCenter">
          <div class="r-brc-d1">
            <a class="r-brc-d1-a">新碟上架</a>
            <span class="r-brc-d1-s">
              <a>更多</a>
              <i>&nbsp:</i>
            </span>
          </div>
          <div class="r-brc-d2">
            <div class="r-brc-d2-d">
              <div class="r-brc-d2-dd">
                <ul>
                  <li v-for="(album, index) in $store.state.albums" :key="index">
                    <div class="r-brc-d2-dd-d">
                      <img :src="album.img"/>
                      <a class="r-brc-d2-dd-d-a1"></a>
                      <a class="r-brc-d2-dd-d-a2"></a>
                    </div>
                    <p class="r-brc-d2-dd-p1">
                      <a>{{album.name}}</a>
                    </p>
                    <p class="r-brc-d2-dd-p2">
                      <a>{{album.singer}}</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommendBodyLeft">
        <div v-if="$store.state.userInfo.id" class="recommendBodyLeftTop2">
          <div style="height: 87px;width: 250px;">
            <a class="r-blt-a">
              <img src="../../../assets/1384285139964405.jpg"/>
            </a>
            <div class="r-blt-d">
              <h4 style="overflow: hidden;">
                <a>Hao-Xiang</a>
              </h4>
              <p>
                <a>8<i></i></a>
              </p>
            </div>
          </div>
          <ul>
            <li class="r-blt-li1">
              <a>
                <strong>16</strong>
                <span>动态</span>
              </a>
            </li>
            <li class="r-blt-li2">
              <a>
                <strong>67</strong>
                <span>关注</span>
              </a>
            </li>
            <li class="r-blt-li3">
              <a>
                <strong>11</strong>
                <span>粉丝</span>
              </a>
            </li>
          </ul>
        </div>
        <div v-else class="recommendBodyLeftTop">
          <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <a   @click.prevent="loginPhone()">用户登录</a>
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
    <bottom></bottom>
  </div>
</template>


<script>
  import Bottom from '../../../components/Bottom/Bottom'


  export default {
    name: "recommend",
    components: {
      Bottom
    },
    mounted(){
      this.$store.dispatch('reqRecommends');
      this.$store.dispatch('reqImages');
      this.$store.dispatch('reqSinger');
      this.$store.dispatch('reqAlbum');
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
      },
      loginPhone(){
        let login = document.getElementById('login');
        login.style.display = 'inline-block';
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
    min-height: 900px;
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
  .recommendBodyRightCenter{
    margin-left: 20px;
    width: 689px;
  }
  .r-brc-d1{
    height: 33px;
    padding: 0 10px 0 34px;
    border-bottom: 2px solid #C10D0C;
    background: url("../../../assets/index.png") no-repeat -225px -156px;
  }
  .r-brc-d1-a{
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    color: #333;
  }
  .r-brc-d1-s{
    float: right;
    margin-top: 9px;
  }
  .r-brc-d1-s a{
    color: #666;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .r-brc-d1-s i{
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    vertical-align: middle;
    background: url("../../../assets/index.png") no-repeat 0 -240px;
  }
  .r-brc-d2{
    position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
  }
  .r-brc-d2-d{
    height: 184px;
    padding-left: 16px;
    background: #f5f5f5;
    border: 1px solid #fff;
  }
  .r-brc-d2-dd{
    float: left;
    width: 645px;
    height: 180px;
    overflow: hidden;
  }
  .r-brc-d2-dd ul{
    left: 20px;
    transition: none 0s ease 0s;
    position: absolute;
    top: 0;
    width: 645px;
    margin: 28px 0 0 0;
  }
  .r-brc-d2-dd ul li{
    float: left;
    display: inline;
    width: 118px;
    height: 150px;
    margin-left: 11px;
    background: url("../../../assets/index.png") no-repeat -260px 100px;
  }
  .r-brc-d2-dd-d{
    margin-bottom: 7px;
    width: 100px;
    height: 100px;
    position: relative;
  }
  .r-brc-d2-dd-d img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .r-brc-d2-dd-d-a1{
    width: 118px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    background: url("../../../assets/coverall.png") no-repeat 0 -570px;
  }
  .r-brc-d2-dd-d-a2{

  }
  .r-brc-d2-dd-p1{
    width: 90%;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 18px;
    word-wrap: normal;
    font-size: 12px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
  }
  .r-brc-d2-dd-p1 a{
    color: #000;
    height: 18px;
    line-height: 18px;
  }
  .r-brc-d2-dd-p2{
    width: 90%;
    height: 18px;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  .r-brc-d2-dd-p2 a{
    color: #666;
    height: 18px;
    line-height: 18px;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
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
  .recommendBodyLeftTop2{
    height: 165px;
    padding-top: 20px;
    background: url("../../../assets/index.png") no-repeat 0 -270px;
  }
  .r-blt-a{
    float: left;
    width: 80px;
    height: 80px;
    margin-left: 20px;
    padding: 2px;
    background: #fff;
    border: 1px solid #dadada;
  }
  .r-blt-a img{
    display: block;
    width: 80px;
    height: 80px;
  }
  .r-blt-d{
    float: left;
    width: 115px;
    margin-left: 18px;
    padding-top: 3px;
  }
  .r-blt-d h4{
    height: 18px;
  }
  .r-blt-d h4 a{
    width: auto;
    max-width: 100%;
    vertical-align: middle;
    font-size: 14px;
    color: #333;
    text-decoration: none;
    cursor: pointer;
  }
  .r-blt-d h4 a:hover{
    text-decoration: underline;
  }
  .r-blt-d p{
    width: 100%;
    margin-top: 5px;
  }
  .r-blt-d p a{
    display: inline-block;
    height: 17px;
    overflow: hidden;
    padding-left: 25px;
    line-height: 18px;
    color: #999;
    font-weight: bold;
    font-style: italic;
    background: url("../../../assets/icon2.png") no-repeat -130px -64px;
    cursor: pointer;
  }
  .r-blt-d p a:hover{
    color: #777;
    text-decoration: none;
    background: url("../../../assets/icon2.png") no-repeat -130px -84px;

  }
  .r-blt-d p a i{
    float: right;
    width: 8px;
    height: 17px;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    background: url("../../../assets/icon2.png") no-repeat -192px -64px;
  }
  .recommendBodyLeftTop2 ul{
    display: block;
    margin: 22px 0 0 20px;
  }
  .recommendBodyLeftTop2 ul li{
    list-style: none;
  }
  .recommendBodyLeftTop2 ul li a:hover{
    text-decoration: none;
    color: #0c73c2;
  }
  .r-blt-li1{
    float: left;
    height: 40px;
    padding: 0 18px 0 0;
    border-right: 1px solid #e4e4e4;
  }
  .r-blt-li1 a{
    display: block;
    color: #666;
    cursor: pointer;
  }
  .r-blt-li1 a strong{
    display: block;
    font-size: 20px;
    font-weight: normal;
    color: #666;
    cursor: pointer;
  }
  .r-blt-li2{
    float: left;
    height: 40px;
    padding: 0 18px;
    border-right: 1px solid #e4e4e4;
    list-style: none;
  }
  .r-blt-li2 a{
    display: block;
    color: #666;
    cursor: pointer;
  }
  .r-blt-li2 a strong{
    display: block;
    font-size: 20px;
    font-weight: normal;
    color: #666;
    cursor: pointer;
  }
  .r-blt-li3{
    border-right: none;
    float: left;
    height: 40px;
    padding: 0 0 0 18px;
  }
  .r-blt-li3 a{
    display: block;
    color: #666;
    cursor: pointer;
  }
  .r-blt-li3 a strong{
    display: block;
    font-size: 20px;
    font-weight: normal;
    color: #666;
    cursor: pointer;
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

