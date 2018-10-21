<template>
  <div class="songSheet">
    <div class="songSheetBig">
      <div class="songSheetBigCenter">
        <div class="s-sbc-t">
          <h3>
            <span>全部</span>
          </h3>
          <a class="s-sbc-t-a">
            <i>
              选择分类
              <em></em>
            </i>
          </a>
          <div class="s-sbc-t-r">
            <a class="reMen" @click="bianSe($event)">热门</a>
            <a class="new1" @click="bianSe2($event)">最新</a>
          </div>
        </div>
        <ul class="r-brt-2">
          <li v-for="(hotRecommend, index) in $store.state.GeRecommends" :key="index">
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
        <div></div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Bottom from '../../../components/Bottom/Bottom'


  export default {
    name: "songSheet",
    components:{
      Bottom
    },
    data () {
      return {
      }
    },
    mounted() {
      this.$store.dispatch("reqGeRecommends");
    },

    methods: {
      bianSe(e) {
        let ssbctr = document.getElementsByClassName('s-sbc-t-r')[0];
        let new1 = document.getElementsByClassName('new1')[0];
        ssbctr.style.backgroundPosition = "0 0";
        e.target.style.color = "#fff";
        new1.style.color = "#333";
      },
      bianSe2(e) {
        let ssbctr = document.getElementsByClassName('s-sbc-t-r')[0];
        let reMen = document.getElementsByClassName('reMen')[0];
        ssbctr.style.backgroundPosition = " 0 -32px";
        e.target.style.color = "#fff";
        reMen.style.color = "#333";
      },
    },
  }
</script>

<style>
  *{
    font-size: 12px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
  }
  .songSheet{
    margin-top: 1px;
    height: 1300px;
  }
  .songSheetBig{
    width: 980px;
    margin: 0 auto;
    background-color: #fff;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    height: 1300px;
  }
  .songSheetBigCenter{
    padding: 40px;
    position: relative;
    height: 1300px;
  }
  .s-sbc-t{
    height: 40px;
    border-bottom: 2px solid #c20c0c;
  }
  .s-sbc-t h3{
    float: left;
    font-size: 24px;
    font-weight: normal;
  }
  .s-sbc-t h3 span{
    font-size: 24px;
    font-weight: normal;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    color: #333;
  }
  .s-sbc-t-a{
    font-size: 12px;
    font-weight: normal;
    margin: 2px 0 0 12px;
    color: #333;
    padding: 0 5px 0 0;
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    background: url("../../../assets/button2.png") no-repeat right -100px;
  }
  .s-sbc-t-a i{
    color: #0c73c2 !important;
    padding: 0 10px 0 15px;
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    font-size: inherit;
    font-weight: normal;
    background: url("../../../assets/button2.png") no-repeat 0 -59px;
    font-style: normal;
  }
  .s-sbc-t-a i em{
    margin-left: 5px;
    width: 8px;
    height: 5px;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    background: url("../../../assets/icon.png") no-repeat  -70px -543px;
  }
  .s-sbc-t-r{
    width: 93px;
    height: 29px;
    display: inline-block;
    background: url("../../../assets/button.png") no-repeat 0 0;
    float: right;
  }
  .reMen{
    color: #fff;
    float: left;
    width: 46px;
    height: 29px ;
    line-height: 29px;
    text-align: center;
    font-size: 12px;
  }
  .new1{
    float: left;
    font-size: 12px;
    width: 46px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    color: #333;
  }
  .r-brt-2{
    margin: 30px 0 0 -50px;
  }
  .r-brt-2 li{
    width: 140px;
    height: 188px;
    float: left;
    display: inline-block;
    overflow: hidden;
    padding: 0 0 30px 50px;
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
