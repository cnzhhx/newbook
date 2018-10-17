<template>
    <div class="top-tab">
      <div class="tab-div">
        <a class="tab-wy"></a>
        <ul class="tab-ul">
          <li>
            <span>
              <a class="select taCor" @click="switchTo('/found/recommend');select($event)" @mouseenter="enter($event)" @mouseleave="leave($event)">
                发现音乐
                <sub class="cor">&nbsp;</sub>
              </a>
            </span>
          </li>
          <li><span><a @click="switchTo('/my');select($event)" @mouseenter="enter($event)" @mouseleave="leave($event)">我的音乐</a></span></li>
          <li><span><a @click="switchTo('/friend');select($event)" class="friend" @mouseenter="enter($event)" @mouseleave="leave($event)">朋友</a></span></li>
          <li><span><a @mouseenter="enter($event)" @mouseleave="leave($event)" class="shop">商城</a></span></li>
          <li><span><a @mouseenter="enter($event)" @mouseleave="leave($event)">音乐人</a></span></li>
          <li class="downli">
            <span><a id="down" @click="switchTo('/down');select($event)" @mouseenter="enter($event)" @mouseleave="leave($event)">下载客户端</a></span>
            <sub class="downsub">&nbsp</sub>
          </li>
        </ul>
        <div class="tab-log"><a>登录</a></div>
        <a class="tab-video">视频投稿</a>
        <div class="tab-in"><input type="text" placeholder="音乐/视频/电台/用户"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        methods: {
          switchTo(path) {
            this.$router.replace(path);
          },
          select(e) {
            let yanShi = document.getElementsByClassName('select');
            if (yanShi.length !== 1) {
              let yanShi1 = document.getElementsByClassName('select')[0];
              let yanShi2 = document.getElementsByClassName('select')[1];
              yanShi1.className = "";
              yanShi2.className = "";
              let cor = document.getElementsByClassName('cor')[0];
              if(this.$route.path !== "/found/recommend"){
                  e.target.className = "select";
                  cor.style.display = "none";
                }else{
                  e.target.className = "select taCor";
                  cor.style.display = "";
                }
            }
          },
          enter(e) {
            if (e.target.className !== "select") {
              if (e.target.className !== "select taCor") {
                e.target.className = "select";
              }
            }
          },
          leave(e) {
            let yanShi = document.getElementsByClassName('select');
            if (yanShi.length !== 1) {
              e.target.className = "";
            }
          }
        }
    }
</script>

<style scoped>
  .top-tab{
    font-size: 12px;
    color: #333;
    background: #242424;
    height: 70px;
    position: relative;
    width: 100%;
    z-index: 1000;
  }
  .tab-div{
    width: 1100px;
    margin: 0 auto;
  }
  .tab-wy{
    background:url('../../assets/topbar.png?a9f7156e2a8e78e6bf2104440246d04b') no-repeat;
    width: 170px;
    height: 70px;
    display: inline-block;
    margin-left: 30px;
    float: left;
    cursor: pointer;
  }
  .tab-ul li{
    float: left;
    font-size: 14px;
    cursor: pointer;
    color: #ccc;
  }
  .tab-ul li a{
    display: inline-block;
    width: 90px;
    height: 70px;
    text-align: center;
    line-height: 70px;
  }
  .taCor{
    position: relative;
  }
  .cor{
    background: url('../../assets/topbar.png?a9f7156e2a8e78e6bf2104440246d04b') no-repeat -226px 0;
    display: block;
    position: absolute;
    left: 50%;
    top: 64px;
    width: 12px;
    height: 7px;
    margin-left: -6px;
    overflow: hidden;
  }
  .select{
    background-color: #000;
  }
  .friend{
    width: 90px !important;
  }
  .shop{
    width: 90px !important;
  }
  .downli{
    position: relative;
  }
  .downsub{
    background:url('../../assets/topbar.png?a9f7156e2a8e78e6bf2104440246d04b') no-repeat -190px 0;
    width: 28px;
    position: absolute;
    top: 17px;
    right: -17px;
    height: 19px;
  }
  .tab-in{
    float: right;
    margin-top: 19px;
    background: #fff url('../../assets/topbar.png?a9f7156e2a8e78e6bf2104440246d04b') no-repeat 0 -99px;
    border-radius: 32px;
    width: 158px;
    height: 32px;
    position: relative;
  }

  .tab-in input{
    width: 121px;
    height: 16px;
    display: inline-block;
    font: 400 13px Arial;
    position: absolute;
    left: 17%;
    top: 23%;
    border:none;
    outline: none;
  }
  .tab-video{
    float: right;
    width: 90px;
    height: 32px;
    margin: 19px 0 0 12px;
    box-sizing: border-box;
    padding-left: 32px;
    line-height: 33px;
    color: #ccc;
    background: url('../../assets/topbar.png?a9f7156e2a8e78e6bf2104440246d04b') no-repeat 0 -140px;
    cursor: pointer;
  }
  .tab-log{
    float: right;
    height: 45px;
    width: 50px;
    margin: 19px 0 0 20px;
    padding: 0 5px 0 0;
    background: url('../../assets/topbar.png?a9f7156e2a8e78e6bf2104440246d04b') no-repeat right -47px;
    font-size: 12px;
    color: #333;
  }
  .tab-log a{
    display: block;
    width: 28px;
    margin-top: 7px;
    color: #787878;
    cursor: pointer;
  }

</style>
