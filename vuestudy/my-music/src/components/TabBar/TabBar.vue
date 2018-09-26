<template>
    <div class="top-tab">
      <div class="tab-div">
        <div class="tab-wy"></div>
        <ul class="tab-ul">
          <li>发现音乐</li>
          <li>我的音乐</li>
          <li>朋友</li>
          <li>商城</li>
          <li>音乐人</li>
          <li>下载客户端<sub>&nbsp</sub></li>
        </ul>
        <div class="tab-log">登录</div>
        <div class="tab-video">视频投稿</div>
        <div class="tab-in"><input type="text" placeholder="音乐/视频/电台/用户"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabBar",

    }
</script>

<style scoped>
  .top-tab{
    font-size: 12px;
    color: #333;
    background: #242424;
    height: 70px;
    position: relative;
    widow: 100%;
    z-index: 1000;
  }
  .tab-wy{
    background:url('https://s2.music.126.net/style/web2/img/frame/topbar.png?a9f7156e2a8e78e6bf2104440246d04b') no-repeat;
    width: 157px;
    height: 100%;
  }
  .tab-div{
    width: 1100px;
    margin: 0 auto;
  }
  .tab-ul li{
    float: left;
    font-size: 14px;
    cursor: pointer;
    color: #ccc;
  }
  .tab-in{
    float: right;
    width: 158px;
    height: 32px;
  }
  .tab-video{
    float: right;
    width: 90px;
    height: 32px;
    color: #ccc;
  }
  .tab-log{
    float: right;
    height: 45px;
    width: 50px;
  }
</style>
