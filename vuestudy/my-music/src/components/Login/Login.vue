<template>
  <div id="login">
    <div class="loginTop">
      <div>手机号登陆</div>
    </div>
    <div class="loginBottom">
      <div class="l-b-t">
        <span class="yanzhenLogin" @click.prevent="qie1()">验证码登陆</span>
        <span class="mimaLogin" @click.prevent="qie2()">密码登陆</span>
        <div class="yanzhenBar" id="yanzhenBar"></div>
        <div class="mimaBar" id="mimaBar"></div>
      </div>



      <div class="loginMi" id="loginMi">
        <div class="loginPush">
          <input placeholder="手机号" v-model="phone"/>
          <div v-if="!countDown" @click.prevent="getVerifiCode()" class="yanMa"  :class="{phone_right: phoneRight}">获取验证码</div>
          <div v-else class="yanMa">已发送{{countDown}}s</div>
          <input placeholder="验证码" v-model="code"/>
        </div>
        <div class="loginTip">温馨提示：未注册my-music的用户，登录时将自动注册</div>
      </div>



      <div class="loginZh" id="loginZh">
        <div class=shuRu>
          <input placeholder="用户名/手机"/>
          <input placeholder="密码"/>
          <input placeholder="验证码"/>
          <img
            alt="captcha"
            ref="captcha"
            @click.prevent="getCaptcha()"
            class="miImg"
            src="http://127.0.0.1:3000/api/captcha"/>
        </div>
      </div>



      <div class="loginSubmit">
        <div class="Submit" @click.prevent="login()">登陆</div>
        <div class="Close">返回</div>
      </div>
    </div>
    <span class="loginClose" @click.prevent="Close()"></span>
  </div>
</template>

<script>
    import {getPhoneCode, phoneCodeLogin} from "../../api";

    export default {
      name: "Login",
      data() {
        return {
          phone: "", //手机号码
          countDown: 0,//倒计时
          loginMode: true,
          code: "" ,//验证码
          userInfo: {}
        }
      },
      computed: {
        // 验证手机号是否合理
        phoneRight() {
          return /^[1][1,2,5][0-9]{9}$/.test(this.phone);
        }
      },
      methods: {
        getCaptcha(){
          this.$refs.captcha.src = "http://127.0.0.1:3000/api/captcha?time=" + new Date()
        },
        async getVerifiCode(){
          //1.开启倒计时
          if(this.phoneRight){
            this.countDown = 60;
            this.intervalId = setInterval(()=>{
              this.countDown--;

              if(this.countDown === 0){
                clearInterval(this.intervalId);
              }
            }, 1000);
          }
          let result = await getPhoneCode(this.phone);
          console.log(result);
        },
        Close() {
          let login = document.getElementById('login');
          login.style.display = 'none';
        },
        qie1() {
          let yanzhenBar = document.getElementById('yanzhenBar');
          let loginMi = document.getElementById('loginMi');
          let loginZh = document.getElementById('loginZh');
          let mimaBar = document.getElementById('mimaBar');
          loginZh.style.display = 'none';
          mimaBar.style.display = 'none';
          yanzhenBar.style.display = 'inline-block';
          loginMi.style.display = 'inline-block';
          this.loginMode = true;
        },
        qie2() {
          let yanzhenBar = document.getElementById('yanzhenBar');
          let mimaBar = document.getElementById('mimaBar');
          let loginMi = document.getElementById('loginMi');
          let loginZh = document.getElementById('loginZh');
          yanzhenBar.style.display = 'none';
          mimaBar.style.display = 'inline-block';
          loginMi.style.display = 'none';
          loginZh.style.display = 'inline-block';
          this.loginMode = false;
        },
        async login() {
          //登录模式
          if(this.loginMode) {//验证码登录
            //校验
            if(!this.phone) {
              alert('请输入手机号码!');
              return;
            }else if(!this.phoneRight) {
              alert('请输入正确的手机号码!');
              return;
            }

            if(!this.code) {
              alert('请输入验证码!');
              return;
            }else if(!(/^\d{6}$/gi.test(this.code))) {
              alert('请输入正确的验证码!');
              return;
            }

            //登录
            const result = await phoneCodeLogin(this.phone, this.code);
            console.log(result);

            if(result.success_code === 200) {
              this.userInfo = result.message;
            }else{
              this.userInfo = {
                message: '登录失败， 手机或验证码不正确'
              }
            }
          }else{ //账号密码登录

          }
        }
      }
    }
