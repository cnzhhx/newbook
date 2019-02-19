<template>
    <div class="page">
        <div class="Unknown-JS-1">
            <a href="#">你不知道的js（笔记）</a>
            <p class="kongxi"></p>
            <h1>第一章	类型</h1>
            <p class="kongxi"></p>
            <h2>1.1类型</h2>
            <p class="kongxi"></p>
            <p>ECMAScript语言类型包括Undefined、Null、Boolean、String、Number和Object。</p>
            <p class="kongxi"></p>
            <p>强制类型转换！！！（详见第四章笔记）</p>
            <p class="kongxi"></p>
            <h2>1.2 内置类型</h2>
            <p class="kongxi"></p>
            <p>七种内置类型</p>
            <p>空值（null）</p>
            <p>未定义（undefined）</p>
            <p>布尔值（boolean）</p>
            <p>数字（number）</p>
            <p>字符串（string）</p>
            <p>对象（object）</p>
            <p>符号（symbol，ES6中新增）</p>
            <p>！！！除了对象以外，其他的统称为“基本对象类型”</p>
            <p class="kongxi"></p>
            <p>用typeof运算符查看值的类型</p>
            <p>//ES6中加的新类型</p>
            <p>typeof Symbol() === “symbol”； //true</p>
            <p>有个bug，typeof null === “object”；//true</p>
            <p class="kongxi"></p>
            <h2>1.3 值和类型</h2>
            <p class="kongxi"></p>
            <p>JavaScript中的变量没有类型，只有值才有，变量可以随时持有任何类型的值。</p>
            <p class="kongxi"></p>
            <p>换个角度理解就是，JavaScript不做“类型强制”；也就是说，语言引擎不要求变量总是持有与其初始值相同的类型的值。一个变量可以现在被复制为字符串类型，随后又被复制为数字类型值</p>
            <p class="kongxi"></p>
            <p>在对变量执行typeof操作时，得到的结果并不是该变量的类型，而是该变量持有的值的类型，因为JavaScript中的变量没有类型。</p>
            <div class="daima">
                <pre>var a = 42；
typeof a；//“number”

a = true；
typeof a；//“boolean”
</pre>
            </div>
            <p class="kongxi"></p>
            <h3>1.3.1 undefined和undeclared</h3>
            <p class="kongxi"></p>
            <p>已在作用域中声明但是还没赋值的变量，是undefined。相反，还没在作用域中声名过的变量，是undeclared。</p>
            <p class="kongxi"></p>
            <div class="daima">
                <pre>var a；
a；//“undefined”
b；//“ReferenceError：b is not defined”
</pre>
            </div>
            <p>浏览器此时报错b应该是未声名（undeclared），“b is not defined”跟“undefined”是两码事；</p>
            <div class="daima">
                <pre>var a；
typeof a；//“undefined”
typeof b；//“undefined”
</pre>
            </div>
            <p>typeof没有将b报错，是因为有特殊的安全防护机制</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Unknown-JS-1"
    }
</script>

<style scoped>
    .page{
        background-color: rgb(241,241,241);
        width: 60%;
        height: 100%;
        padding: 20px 20% 0 20%;
    }
    .Unknown-JS-1{
        width: 100%;
        background-color: #fff;
    }
    .kongxi{
        height: 20px;
    }
    a{
        text-decoration: none;
        font-style: oblique;
    }
    .daima{
        border: 1px solid black;

    }
</style>
