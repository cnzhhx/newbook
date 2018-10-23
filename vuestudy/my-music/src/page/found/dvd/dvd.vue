<template>
  <div class="dvd">
    <div class="dvd1">
      <div class="dvd-center">
        <div class="dc-d1">
          <h3>
            <span>热门新碟</span>
          </h3>
        </div>
        <ul class="dc-ul1">
          <li v-for="(dvd, index) in dvds" :key="index">
            <div class="r-brc-d2-dd-d">
              <img :src="dvd.img"/>
              <a class="r-brc-d2-dd-d-a1"></a>
              <a class="r-brc-d2-dd-d-a2"></a>
            </div>
            <p class="r-brc-d2-dd-p1">
              <a>{{dvd.name}}</a>
            </p>
            <p class="r-brc-d2-dd-p2">
              <span>
                <a>{{dvd.singer}}</a>
              </span>
            </p>
          </li>
        </ul>
        <div class="dc-d2">
          <h3>
            <span>全部新碟</span>
          </h3>
          <div>
            <a>全部</a>
            <span>|</span>
            <a>华语</a>
            <span>|</span>
            <a>韩国</a>
            <span>|</span>
            <a>欧美</a>
            <span>|</span>
            <a>日本</a>
          </div>
        </div>
        <ul class="dc-ul1">
          <li v-for="(dvd, index) in dvds" :key="index">
            <div class="r-brc-d2-dd-d">
              <img :src="dvd.img"/>
              <a class="r-brc-d2-dd-d-a1"></a>
              <a class="r-brc-d2-dd-d-a2"></a>
            </div>
            <p class="r-brc-d2-dd-p1">
              <a>{{dvd.name}}</a>
            </p>
            <p class="r-brc-d2-dd-p2">
              <span>
                <a>{{dvd.singer}}</a>
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Bottom from "../../../components/Bottom/Bottom";

  export default {
    name: "dvd",
    components: {
      Bottom
    },
    data() {
      return{
        dvds:[
          {img: require("../../../assets/dvdImages/109951163606377163.jpg"), singer: "李荣浩", name: "耳朵"},
          {img: require("../../../assets/dvdImages/109951163596240238.jpg"), singer: "IU", name: "삐삐"},
          {img: require("../../../assets/dvdImages/109951163575279930.jpg"), singer: "Various Artists", name: "Billboard Presents Electric Asia Vol. 2"},
          {img: require("../../../assets/dvdImages/109951163611604497.jpg"), singer: "布瑞吉Bridge", name: "新大陆"},
          {img: require("../../../assets/dvdImages/109951163608338651.jpg"), singer: "혜화(暳花)", name: "郑恩地"},
          {img: require("../../../assets/dvdImages/109951163609839359.jpg"), singer: "陈奕迅", name: "破坏王"},
          {img: require("../../../assets/dvdImages/109951163599182962.jpg"), singer: "Rachael Yamagata", name: "Porch Songs"},
          {img: require("../../../assets/dvdImages/109951163599180014.jpg"), singer: "中国音乐公告牌", name: "中国音乐公告牌 第六期"},
          {img: require("../../../assets/dvdImages/109951163552724449.jpg"), singer: "Far East Movement  /...", name: "竹 (Bamboo)"},
          {img: require("../../../assets/dvdImages/109951163599384908.jpg"), singer: "NCT 127", name: "NCT #127 Regular-Irr..."}
        ]
      }
    }
  }
</script>

<style>
  .dvd{
    margin-top: 1px;
  }
  .dvd1{
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
}
  .dvd-center{
    padding: 40px;
    position: relative;
  }
  .dc-d1{
    height: 40px;
    border-bottom: 2px solid #c20c0c;
  }
  .dc-d1 h3{
    float: left;
    font-size: 24px;
    font-weight: normal;
  }
  .dc-d1 h3 span{
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: normal;
  }
  .dc-ul1{
    margin: 20px 0 0 -33px;
    height: 416px;
  }
  .dc-ul1 li{
    float: left;
    display: inline-block;
    line-height: 1.4;
    overflow: hidden;
    padding: 0 0 33px 33px;
    width: 153px;
    height: 178px;
  }
  .r-brc-d2-dd-d{
    line-height: 1.4;
    width: 130px;
    height: 130px;
    position: relative;
  }
  .r-brc-d2-dd-d img{
    width: 100%;
    height: 100%;
    background-position: 0 -845px;
  }
  .r-brc-d2-dd-d-a1{
    width: 153px;
    height: 130px;
    position: absolute;
    top: 0;
    left: 0;
    background: url("../../../assets/coverall.png") no-repeat 0 -845px;
  }
  .r-brc-d2-dd-d-a2{

  }
  .r-brc-d2-dd-p1{
    margin: 8px 0 3px;
    font-size: 14px;
    width: 100%;
    height: 20px;
    padding: 0;
  }
  .r-brc-d2-dd-p1 a{
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    color: #000;
    overflow: hidden;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    word-wrap: normal;
  }
  .r-brc-d2-dd-p2{
    height: 20px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    padding: 0;
    margin: 0;
  }
  .r-brc-d2-dd-p2 span{
    float: left;
    display: inline-block;
    max-width: 85%;
    vertical-align: middle;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    line-height: 1.4;
  }
  .r-brc-d2-dd-p2 span a{
    color: #666;
  }
  .dc-d2{
    height: 40px;
    border-bottom: 2px solid #c20c0c;
  }
  .dc-d2 h3{
    float: left;
    font-size: 24px;
    font-weight: normal;
  }
  .dc-d2 h3 span{
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: normal;
  }
  .dc-d2 div{
    float: left;
    margin: 12px 0 0 20px;
  }
  .dc-d2 div a{
    color: #666;
    float: left;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .dc-d2 div a:hover{
    text-decoration: underline;
  }
  .dc-d2 div span{
    float: left;
    margin: 0 10px;
    color: #c7c7c7;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
