<template>
  <div id="found">
    <div class="foundbar">
      <div class="foundbar2">
        <ul>
          <li><a><em @click="switchTo('/found/recommend');select($event)" @mouseenter="enter($event)" @mouseleave="leave($event)" class="em em1">推荐</em></a></li>
          <li><a><em @click="switchTo('/found/rankingList');select($event)" @mouseenter="enter($event)" @mouseleave="leave($event)" class="em1">排行榜</em></a></li>
          <li><a><em @click="switchTo('/found/songSheet');select($event)" @mouseenter="enter($event)" @mouseleave="leave($event)" class="em1" id="songSheet">歌单</em></a></li>
          <li><a><em @click="switchTo('/found/anchor');select($event)" @mouseenter="enter($event)" @mouseleave="leave($event)" class="em1">主播电台</em></a></li>
          <li><a><em @click="switchTo('/found/singer');select($event)" @mouseenter="enter($event)" @mouseleave="leave($event)" class="em1">歌手</em></a></li>
          <li><a><em @click="switchTo('/found/dvd');select($event)" @mouseenter="enter($event)" @mouseleave="leave($event)" class="em1">新碟上市</em></a></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'found',
    methods: {
      switchTo(path) {
        this.$router.replace(path);
      },
      select(e) {
        let yanShi = document.getElementsByClassName('em');
        if (yanShi.length !== 1) {
          let yanShi1 = document.getElementsByClassName('em')[0];
          let yanShi2 = document.getElementsByClassName('em')[1];
          yanShi1.className = "em1";
          yanShi2.className = "em1";
          e.target.className = "em em1";
        }
      },
      enter(e) {
        e.target.className = "em em1";
      },
      leave(e) {
        let yanShi = document.getElementsByClassName('em');
        if(yanShi.length !== 1) {
          e.target.className = "em1";
        }
      }
    }
  }
</script>

<style>
  #found{
    width: 100%;
    z-index: 90;
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
  }

  .foundbar{
    width: 688px;
    height: 34px;
    margin: 0 auto;
    position: relative;
    zoom: 1;
    font-size: 12px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
  }

  .foundbar2{
    font-size: 12px;
    color: #333;
    margin: 0px;
  }

  li{
    float: left;
    height: 34px;
    text-align: center;
  }

  a{
    color: #fff;
    text-decoration: none;
    float: left;
    height: 34px;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
  }

  .em{
    background: #9B0909;
  }

  .em1{
    display: inline-block;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
    font-style: normal;
    text-align: left;
    font-size: inherit;
    color: #fff;
  }

</style>
