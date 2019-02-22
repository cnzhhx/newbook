<template>
    <div class="First">
        <div class="block">
            <el-carousel trigger="click" height="300px">
                <el-carousel-item v-for="(img, index) in ImgFirst" :key="index">
                    <img :src="img.img"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="leftbox">
            <div class="tuijian">
                <h2 class="hometitle">
                    <span></span>
                    特别推荐
                </h2>
                <ul>
                    <li v-for="(hotRecommend, index) in $store.state.hotRecommends" :key="index">
                        <div class="tpic">
                            <img :src="hotRecommend.img" :title="hotRecommend.title"/>
                        </div>
                        <b>{{hotRecommend.title}}</b>
                        <span>{{hotRecommend.content}}</span>
                        <a @click="switchTo(hotRecommend.path)" class="readmore">阅读文章</a>
                    </li>
                </ul>
            </div>
            <div class="newblogs">
                <h2 class="hometitle">最新文章</h2>
                <ul class="list">
                    <li v-for="(hotRecommend, index) in $store.state.hotRecommends" :key="index">
                        <h3 class="blogtitle" >
                            <a @click="switchTo(hotRecommend.path)">{{hotRecommend.title}}</a>
                        </h3>
                        <div class="bloginfo">
                            <span class="blogpic">
                                <a href="#">
                                    <img @click="switchTo(hotRecommend.path)" :src="hotRecommend.img"/>
                                </a>
                            </span>
                            <p>
                                {{hotRecommend.content}}
                            </p>
                        </div>
                        <div class="autor">
                            <span class="dtime">
                                2019-02-14
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="rightbox">
            <div class="sidebar_widget widget_post_author">
                <div class="author_info">
                    <div class="widget_avatar">
                        <a>
                            <img  src="../../assets/-34550ac663a8f32b.jpg" height="80" width="80"/>
                        </a>
                    </div>
                    <h3>
                        小zh
                        <span class="admin_field">管理员</span>
                    </h3>
                    <div ></div>
                </div>
                <div class="author-social">
                    <span class="author-weixin">
                        <div><img id="img1" src="../../assets/20190221134547.png" width="100" height="100"/></div>
                    </span>
                    <span class="author-qq">
                        <div><img id="img2" src="../../assets/20190221134611.png" width="100" height="100"/></div>
                    </span>
                    <span class="author-diy">
                        <div><a href="https://weibo.com/"  target="_blank"></a></div>
                    </span>
                </div>
                <p>小zh个人博客，是一个记录自己生活点滴、互联网技术的原创独立博客（xiaozhqq.cn）。</p>
            </div>
            <!--<div class="author_count">-->
                <!--<ul>-->
                    <!--<li>-->
                        <!--<span>文章</span>-->
                        <!--<strong>0</strong>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<span>留言</span>-->
                        <!--<strong>0</strong>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<span>浏览</span>-->
                        <!--<strong>0</strong>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->
            <div class="paihang">
                <h2 class="ab_title">
                    <a href="#">点击排行</a>
                </h2>
                <ul>
                    <li v-for="(hotRecommend, index) in $store.state.hotRecommends" :key="index">
                        <b>
                            <a href="#">{{hotRecommend.title}}</a>
                        </b>
                        <p>
                            <i>
                                <a>
                                    <img @click="switchTo(hotRecommend.path)" class="big" :src="hotRecommend.img" height="98" width="90"/>
                                </a>
                            </i>
                            {{hotRecommend.content}}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "first",
        methods: {
            switchTo(path) {
                this.$router.replace(path);
            },
        },
        mounted() {
            //自适应
            const that = this;
            window.onresize = () => {
                return (() => {
                    that.screenWidth = document.body.clientWidth;
                })()
            };
            let author_weixin = document.getElementsByClassName("author-weixin")[0];
            let author_diy = document.getElementsByClassName("author-diy")[0];
            let rightbox = document.getElementsByClassName("rightbox")[0];
            let leftbox = document.getElementsByClassName("leftbox")[0];
            if(this.screenWidth>1220){
                author_weixin.style.marginLeft = 10+"%";
                author_diy.style.marginRight = 10+"%";
                rightbox.style.display = "block";
                leftbox.style.width = 40 + "%";
            }else if(this.screenWidth<1220&&this.screenWidth>979){
                author_weixin.style.marginLeft = 0;
                author_diy.style.marginRight = 0;
                rightbox.style.display = "block";
                leftbox.style.width = 40 + "%";
            }else{
                rightbox.style.display = "none";
                leftbox.style.width = 60 + "%";
            }


          this.$store.dispatch('reqRecommends')
        },
        data() {
            return {
                ImgFirst: [
                    {img: require("../../assets/banner01.jpg")},
                    {img: require("../../assets/banner02.jpg")}
                ],
                screenWidth: document.body.clientWidth   //给到了一个默认值
            }
        },
        watch: {
            screenWidth (val) {
                this.screenWidth = val;
                let author_weixin = document.getElementsByClassName("author-weixin")[0];
                let author_diy = document.getElementsByClassName("author-diy")[0];
                let rightbox = document.getElementsByClassName("rightbox")[0];
                let leftbox = document.getElementsByClassName("leftbox")[0];
                if(val>1220){
                    author_weixin.style.marginLeft = 10+"%";
                    author_diy.style.marginRight = 10+"%";
                    rightbox.style.display = "block";
                    leftbox.style.width = 40 + "%";
                }else if(val<1220&&val>979){
                    author_weixin.style.marginLeft = 0;
                    author_diy.style.marginRight = 0;
                    rightbox.style.display = "block";
                    leftbox.style.width = 40 + "%";
                }else{
                    rightbox.style.display = "none";
                    leftbox.style.width = 60 + "%";
                }
            }
        },
    }
