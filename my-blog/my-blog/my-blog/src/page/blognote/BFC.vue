<template>
    <div class="page">
        <div class="BFC">
            <h1>BFC</h1>
            <p class="kongxi"></p>
            <h2>1.什么是BFC</h2>
            <p class="kongxi"></p>
            <p>BFC即Block Formatting Content “块级格式化上下文”</p>
            <p>它是页面的一块渲染区域，有一套渲染规则，决定了子元素如何布局，以及和其他元素之间的关系和作用。</p>
            <p>一个创建了新的BFC的盒子是独立布局的，盒子里的样式不会影响到外面的元素。</p>
            <p class="kongxi"></p>
            <h2>2.BFC的触发条件（有其之一就可触发）</h2>
            <p class="kongxi"></p>
            <p>根元素，即HTML元素</p>
            <p>float的值不为none</p>
            <p>overflow的值部位visible</p>
            <p>display的值为inline-block、table-cell、table-caption</p>
            <p>position的值为absolute或者fixed</p>
            <p class="kongxi"></p>
            <h2>3.BFC的布局规则</h2>
            <p class="kongxi"></p>
            <p>内部的box会在垂直方向上一个接着一个的放置；</p>
            <p>Box垂直方向的距离由margin决定，同一个BFC的两个相邻box的margin会折叠；</p>
            <p>BFC的区域不会和float box重叠；</p>
            <p>BFC盒子里的样式不会影响到外面的元素（反之亦然）；</p>
            <p>计算BFC的高度时，浮动元素算入其中</p>
            <p class="kongxi"></p>
            <h2>4.作用</h2>
            <p class="kongxi"></p>
            <p>（1）阻止垂直外边距（margin-top、margin-buttom）折叠</p>
            <p>属于一个BFC的两个相邻块级子元素（元素都要在文档流中）的上下margin会发生重叠——分为两个BFC就可以消除这种margin重叠</p>
            <p>在每个div外面包裹一层容器，并触发该容器生成一个div，那么相邻的div便属于不同的div，这就不会发生重叠</p>
            <p class="kongxi"></p>
            <div class="daima">
                <pre>
        &lthtml&gt
        &lthead&gt
            &ltstyle&gt
                .div1{
                    width: 200px;
                    height: 200px;
                }
                .div2{
                    width: 200px;
                    height: 50px;
                    background-color: orangered;
                    margin-bottom: 50px;
                }
                .div3{
                    width: 200px;
                    height: 50px;
                    background-color: skyblue;
                    margin-top: 50px;
                }
                /* .div4{
                    overflow: hidden;
                }
                .div5{
                    overflow: hidden;
                } */
            &lt/style&gt
        &lt/head&gt
        &ltbody&gt
        &ltdiv class="div1"&gt
            &lt!-- &ltdiv class="div4"&gt&ltdiv class="div2"&gt&lt/div&gt&lt/div&gt
            &ltdiv class="div5"&gt&ltdiv class="div3"&gt&lt/div&gt&lt/div&gt --&gt
            &ltdiv class="div2"&gt&lt/div&gt
            &ltdiv class="div3"&gt&lt/div&gt
        &lt/div&gt
        &lt/body&gt
        &lt/html&gt
            </pre>
            </div>
            <p class="kongxi"></p>
            <img src="../../assets/123.png" height="219" width="235"/>
            <img src="../../assets/1234.png" height="158" width="204"/>
            <p class="kongxi"></p>
            <p>增加后</p>
            <div class="daima">
                <pre>
        &lthtml&gt
           &lthead&gt
               &ltstyle&gt
                   .div1{
                       width: 200px;
                       height: 200px;
                   }
                   .div2{
                       width: 200px;
                       height: 50px;
                       background-color: orangered;
                       margin-bottom: 50px;
                   }
                   .div3{
                       width: 200px;
                       height: 50px;
                       background-color: skyblue;
                       margin-top: 50px;
                   }
                   .div4{
                       overflow: hidden;
                   }
                   .div5{
                       overflow: hidden;
                   }
               &lt/style&gt
           &lt/head&gt
           &ltbody&gt
               &ltdiv class="div1"&gt
                   &ltdiv class="div4"&gt&ltdiv class="div2"&gt&lt/div&gt&lt/div&gt
                   &ltdiv class="div5"&gt&ltdiv class="div3"&gt&lt/div&gt&lt/div&gt
               &lt/div&gt
           &lt/body&gt
        &lt/html&gt
                </pre>
            </div>
            <p class="kongxi"></p>
            <img src="../../assets/12345.png" height="231" width="230"/>
            <img src="../../assets/123456.png" height="212" width="218"/>
            <p class="kongxi"></p>
            <p>（2）清除内部浮动</p>
            <p class="kongxi"></p>
            <div class="daima">
                <pre>
        &lthtml&gt
            &lthead&gt
                &ltstyle&gt
                    .second{
                        width: 400px;
                        padding: 10px;
                        border: 1px solid slateblue;

                    }
                    .float{
                        float: left;
                        width: 200px;
                        height: 50px;
                        background: salmon;
                    }
                    .s1{

                        background: slategray;

                    }
                &lt/style&gt
            &lt/head&gt
            &ltbody&gt
                &ltdiv class="second"&gt
                    &ltdiv class="float"&gt
                    &lt/div&gt
                    &ltdiv class="s1"&gt
                        IE6、IE7中， // function foo(){ // console.log(a); // } // function bar(){ // var a =3 ;
                        IE6、IE7中， // function foo(){ // console.log(a); // } // function bar(){ // var a =3 ;
                   &lt/div&gt
                &lt/div&gt
           &lt/body&gt
        &lt/html&gt
                </pre>
            </div>
            <p class="kongxi"></p>
            <img src="../../assets/1234567.png" height="116" width="409"/>
            <img src="../../assets/12345678.png" height="303" width="345"/>
            <p class="kongxi"></p>
            <p>因为前面个div浮动，导致后面个占据了前面个原来的位置，元素内容比较多的时候，内容会环绕着浮动的元素。</p>
            <p class="kongxi"></p>
            <p>消除环绕，为其本身创建BFC</p>
            <p>修改后</p>
            <img src="../../assets/1234567890.png" height="82" width="394"/>
            <img src="../../assets/123456789.png" height="176" width="412"/>
            <p class="kongxi"></p>
            <p>（3）消除父盒子的高度坍塌</p>
            <p>当子元素浮动时，因为子元素脱离文档流，如果没有其他的·子元素撑起，就会导致父盒子高度坍塌</p>
            <p>由前面第二点的规则可知，计算BFC的高度时，浮动元素也会算入其中，所以只需将父盒子设置为BFC即可</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BFC.vue"
    }
</script>

<style scoped>
    .page{
        background-color: rgb(241,241,241);
        width: 60%;
        height: 100%;
        padding: 20px 20% 0 20%;
    }
    .BFC{
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
