<template>
  <div class="anchor">
    <div class="anchorBody">
      <div class="anchorCenter">
        <div class="anchorCenter-top">
          <div class="ac-t-c">
            <ul>
              <li v-for="(dianTai, index) in dianTais" :key="index">
                <a>
                  <div>
                    <img :src="dianTai.img"/>
                  </div>
                  <em>{{dianTai.name}}</em>
                </a>
              </li>
            </ul>
          </div>
          <span class="ac-t-l"></span>
          <span class="ac-t-r"></span>
          <div class="ac-t-b"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: "anchor",
    data() {
      return {
        dianTais:[
          {img: require("../../../assets/电台images/18555358232264878.jpg"), name: "有声书"},
          {img: require("../../../assets/电台images/19212866183939953.jpg"), name: "知识技能"},
          {img: require("../../../assets/电台images/19052337486286044.jpg"), name: "商业财经"},
          {img: require("../../../assets/电台images/3242459791054879.jpg"), name: "人文历史"},
          {img: require("../../../assets/电台images/18996262393228947.jpg"), name: "外语世界"},
          {img: require("../../../assets/电台images/19167786207164648.jpg"), name: "亲子宝贝"},
          {img: require("../../../assets/电台images/19119407695444318.jpg"), name: "创作/翻唱"},
          {img: require("../../../assets/电台images/3242459791054876.jpg"), name: "音乐故事"},
          {img: require("../../../assets/电台images/3389794351757648.jpg"), name: "3D电子"},
          {img: require("../../../assets/电台images/3240260767799323.jpg"), name: "相声曲艺"},
          {img: require("../../../assets/电台images/18555358232264878.jpg"), name: "有声书"},
          {img: require("../../../assets/电台images/19119407695444318.jpg"), name: "创作/翻唱"},
          {img: require("../../../assets/电台images/3242459791054879.jpg"), name: "人文历史"},
          {img: require("../../../assets/电台images/18996262393228947.jpg"), name: "外语世界"},
          {img: require("../../../assets/电台images/18555358232264878.jpg"), name: "有声书"},
          {img: require("../../../assets/电台images/19212866183939953.jpg"), name: "知识技能"},
          {img: require("../../../assets/电台images/3242459791054876.jpg"), name: "音乐故事"},
          {img: require("../../../assets/电台images/3240260767799323.jpg"), name: "相声曲艺"}
        ]
      }
    }
  }
</script>

<style>
  .anchor{
    margin-top: 1px;
  }
  .anchorBody{
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
  }
  .anchorCenter{
    padding: 40px;
  }
  .anchorCenter-top{
    margin-bottom: 20px;
    position: relative;
    zoom: 1;
  }
  .ac-t-c{
    height: 194px;
    overflow: hidden;
    max-height: 194px;
  }
  .ac-t-c ul{
    margin-left: -33px;
  }
  .ac-t-c ul li{
    float: left;
    margin: 0 0 25px 33px;
    list-style: none;
  }
  .ac-t-c ul li a{
    display: block;
    width: 70px;
    height: 70px;
    text-align: center;
    color: #888;
  }
  .ac-t-c ul li a div{
    overflow: hidden;
    width: 48px;
    height: 48px;
    margin: 2px auto 0;
  }
  .ac-t-c ul li a em{
    margin-top: -3px;
    font-style: normal;
    text-align: left;
    font-size: inherit;
    color: #888;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
