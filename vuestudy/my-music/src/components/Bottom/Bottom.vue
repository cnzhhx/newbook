<template>
  <div id="Bottom">
    <div class="Body">
      <div class="center">
        <div class="left">
          <p class="link">
            <a>关于网易</a>
            <span>|</span>
            <a>客户服务</a>
            <span>|</span>
            <a>服务条款</a>
            <span>|</span>
            <a>网站导航</a>
            <span>|</span>
            <a>意见反馈</a>
          </p>
          <p class="link2">
            <span class="link2-1">网易公司版权所有©1997-2018</span>
            <span class="link2-2">杭州乐读科技有限公司运营：</span>
            <a>浙网文[2018]3506-263号</a>
          </p>
          <p class="contact">
            <span class="contact1">违法和不良信息举报电话：0571-89853516</span>
            <span class="contact2">举报邮箱：</span>
            <a>cloudmusicservice@163.com</a>
          </p>
        </div>
        <ul class="right">
          <li class="right1"><a></a><span></span></li>
          <li class="right2"><a></a><span></span></li>
          <li class="right3"><a></a><span></span></li>
          <li class="right4"><a></a><span></span></li>
          <li class="right5"><a></a><span></span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Bottom',

  }
</script>

<style scoped>
  #Bottom{
    position: relative;
    height: 148px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
  }
  .Body{
    width: 980px;
    margin: 0 auto;
  }
  .center{

  }
  .left{
    float: left;
    width: 520px;
    padding-top: 15px;
    line-height: 24px;
  }

  .link{
    line-height: 24px;
    height: 24px;
  }
  .link a{
    color: #999;
    line-height: 24px;
    text-decoration: none;
    float: left;
  }
  .link a:hover{
    text-decoration: underline;
  }
  .link span{
    margin: 0 8px 0 10px;
    color: #c2c2c2;
    line-height: 24px;
    float: left;
  }
  .link2{
    line-height: 24px;
    height: 24px;
    width: 520px;
    position: relative;
  }
  .link2-1{
    color: #666;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    left: 0;
  }
  .link2-2{
    color: #666;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    left: 176px;
  }
  .link2 a{
    color: #666;
    text-decoration: none;
    font-size: 12px;
    cursor: pointer;
    line-height: 24px;
    position: absolute;
    left: 334px;
  }
  .link2 a:hover{
    text-decoration: underline;
  }
  .contact{
    position: relative;
    margin-top: -5px;
  }
  .contact1{
    margin-right: 14px;
    color: #666;
    line-height: 24px;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .contact2{
    color: #666;
    line-height: 24px;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .contact a{
    position: absolute;
    text-decoration: none;
    right: 40px;
    color: #333;
  }
  .contact a:hover{
    text-decoration: underline;
  }

  .right{
    width: 420px;
    margin-top: 21px;
    float: right;
  }
  .right li{
    float: left;
    width: 60px;
    height: 70px;
    list-style: none;
    text-align: center;
    margin-left: 20px;
    color: #666;
  }
  .right1{
    margin-left: 0;
  }
  .right1 a{
    background: url("../../assets/foot_enter_new.png") no-repeat 0 0;
    background-size: 110px 450px;
    display: block;
    float: none;
    width: 44px;
    height: 44px;
    margin: 0 auto;
    text-decoration: none;
    color: #333;
  }
  .right1 span{
    display: inline-block;
    margin: 5px 5px 0;
    width: 50px;
    height: 10px;
    background: url("../../assets/foot_enter_tt.png") no-repeat;
    background-size: 180px 100px;
  }
  .right2 a{
    background: url("../../assets/foot_enter_new.png") no-repeat -60px 0;
    background-size: 110px 450px;
    display: block;
    float: none;
    width: 44px;
    height: 44px;
    margin: 0 auto;
    text-decoration: none;
    color: #333;
  }
  .right2 span{
    display: inline-block;
    margin: 5px 5px 0;
    width: 50px;
    height: 10px;
    background: url("../../assets/foot_enter_tt.png") no-repeat 0 -20px;
    background-size: 180px 100px;
  }
  .right3 a{
    background: url("../../assets/foot_enter_new.png") no-repeat 0 -50px;
    background-size: 110px 450px;
    display: block;
    float: none;
    width: 44px;
    height: 44px;
    margin: 0 auto;
    text-decoration: none;
    color: #333;
  }
  .right3 span{
    display: inline-block;
    margin: 5px 5px 0;
    width: 50px;
    height: 10px;
    background: url("../../assets/foot_enter_tt.png") no-repeat 0 -40px;
    background-size: 180px 100px;
  }
  .right4 a{
    background: url("../../assets/foot_enter_new.png") no-repeat -60px -50px;
    background-size: 110px 450px;
    display: block;
    float: none;
    width: 44px;
    height: 44px;
    margin: 0 auto;
    text-decoration: none;
    color: #333;
  }
  .right4 span{
    display: inline-block;
    margin: 5px 5px 0;
    width: 50px;
    height: 10px;
    background: url("../../assets/foot_enter_tt.png") no-repeat 0 -60px;
    background-size: 180px 100px;
  }
  .right5 a{
    background: url("../../assets/foot_enter_new.png") no-repeat 0 -100px;
    background-size: 110px 450px;
    display: block;
    float: none;
    width: 44px;
    height: 44px;
    margin: 0 auto;
    text-decoration: none;
    color: #333;
  }
  .right5 span{
    display: inline-block;
    margin: 5px 5px 0;
    width: 50px;
    height: 10px;
    background: url("../../assets/foot_enter_tt.png") no-repeat 0 -80px;
    background-size: 180px 100px;
  }
</style>
