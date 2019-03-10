<template>
    <div id="bottom">
        <div class="center">
            <p>Powerd & Designed by xiaozh</p>
            <p>Copyright© 2019 xiaozh</p>
            <a href="http://www.miit.gov.cn/">湘ICP备19003878号</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bottom"
    }
</script>

<style scoped>
    #bottom{
        width: 100%;
        height: 130px;
        background-color: rgb(84,92,100);
    }

    .center{
        text-align: center;
        padding-top: 30px;
    }
    .center a{
        text-decoration: none;
        color: rgb(95,127,127);
    }
</style>