</script>

<style scoped>
    .First{
        background: #f1f1f1;
        height: 2000px;
    }
    .block{
        padding-top: 20px;
        width: 60%;
        margin-left: 20%;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .leftbox{
        width: 40%;
        float: left;
        overflow: hidden;
        margin-left: 20%;
        margin-top: 10px;
    }
    .tuijian{
        background: #fff;
        overflow: hidden;
        width: 100%;
        clear: both;
        border-radius: 10px;
    }
    .hometitle{
        padding: 0 10px;
        line-height: 40px;
        height: 40px;
        font-size: 18px;
        border-bottom: #000 2px solid;
        position: relative;
    }
    .hometitle span{
        float: right;
        font-weight: normal;
        font-size: 14px;
        height: 42px;
        overflow: hidden;
        position: absolute;
        right: 0;
        width: 100%;
        text-align: right;
    }
    .tuijian ul{
        overflow: hidden;
        padding: 20px 10px;
        position: relative;
    }
    .tuijian li{
        width: 26%;
        float: left;
        border-bottom: #ccc 1px solid;
        border-left: #ccc 1px solid;
        overflow: hidden;
        padding: 3.5%;
    }
    .tuijian li:hover {
        background: #fff;
        box-shadow: #ccc 1px 1px 8px;
    }
    .tpic{
        width: 100%;
        height: 100px;
        overflow: hidden;
        border-radius: 10px;
        background: #CCC;
    }
    .tpic img{
        display: inline-block;
        width: 100%;
        min-height: 100%;
        height: auto;
        vertical-align: middle;
    }
    .tuijian li b {
        display: block;
        width: 100%;
        overflow: hidden;
        height: 30px;
        line-height: 30px;
        margin: 10px 0;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .tuijian li span {
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        font-size: 14px;
        height: 58px;
    }
    .readmore {
        margin: 10px 0 0 0;
        color: #096;
        display: block;
        text-decoration: none;
        cursor: pointer;
    }
    .readmore:before {
        content: "+";
        color: #063;
    }
    .rightbox{
        width: 18%;
        float: right;
        overflow: hidden;
        margin-right: 20%;
        margin-top: 25px;
    }
    .sidebar_widget{
        transition: all .3s ease-out 0s;
        border-radius: 2px;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.08);
        position: relative;
        overflow: hidden;
        background: #fff;
        border: 1px solid #eee;
        vertical-align: top;
    }
    .author_info {
        text-align: center;
    }
    .widget_avatar{
        position: relative;
        height: 100px;
        margin-bottom: 54px;
        background: url(../../assets/u=3782685451,3066622536&fm=27&gp=0.jpg) no-repeat center center;
    }
    .widget_avatar a{
        display: block;
        position: absolute;
        top: 54px;
        left: 50%;
        margin-left: -40px;
        padding: 6px;
        background-color: transparent;
        border-radius: 100%;
    }
    .widget_avatar a img{
        border-radius: 50%;
        cursor: pointer;
    }
    .big{
        cursor: pointer;
    }
    .admin_field{
        background-color: #ffa600;
        color: #fff;
        font-size: 12px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 6px;
        padding: 0 6px;
        line-height: 24px;
        border-radius: 2px;
    }
    .author-social{
        text-align: center;
        padding: 10px 0 20px;
        position: relative;
    }
    .author-weixin{
        display: inline-block;
        margin-left: 10%;
        border-radius: 2px;
        float: left;
    }
    .author-weixin div{
        position: relative;
        width: 60px;
        height: 35px;
        background: url(../../assets/weixinlu.png) no-repeat center center;
        cursor: pointer;
    }
    .author-weixin div img{
        display: none;
        position: absolute;
        top: -100px;
        left: 0;
    }
    .author-weixin div:hover  #img1{
        display: inline-block;
        position: absolute;
        top: -100px;
        left: 0;
    }
    .author-weixin div:hover{
        cursor: pointer;
        width: 60px;
        height: 35px;
        background: url(../../assets/weixinhei.png) no-repeat;
    }
    .author-qq{
        display: inline-block;
        border-radius: 2px;
        text-align: center;
    }
    .author-qq div{
        width: 57px;
        height: 35px;
        background: url(../../assets/qqhong.png) no-repeat;
        cursor: pointer;
    }
    .author-qq div img{
        display: none;
    }
    .author-qq div img{
        display: none;
        position: absolute;
        top: -100px;
        left: 0;
    }
    .author-qq div:hover  #img2{
        display: inline-block;
        position: absolute;
        top: -100px;
        left: 50px;
    }
    .author-qq div:hover{
        cursor: pointer;
        width: 57px;
        height: 35px;
        background: url(../../assets/qqhei.png) no-repeat;
    }
    .author-diy{
        display: inline-block;
        margin-right: 10%;
        border-radius: 2px;
        float: right;
    }
    .author-diy div{
        width: 57px;
        height: 35px;
        background: url(../../assets/weibolan.png) no-repeat;
        cursor: pointer;
    }
    .author-diy div:hover{
        cursor: pointer;
        width: 57px;
        height: 35px;
        background: url(../../assets/weibohei.png) no-repeat;
    }
    .author-diy div a{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .sidebar_widget p{
        padding: 0 20px;
        font-weight: 500;
        text-align: justify;
        margin-bottom: 18px;
        line-height: 20px;
        color: #666;
        font-family: "Microsoft Yahei",Helvetica,Arial,sans-serif;
        font-size: 10px;
    }
    .author_count{
        background-color: #fff;
        border-top: 1px #efefef solid;
    }
    .author_count ul{
        display: flex;
        text-align: center;
    }
    .author_count ul li {
        float: left;
        width: 33.333%;
        border-right: 1px #efefef solid;
        padding: 8px 0;
        font-weight: 300;
    }
    .author_count ul li span {
        display: block;
        font-size: 14px;
        color: #999;
        font-weight: 300;
    }
    .author_count ul li strong {
        color: #666;
        font-size: 12px;
        font-family: "Microsoft Yahei",Helvetica,Arial,sans-serif;
        line-height: 1.42857143;
    }
    .paihang{
        background: #FFF;
        border-radius: 10px;
        overflow: hidden;
        margin: 20px 0;
    }
    .ab_title{
        text-align: center;
        position: relative;
        margin: 20px;
    }
    .ab_title:before {
        content: "";
        width: 25%;
        height: 2px;
        background: #000;
        position: absolute;
        left: 0;
        bottom: 8px;
    }
    .ab_title:after {
        content: "";
        width: 25%;
        height: 2px;
        background: #000;
        position: absolute;
        right: 0;
        bottom: 8px;
    }
    .ab_title a{
        text-decoration: none;
        color: #555;
    }
    .paihang ul{
        padding: 10px;
    }
    .paihang ul li{
        border-bottom: solid 1px #EAEAEA;
        font-size: 14px;
        margin: 0 0 10px 0;
        padding: 0 0 10px 0;
        overflow: hidden;
        display: list-item;
        text-align: -webkit-match-parent;
    }
    .paihang ul li b {
        height: 30px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: block;
    }
    .paihang ul li a{
        text-decoration: none;
        color: #555;
    }
    .paihang ul li p {
        line-height: 24px;
        color: #888;
        font-size: 14px;
    }
    .paihang li p i {
        width: 100px;
        height: 90px;
        overflow: hidden;
        display: block;
        border: #efefef 1px solid;
        float: left;
        margin-right: 10px;
    }
    .hometitle{
        padding: 0 10px;
        line-height: 40px;
        height: 40px;
        font-size: 18px;
        border-bottom: #000 2px solid;
        position: relative;
    }
    .list{
        padding: 10px;
        overflow: hidden;
    }
    .list li{
        border-bottom: #ccc 1px solid;
        margin-bottom: 10px;
        overflow: hidden;
    }
    .blogtitle{
        line-height: 30px;
        margin: 10px 0;
    }
    .blogtitle a{
        text-decoration: none;
        color: #555;
    }
    .blogpic{
        overflow: hidden;
        width: 30%;
        max-height: 100px;
        display: block;
        float: left;
        margin-right: 20px;
        border-radius: 5px;
    }
    .blogpic img{
        width: 90%;
    }
    .bloginfo p {
        color: #888;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        padding-top: 10px;
        font-size: 14px;
    }
    .dtime{
        margin: 0 10px 0 0;
        padding-left: 20px;
        float: left;
        color: #838383;
        font-size: 12px;
        background: url("../../assets/newsbg02.png") no-repeat left center;
    }
</style>
