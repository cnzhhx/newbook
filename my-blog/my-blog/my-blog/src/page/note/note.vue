<template>
    <div class="note">
        <div id="Note">
            <div class="leftbox">
                <div class="newblogs">
                    <h2 class="hometitle">全部文章</h2>
                    <ul class="list">
                        <li v-for="(allNote, index) in $store.state.allNotes" :key="index">
                            <h3 class="blogtitle" >
                                <a @click="switchTo(allNote.path)">{{allNote.title}}</a>
                            </h3>
                            <div class="bloginfo">
                            <span class="blogpic">
                                <a href="#">
                                    <img @click="switchTo(allNote.path)" :src="allNote.img"/>
                                </a>
                            </span>
                                <p>
                                    {{allNote.content}}
                                </p>
                            </div>
                            <div class="autor">
                            <span class="dtime">
                                {{allNote.time}}
                            </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="rightbox">
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

        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "note",
        methods:{
            switchTo(path) {
                this.$router.push(path);
            }
        },
        mounted() {
            this.$store.dispatch('reqAllNotes');
            console.log(this.$store.state.allNotes);



            let Note = document.getElementById("Note");
            const lujing = this.$route.path;
            if(lujing === "/note"){
                Note.style.display = "block"
            }else{
                Note.style.display = "none"
            }
        },
        updated() {
            let Note = document.getElementById("Note");
            const lujing = this.$route.path;
            if(lujing === "/note"){
                Note.style.display = "block"
            }else{
                Note.style.display = "none"
            }
        }
    }
</script>

<style scoped>
    .note{
        background-color: #f1f1f1;
        width: 100%;
        height: 100%;
    }
    #Note{
        overflow:hidden;
        width: 100%;

    }
    .leftbox{
        width: 40%;
        float: left;
        overflow: hidden;
        margin-left: 20%;
        margin-top: 25px;
    }
    .newblogs{
        background-color: white;
        margin-top: 20px;
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
        float: left;
        color: #838383;
        font-size: 12px;
    }
    .rightbox{
        width: 18%;
        float: right;
        overflow: hidden;
        margin-right: 20%;
        margin-top: 25px;
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
</style>
