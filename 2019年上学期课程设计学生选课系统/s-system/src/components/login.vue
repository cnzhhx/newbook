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
                    <div v-if="!countDown" class="yanMa">获取验证码</div>
                    <div v-else class="yanMa">已发送{{countDown}}s</div>
                    <input placeholder="验证码" v-model="code"/>
                </div>
                <div class="loginTip">抱歉，此功能暂未实现</div>
            </div>



            <div class="loginZh" id="loginZh">
                <div class=shuRu>
                    <input placeholder="用户名/手机" type="text" v-model="user_name"/>
                    <input placeholder="密码" type="password" v-model="pwd"/>
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

    import {pwdLogin} from "../api/index";

    export default {
        name: "Login",
        data() {
            return {
                phone: "", //手机号码
                countDown: 0,//倒计时
                loginMode: true,
                code: "" ,//验证码
                userInfo: {}, //用户信息
                user_name: "",//用户账号
                captcha:"", //图形验证码
                pwd: "",//密码
            }
        },
        // created: {
        //   getCaptcha(){
        //     var loginZhimg = document.getElementById(loginZhimg);
        //     loginZhimg.src = 'http://localhost:3000/api/captcha';
        //   },
        // },
        computed: {
        },
        methods: {
            async login() {
                //登录模式
                let result;
                if(false) {//验证码登录
                }else{ //账号密码登录
                    //校验
                    if(!this.user_name) {
                        alert('请输入手机/用户名!');
                        return;
                    }else if(!this.pwd) {
                        alert('请输入密码!');
                        return;
                    }
                    //登录
                    result = await pwdLogin(this.user_name, this.pwd);
                    console.log(result);

                }
                //后续处理

                // if(result.success_code === 200) {
                //     this.userInfo = result.message;
                //     // console.log(this.userInfo.id);
                // }else{
                //     this.userInfo = {
                //         message: '登录失败， 手机或验证码不正确'
                //     }
                // }
                //
                // if(!this.userInfo.id) { //失败
                //     alert(this.userInfo.message);
                // }else{ //成功
                //     //同步用户数据
                //     this.syncUserInfo(this.userInfo);
                //     this.$router.replace('/found/recommend');
                //     this.Close();
                // }
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
        background: url("../assets/layer.png") no-repeat 0 -95px;
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
        font-size: 14px;
        width: 250px;
        margin-left: 120px;
        text-align: center;
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
