<template>
    <div class="message">
        <div id="box">
            <div class="box-top">
                <label>发表评论：</label>
                <textarea id="my_textarea" cols="60" rows="10"></textarea>
                <button @click="fabiao()" id="btn">发表</button>
            </div>
            <div class="uldiv">
                <ul id="ul">
                    <li v-for="(LiuyanData, index) in $store.state.LiuyanDatas" :key="index">
                        {{LiuyanData.liuyan}}
                        <span>{{LiuyanData.time}}</span>
                    </li>
                </ul>
            </div>
            <div class="haoMa">
                <div class="weiye">尾页</div>
                <ul class="ulliuyan">
                    <li class="liliuyan" v-for="(LiuyanData, index) in Math.ceil($store.state.LiuyanDatas.length/13)" :key="index">
                        {{index+1}}
                    </li>
                </ul>
                <div class="shouye">首页</div>

            </div>
        </div>
    </div>
</template>

<script>
    import {liuYan} from "../../api/index";


    export default {
        name: "message",
        data() {
          return{
              LiuyanDatas : this.$store.state.LiuyanDatas
          }
        },
        methods: {
            async fabiao() {
                let result;
                let content = document.getElementById("my_textarea").value;

                if(content.length === 0) {
                    alert("请输入评论的内容");
                    return;
                }

                let li = document.createElement('li');
                let ul = document.getElementById("ul");
                let myDate = new Date();
                let Month = myDate.getMonth()+1;
                let date = myDate.getFullYear()+"-"+ "0"+ Month+"-"+myDate.getDate();
                li.innerHTML = content + "<span></span>";
                ul.insertBefore(li, ul.children[0]);
                let date2 = li.childNodes[1];
                date2.innerHTML = date;

                ul.style.margin = "0 80px";
                li.style.borderBottom= '1px dashed #ccc';
                li.style.lineHeight= '44px';
                date2.style.float= 'right';

                my_textarea.value = '';

                result = await liuYan(content, date);

                // let as =  ul.getElementsByTagName('a');
                // for (let i = 0; i < as.length; i++) {
                //     let a = as[i];
                //     a.onclick = function () {
                //         this.parentNode.remove();
                //     }
                // }
            },
            tiaoYue(){
                let ul = document.getElementById("ul");
                let uldiv = document.getElementsByClassName("uldiv")[0];

            }
        },
        mounted() {
            this.$store.dispatch('reqLiuyanDatas');
            console.log(this.LiuyanDatas.length);
        },
    }
</script>

<style scoped>
    .message{
        background-color: #f1f1f1;
        width: 100%;
        height: 1000px;
        justify-content: center; /*子元素水平居中*/
        align-items: center; /*子元素垂直居中*/
        display: -webkit-flex;
    }

    #box {
        width: 800px;
        border: 1px solid #ccc;
        padding: 20px;
    }

    #my_textarea {
        width: 80%;
        height: 120px;
        resize:none;
    }
    .box-top {
        margin-bottom: 20px;
    }
    .uldiv{
        margin:  0 80px;

    }
    #ul {
        overflow: hidden;
        height: 590px;
    }
    #ul li a {
        float: right;
    }

    #ul li {
        border-bottom: 1px dashed #ccc;
        line-height: 44px;
    }

    #ul li span {
        float: right;
    }
    .haoMa{
        padding-top: 10px;
    }
    .shouye{
        float: right;
        padding: 0 2px 0 2px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .weiye{
        float: right;
        margin-left: 5px;
        padding: 0 2px 0 2px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .ulliuyan{
        display: inline-block;
        float: right;
    }
    .liliuyan{
        display: inline-block;
        padding: 0 2px 0 2px;
        margin-left: 5px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
</style>
