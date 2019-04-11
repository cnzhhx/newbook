<template>
    <div class="page">
        <div class="Unknown-JS-3">
            <a href="#">你不知道的js（笔记）</a>
            <p class="kongxi"></p>
            <h1>第三章 原生函数</h1>
            <p class="kongxi"></p>
            <p>JavaScript的内建函数（build-in function），也叫原生函数（native function）。</p>
            <p class="kongxi"></p>
            <p>常见的原生函数有：</p>
            <p>String（）</p>
            <p>Number（）</p>
            <p>Boolean（）</p>
            <p>Array（）</p>
            <p>Object（）</p>
            <p>Function（）</p>
            <p>RegExp（）</p>
            <p>Date（）</p>
            <p>Error（）</p>
            <p>Symbol（）——ES6中新加入的</p>
            <p class="kongxi"></p>
            <h2>3.1内部属性[[Class]]</h2>
            <p class="kongxi"></p>
            <p>所有typeof返回值为“object”的对象（如数组）都包含一个内部属性[[Class]]（我们可以把它看做一个内部的分类，而非传统的面对对象意义上的类）。这个属性无法直接访问，一般通过Object.prototype.toString（）来查看。</p>
            <p class="kongxi"></p>
            <div class="daima">
                <pre>Object.prototype.toString.call（[1,2,3]）；
// “[object Array]”
Object.prototype.toString.call（/regex-literal/i）；
// “[object RexExp]”
</pre>
            </div>
            <p class="kongxi"></p>
            <p>虽然Null（）和Undefined（）这样的原生构造函数并不存在，但是内部的[[Class]]属性值仍然是“Null”和“Undefined”。</p>
            <p class="kongxi"></p>
            <div class="daima">
                <pre>Object.prototype.toString.call（null）；
// “[object Null]”
Object.prototype.toString.call（undefined）；
// “[object Undefined]”
</pre>
            </div>
            <p class="kongxi"></p>
            <p>其他基本类型值（如字符串，数字和布尔）的情况有所不同，通常称为“包装”</p>
            <p class="kongxi"></p>
            <div class="daima">
                <pre>Object.prototype.toString.call（“abc”）；
// “[object String]”
Object.prototype.toString.call（42）；
// “[object Number]”
Object.prototype.toString.call（true）；
// “[object Boolean]”
</pre>
            </div>
            <p class="kongxi"></p>
            <p>上例中基本类型值被各自的封装对象自动包装，所以他们的内部[[Class]]属性值分别为“String”，“Number”和“Boolean”。</p>
            <p class="kongxi"></p>
            <h2>3.2 封装对象包装</h2>
            <p class="kongxi"></p>
            <p>封装对象（object wrapper）扮演着十分重要的角色。由于基本类型值没有.length和.toString()这样的属性和方法，需要通过封装对象才能访问，此时JavaScript会自动为基本类型值包装一个封装对象：</p>
            <div class="daima">
                <pre>var a = “abc”；
a.length;   //3
</pre>
            </div>
            <p class="kongxi"></p>
            <p>一般情况，我们不需要直接使用封装对象，JavaScript引擎自己会做出决定什么时候一个使用封装对象。</p>
            <p class="kongxi"></p>
            <p>而且使用封装对象的时候（new。。。）要注意，封装false很有可能会导致结果相反，最好使用Object（）函数（不带new关键字）。强调一般不推荐直接使用封装对象。</p>
            <p class="kongxi"></p>
            <h2>3.3 拆封</h2>
            <p class="kongxi"></p>
            <p>如果想要得到封装对象中的基本类型值，可以使用valueOf（）函数：</p>
            <p class="kongxi"></p>
            <div class="daima">
                <pre>var a = new string（“abc”）；

a.valueOf（）； //”abc”
</pre>
            </div>
            <p class="kongxi"></p>
            <p>在需要用到封装对象中的基本类型值的地方会发生隐式拆封。具体过程（即强制类型转换）将在第4章详细介绍。</p>
            <p class="kongxi"></p>
            <div class="daima">
                <pre>var a = new string（“abc”）；
var b = a+“”； //b的值为“abc”

typeof a；//”object”
typeof b；//”string”
</pre>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Unknown-JS-3"
    }
</script>

<style scoped>
    .page{
        background-color: rgb(241,241,241);
        width: 100%;
        height: 100%;
        padding: 20px 20% 0 20%;
    }
    .Unknown-JS-3{
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
