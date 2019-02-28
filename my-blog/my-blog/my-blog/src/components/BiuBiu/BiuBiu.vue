<template>
    <div class="BiuBiu" @click.prevent="Return()">
        <img src="../../assets/e6752a0e37038855d949200074efa0ab.jpg"/>
        <span>&nbsp返回<br>&nbsp顶部</span>
    </div>
</template>

<script>
    export default {
        name: "BiuBiu",
        data(){
          return{
              scrollTop:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods:{
            handleScroll () {
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

                let BiuBiu = document.getElementsByClassName('BiuBiu')[0];
                if(this.scrollTop === 0){
                    BiuBiu.style.display = "none";
                }else{
                    BiuBiu.style.display = "block";
                }
            },

            Return(){

                let begin = this.scrollTop, end = 0, timer = null;

                //清除定时器
                clearInterval(timer);

                //开启缓动动画
                timer = setInterval(function () {
                    begin = begin + (end - begin) * 0.2;
                    window.scrollTo(0,begin);

                    //清除定时器
                    if(Math.round(begin) === end) {
                        clearInterval(timer);
                    }
                }, 15);
            }
        }
    }
</script>

<style scoped>
    .BiuBiu{
        border: 1px solid #ccc;
        width: 45px;
        padding-left: 5px;
        display: none;
    }
    .BiuBiu img{
        height: 40px;
    }
    .BiuBiu span{
        display: none;
        cursor: pointer;
    }
    .BiuBiu:hover img{
        display: none;
    }
    .BiuBiu:hover span{
        display: inline;
    }
</style>
