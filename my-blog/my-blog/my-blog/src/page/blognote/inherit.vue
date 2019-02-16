<template>
    <div class="page">
        <div class="inherit">
            <h1>面向对象-继承</h1>
            <p class="kongxi"></p>
            <h2>一．继承的概念</h2>
            <p class="kongxi"></p>
            <p>它有三个类，分别是超类型、父类型、子类型。</p>
            <p>举例:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类:  动物  狗类   哈士奇</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于狗类来说</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;动物是它的父类型,而哈士奇类是它的子类型</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于哈士奇类来说</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;狗类是它的父类型,动物类是它的超类型.</p>
            <p class="kongxi"></p>
            <p>继承就是要让子类拥有父类的资源</p>
            <p class="kongxi"></p>
            <h2>二．继承的方式</h2>
            <p class="kongxi"></p>
            <p>继承的方式:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原型链继承</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;借用构造函数继承</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;组合继承（比较合理的方法）</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原型式继承</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;寄生式继承</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;寄生组合式继承</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;拷贝属性继承</p>
            <p class="kongxi"></p>
            <h2>三．继承的意义</h2>
            <p class="kongxi"></p>
            <p>优点：减少代码冗余，方便统一操作</p>
            <p>缺点：耦合性较强</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inherit"
    }
</script>

<style scoped>
    .page{
        background-color: rgb(241,241,241);
        width: 60%;
        height: 100%;
        padding: 20px 20% 0 20%;
    }
    .inherit{
        width: 100%;
        background-color: #fff;
    }
    .kongxi{
        height: 20px;
    }
</style>
