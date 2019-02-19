<template>
    <div class="page">
        <div class="Unknown-JS-2">
            <a href="#">你不知道的js（笔记）</a>
            <p class="kongxi"></p>
            <h1>第二章 值</h1>
            <p class="kongxi"></p>
            <h2>2.1 数组</h2>
            <p class="kongxi"></p>
            <p>在JavaScript中，数组可以容纳任何类型的值。</p>
            <p class="kongxi"></p>
            <p>在创建“稀疏”数组（sparse array，即含有空白或空缺单元的数组）时要注意：</p>
            <div class="daima">
                <pre>var a = [ ];
a[0] = 1;
</pre>
            </div>
            <p>//此处没有设置a[1]单元</p>
            <div class="daima">
                <pre>a[2] = [3];
a[1];   //undefined
a.length； // 3
</pre>
            </div>

            <p>上面的代码可以正常运行，但是其中的“空白单元”（empty slot）可能会导致出人意料的结果。a[1]的值为undefined，但这与将其显式赋值为undefined（a[1] = undefined）还是有所区别。详情见3.4.1节</p>
            <p class="kongxi"></p>
            <h2>2.2字符串</h2>
            <p class="kongxi"></p>
            <p>JavaScript中的字符串是不可变的，而数组是可变的。</p>
            <p>字符串不可变是指字符串的成员函数不会改变其原始值，而是创建并返回一个新的字符串。而数组的成员函数都是在其原始值上进行操作。</p>
            <p class="kongxi"></p>
            <p>字符串反转最简单粗暴的方式是字符串转换为数组，利用数组的reverse（）方法处理完后再将结果过转换为字符串。</p>
            <p class="kongxi"></p>
            <h2>2.3 数字</h2>
            <p class="kongxi"></p>
            <p>JavaScript只有一种数字类型。</p>
            <p>数字支持科学计数法。</p>
            <p>JavaScript 不是类型语言。与许多其他编程语言不同，JavaScript 不定义不同类型的数字，比如整数、短、长、浮点等等。</p>
            <p class="kongxi"></p>
            <p>JavaScript 中的所有数字都存储为根为 10 的 64 位（8 比特），浮点数。 前缀为0是8进制，0x是16进制。</p>
            <p>用二进制来存储和处理数字，不能精确表示浮点数。有些小数转换为二进制位数是无穷的（有循环），但是64位中小数最多只有52位，因此对于位数超过的相当于被截取了，导致了精度的丢失。</p>
            <p class="kongxi"></p>
            <h2>2.4 特殊数值</h2>
            <p class="kongxi"></p>
            <h3>2.4.1 不是值的值</h3>
            <p class="kongxi"></p>
            <p>undefined类型只有一个值，即undefined。null类型也只有一个值，即null。他们的名称及时类型也是值。</p>
            <p class="kongxi"></p>
            <p>undefined为已声明但是未给值，即未定义；</p>
            <p>null是指已声明并且已给值，只是赋值为null，即为空值。</p>
            <p class="kongxi"></p>
            <p>null是个特殊关键字，不是标识符，不能将其作为变量来使用或者复制，然而undefined是一个标识符，可以作为变量来使用和赋值。</p>
            <p class="kongxi"></p>
            <h3>2.4.2 undefined</h3>
            <p class="kongxi"></p>
            <p>在非严格模式下，我们可以为全局标识符undefined赋值</p>
            <p class="kongxi"></p>
            <p>undefined = 2；</p>
            <p>但是请永远不要重新定义undefined</p>
            <p class="kongxi"></p>
            <p>通过void运算符可以获得undefined，比如void 0。</p>
            <p>并且void运算符可以让表达式不返回任何结果（即使其有副作用）</p>
            <p class="kongxi"></p>
            <h3>2.4.3 特殊的数字</h3>
            <p class="kongxi"></p>
            <p>.不是数字的数字</p>
            <p>NaN意指“不是一个数字”（not a number），但是可能将它理解为一个“无效数值”更准确。</p>
            <p class="kongxi"></p>
            <div class="daima">
                <pre>var a = 2/‘foo’； //NaN
typeof a === “number”； //true
</pre>
            </div>
            <p>换句话说，NaN仍然是数字类型。</p>
            <p class="kongxi"></p>
            <p>并且NaN并不等于自身。</p>
            <p class="kongxi"></p>
            <p>IsNaN（）有缺陷，有时无法得到正确结果（详情百度）</p>
            <p class="kongxi"></p>
            <p>最好使用Number.isNaN（）确定传递的值是否为NaN和其类型是 Number。它是原始的全局isNaN（）的更强大的版本。</p>
            <p class="kongxi"></p>
            <h2>2.5 值和引用</h2>
            <p class="kongxi"></p>
            <p>JavaScript对值和引用的赋值/传递在语法上没有区别，完全根据值的类型来决定。</p>
            <p class="kongxi"></p>
            <p>简单值（即标量基本类型值， scalar primitive）总是通过值赋值的方式来赋值/传递，包括null，undefined，字符串，数字，布尔，ES6中的symbol。</p>
            <p class="kongxi"></p>
            <p>复合值（compound valar）——对象和函数，总是通过引用复制的方式来赋值/传递。</p>
            <p class="kongxi"></p>
            <p>请记住：我们无法自行决定使用值复制还是引用复制，一切由值的类型决定。</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Unknown-JS-2"
    }
</script>

<style scoped>
    .page{
        background-color: rgb(241,241,241);
        width: 60%;
        height: 100%;
        padding: 20px 20% 0 20%;
    }
    .Unknown-JS-2{
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
