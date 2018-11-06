<template>
  <div>
    <div id="my">
      <div class="my1">
        <div class="pic">
          <h2>登录网易云音乐</h2>
          <a  @click.prevent="loginPhone()">立即登录</a>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Bottom from '../../components/Bottom/Bottom'


  export default {
    name: 'my',
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
  #my{
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
  }
  .my1{
    width: 807px;
    height: 268px;
    margin: 0 auto 0;
    padding-top: 104px;
    background: url("../../assets/mymusic.png") no-repeat 0 104px;
  }
  .pic h2{
    height: 100px;
    text-indent: -9999px;
  }
  .pic a{
    display: block;
    width: 167px;
    height: 45px;
    margin: 102px 0 0 482px;
    text-indent: -9999px;
    background: url("../../assets/mymusic.png") no-repeat 0 9999px;
  }
  .pic a:hover{
    background: url("../../assets/mymusic.png") no-repeat 0 -278px;
  }
</style>
