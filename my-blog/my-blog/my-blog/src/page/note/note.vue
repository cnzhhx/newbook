<template>
    <div class="note" @click="routerxinxi()">
        <div class="Note">
            这里是博客笔记
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "note",
        methods:{
            routerxinxi() {
                console.log(this.$route.path)
            }
        },
        mounted() {
            let Note = document.getElementsByClassName("Note")[0];
            const lujing = this.$route.path;
            if(lujing === "/note"){
                Note.style.display = "block"
            }else{
                Note.style.display = "none"
            }
        },
        updated() {
            let Note = document.getElementsByClassName("Note")[0];
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

</style>