</script>

<style scoped>
  .miImg{
    display: inline-block;
    position: absolute;
    width: 70px;
    height: 30px;
    left: 186px;
    top: 80px;
  }
  .phone_right{
    color: purple !important;
  }
  #login{
    display: none;
    position: fixed;
    top: 30%;
    left: 30%;
    z-index: 9998;
    width: 530px;
    height: 326px;
    border-radius: 4px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.8);
  }
  .loginTop{
    position: relative;
    z-index: 10;
    border-bottom: 1px solid #191919;
    border-radius: 4px 4px 0 0;
    background: #2d2d2d;
    line-height: 30px;
  }
  .loginTop div{
    padding-right: 45px;
    margin: 0;
    height: 38px;
    line-height: 38px;
    padding-left: 18px;
    border-radius: 3px 3px 0 0;
    font-weight: bold;
    font-size: 14px;
    color: #2d2d2d;
    background-position: 50% 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  .loginClose{
    position: absolute;
    z-index: 20;
    top: 16px;
    right: 20px;
    width: 10px;
    height: 10px;
    overflow: hidden;
    text-indent: -9999px;
    cursor: pointer;
    background: url("../../assets/layer.png") no-repeat 0 -95px;
  }
  .loginBottom{
    background-color: #fff;
  }
  .l-b-t{
    width: 400px;
    margin: 0 auto;
    position: relative;
  }
  .l-b-t span{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 16px;
  }
  .yanzhenLogin{
    margin-left: 90px;
    cursor: pointer;
  }
  .mimaLogin{
    margin-left: 50px;
    cursor: pointer;
  }
  .yanzhenBar{
    display: inline-block;
    position: absolute;
    top: 40px;
    left: 90px;
    width: 80px;
    height: 3px;
    background-color: orange;
  }
  .mimaBar{
    /*display: inline-block;*/
    display: none;
    position: absolute;
    top: 40px;
    left: 225px;
    width: 62px;
    height: 3px;
    background-color: orange;
  }

  .loginPush {
    display: inline-block;
    position: relative;
    width: 300px;
    height: 90px;
    margin-top: 10px;
    margin-left: 120px;
  }
  .loginPush input{
    width: 250px;
    height: 30px;
    padding-left: 5px;
    margin-top: 5px;
    border: 1px solid grey;
    border-radius: 3px;
  }
  .yanMa{
    position: absolute;
    display: inline-block;
    height: 20px;
    z-index: 100000;
    right: 50px;
    top: 10px;
    font-size: 14px;
    color: gray;
    cursor: pointer;
  }
  .loginTip{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 10px;
    width: 250px;
    margin-left: 120px;
  }
  .loginSubmit{
    width: 200px;
    height: 119px;
  }
  .Submit{
    width: 250px;
    height: 30px;
    border: 1px solid orange;
    border-radius: 3px;
    text-align: center;
    line-height: 30px;
    background-color: orange;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 16px;
    margin-left: 122px;
    cursor: pointer;
  }
  .Submit:hover{
    border: 1px solid orangered;
    background-color: orangered;
  }
  .Close{
    width: 250px;
    height: 30px;
    border: 1px solid orange;
    border-radius: 3px;
    text-align: center;
    line-height: 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 16px;
    margin-left: 122px;
    cursor: pointer;
    margin-top: 5px;
  }
  .Close:hover{
    border: 1px solid skyblue;
    background-color: skyblue;
  }
  .loginZh{
    display: none;
  }
  .shuRu{
    height: 128px;
    width: 100px;
    margin-left: 122px;
    margin-top: 5px;
    position: relative;
  }
  .shuRu input{
    width: 250px;
    height: 30px;
    padding-left: 5px;
    margin-top: 5px;
    border: 1px solid grey;
    border-radius: 3px;
  }
</style>
