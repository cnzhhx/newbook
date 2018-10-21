<template>
  <div id="down">
    <div class="redTabBar"></div>
    <div class="downTop">
      <div class="dt-c">
        <div class="dt-c-l"></div>
        <div class="dt-c-r">
          <a class="dt-c-r-1">
            <i></i>
            <em>安卓版</em>
            <div>V5.6.0</div>
          </a>
          <a class="dt-c-r-2">
            <i></i>
            <em>iPhone版</em>
            <div>V5.6.0</div>
          </a>
          <a class="dt-c-r-3">
            <i></i>
            <em>iPad版</em>
            <div>V5.6.0</div>
          </a>
          <a class="dt-c-r-4">
            <i></i>
            <em>Mac版</em>
            <div>V5.6.0</div>
          </a>
          <a class="dt-c-r-5">
            <i></i>
            <em>PC版</em>
            <div>V5.6.0</div>
          </a>
          <a class="dt-c-r-6">
            <i></i>
            <em>UWP版</em>
            <div>V5.6.0</div>
          </a>
          <a class="dt-c-r-7">
            <i></i>
            <em>WP版</em>
            <div>V5.6.0</div>
          </a>
          <a class="dt-c-r-8">
            <i></i>
            <em>Linux版</em>
            <div>V5.6.0</div>
          </a>
        </div>
      </div>
    </div>
    <div class="downCenter1">
      <div class="d-c1-b">
        <div class="d-cl-b-l">
          <h3>千万曲库 首首CD音质</h3>
          <p>
            囊括百万无损SQ音乐，你在用手机听歌时，<br>
            也能感受到纤毫毕现的CD音质，更能免费离线收听
          </p>
        </div>
        <div class="d-cl-b-r">
          <img src="../../assets/b1.jpg"/>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Bottom from '../../components/Bottom/Bottom'


  export default {
    name: 'down',
    components: {
      Bottom
    }
  }
</script>

<style scoped>
  #down{
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 12px;
    color: #333;
  }
  .redTabBar{
    height: 5px;
    border-bottom: none;
    box-sizing: border-box;
    background-color: #C20C0C;
    position: relative;
    zoom: 1;
    z-index: 90;
  }
  .downTop{
    height: 483px;
    background: url("../../assets/bg.jpg") no-repeat center 0;
  }
  .dt-c{
    width: 982px;
    margin: 0 auto;
    position: relative;
    zoom: 1;
  }
  .dt-c-l{
    display: inline-block;
    width: 545px;
    height: 465px;
    margin-top: 15px;
    background: url("../../assets/banner-pc.png") no-repeat 0 0;
  }
  .dt-c-r{
    width: 380px;
    margin: 194px -8px 0 0;
    float: right;
  }
  .dt-c-r a{
    float: left;
    display: block;
    width: 170px;
    height: 40px;
    margin-bottom: 14px;
    margin-left: 20px;
    color: #fff;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 40px;
    background: url("../../assets/down_btn.png") repeat-x 0 0;
  }
  .dt-c-r a:hover{
    background: url("../../assets/down_btn.png") repeat-x 0 -50px;
  }
  .dt-c-r i{
    float: left;
    width: 22px;
    height: 40px;
    margin: 0 12px;
  }
  .dt-c-r em{
    float: left;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    font-style: normal;
    text-align: left;
    font-size: inherit;
  }
  .dt-c-r div{
    float: right;
    padding-right: 15px;
    font-size: 12px;
    color: #fafcfc;
    letter-spacing: 1px;
    opacity: .66;
    display: inline-block;
  }
  .dt-c-r-1 i{
    background: url("../../assets/down_btn.png") repeat-x -60px -100px;
  }
  .dt-c-r-2 i{
    background: url("../../assets/down_btn.png") repeat-x -30px -100px;
  }
  .dt-c-r-3 i{
    background: url("../../assets/down_btn.png") repeat-x -30px -100px;
  }
  .dt-c-r-4 i{
    background: url("../../assets/down_btn.png") repeat-x -30px -100px;
  }
  .dt-c-r-5 i{
    background: url("../../assets/down_btn.png") repeat-x 0 -100px;
  }
  .dt-c-r-6 i{
    background: url("../../assets/down_btn.png") repeat-x -0 -100px;
  }
  .dt-c-r-7 i{
    background: url("../../assets/down_btn.png") repeat-x 0 -100px;
  }
  .dt-c-r-8 i{
    background: url("../../assets/down_btn.png") repeat-x -128px -100px;
  }
  .downCenter1{
    background: #fff;
    height: 437px;
    border-bottom: 1px solid #e3e3e3;
  }
  .d-c1-b{
    padding-top: 120px;
    width: 982px;
    margin: 0 auto;
  }
  .d-cl-b-l{
    float: left;
    margin-left: 30px;
  }
  .d-cl-b-l h3{
    font-size: 40px;
    font-weight: normal;
    padding: 45px 0 5px 0;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }
  .d-cl-b-l p{
    font-size: 16px;
    color: #666;
    line-height: 24px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }
  .d-cl-b-r{
    margin-right: 57px;
    float: right;
  }
</style>
