<template>
  <div class="songSheet">
    <div class="songSheetBig">
      <div class="songSheetBigCenter">
        <div class="s-sbc-t">
          <h3>
            <span>全部</span>
          </h3>
          <a>
            <i>
              选择分类
              <em></em>
            </i>
          </a>
        </div>
        <ul></ul>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: "songSheet"
  }
</script>

<style>
  *{
    font-size: 12px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
  }
  .songSheet{
    margin-top: 1px;
  }
  .songSheetBig{
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
  }
  .songSheetBigCenter{
    padding: 40px;
    position: relative;
  }
  .s-sbc-t{
    height: 40px;
    border-bottom: 2px solid #c20c0c;
  }
  .s-sbc-t h3{
    float: left;
    font-size: 24px;
    font-weight: normal;
  }
  .s-sbc-t h3 span{
    font-size: 24px;
    font-weight: normal;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    color: #333;
  }
  .s-sbc-t a{
    font-size: 12px;
    font-weight: normal;
    margin: 2px 0 0 12px;
    color: #333;
    padding: 0 5px 0 0;
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    background: url("../../../assets/button2.png") no-repeat right -100px;
  }
  .s-sbc-t a i{
    color: #0c73c2 !important;
    padding: 0 10px 0 15px;
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    font-size: inherit;
    font-weight: normal;
    background: url("../../../assets/button2.png") no-repeat 0 -59px;
    font-style: normal;
  }
  .s-sbc-t a i em{
    margin-left: 5px;
    width: 8px;
    height: 5px;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    background: url("../../../assets/icon.png") no-repeat  -70px -543px;
  }


</style>
