<template>
    <div class="page">
        <div class="inheritNote">
            <h1>继承的具体方式详解</h1>
            <p class="kongxi"></p>
            <h2>一． 继承-原型链继承</h2>
            <p class="kongxi"></p>
            <h3>1.原型链</h3>
            <p class="kongxi"></p>
            <p>每个函数都能构造出一个对象，这个对象内部有个属性指向这个函数的原型对象；</p>
            <p>原型对象本质也是一个对象，也是由另外一个构造函数构造出来的，也只想那个构造函数的原型对象；</p>
            <p>以上，形成了一个链式的结构，就成为原型链</p>
            <img src=""/>
            <p></p>
            <p></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inheritNote"
    }
</script>

<style scoped>
    .page{
        background-color: rgb(241,241,241);
        width: 60%;
        height: 100%;
        padding: 20px 20% 0 20%;
    }
    .inheritNote{
        width: 100%;
        background-color: #fff;
    }
    .kongxi{
        height: 20px;
    }
</style>
