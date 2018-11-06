<template>
  <div>
    <div id="friend">
      <div class="friend1">
        <div>
          你可以关注明星和好友品味他们的私房歌单<br>
          通过他们的动态发现更多精彩音乐
        </div>
        <a  @click.prevent="loginPhone()">立即登录</a>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>

  import Bottom from "../../components/Bottom/Bottom";
  export default {
    name: 'friend',
    components: {
      Bottom
    },
    methods: {
      loginPhone(){
        let login = document.getElementById('login');
        login.style.display = 'inline-block';
      }
    }
  }
</script>

<style>
  #friend{
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
  }
  .friend1{
    width: 902px;
    height: 414px;
    margin: 0 auto 0;
    padding-top: 70px;
    background: url("../../assets/notlogin.jpg") no-repeat 0 70px;
  }
  .friend1 div{
    padding: 178px 0 0 535px;
    line-height: 23px;
    color: #666;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .friend1 a{
    display: block;
    width: 157px;
    height: 48px;
    margin: 36px 0 0 535px;
    text-indent: -9999px;
    background: url("../../assets/notlogin.jpg") no-repeat 0 9999px;
  }
  .friend1 a:hover{
    background: url("../../assets/notlogin.jpg") no-repeat 0 -430px;
  }
</style>
