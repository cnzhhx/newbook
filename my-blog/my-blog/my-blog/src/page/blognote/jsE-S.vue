<template>
    <div class="page">
        <div class="jsE-S">
            <h1>JavaScript事件流</h1>
            <p class="kongxi"></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript与HTML之间的交互是通过事件来实现的。事件，就是文档或浏览器窗口中阿生的一些特定的交互瞬间。可以使用监听器（或者处理程序）来预定事件，以便在事件发生时执行相应的代码。（观察者模式的模型）。</p>
            <p class="kongxi"></p>
            <h2>DOM事件流</h2>
            <p class="kongxi"></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;事件流描述的是从页面中接受事件的顺序。  现在“DOM2级事件”规定的事件流包括：事件捕获阶段、处于目标阶段和事件冒泡阶段。首先发生的是事件捕获，为截获事件提供了机会。然后是实际的目标接收到事件。最后一个阶段是冒泡阶段，可以在这个阶段对事件做出响应。 </p>
            <p class="kongxi"></p>
            <div class="daima">
                <pre>&lt/!DOCTYPE html&gt
&lt/html lang="en"&gt
&lt/head&gt
    &lt/meta charset="UTF-8"&gt
    &lt/title&gtTitle&lt//title&gt
&lt//head&gt
&lt/body&gt
    &lt/div id="myDiv"&gtClick Me&lt//div&gt
&lt//body&gt
&lt//html&gt
                </pre>
            </div>
            <p class="kongxi"></p>
            <img src="../../assets/shijianliu.png"/>
            <p class="kongxi"></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;参考书籍《JavaScript高级程序设计》</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "jsE-S"
    }
</script>

<style scoped>
    .page{
        background-color: rgb(241,241,241);
        width: 100%;
        height: 100%;
        padding: 20px 20% 0 20%;
    }
    .jsE-S{
        width: 100%;
        background-color: #fff;
    }
    .kongxi{
        height: 20px;
    }
    .daima{
        border: 1px solid black;

    }
</style>
