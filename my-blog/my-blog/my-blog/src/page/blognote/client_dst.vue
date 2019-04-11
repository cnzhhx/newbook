<template>
    <div class="page">
        <div class="client_dst">
            <h1>客户端数据储存（上）</h1>
            <p class="kongxi"></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随着web应用程序的出现，也产生了对于能够直接在客户端上储存用户信息的能力的要求。想法很合乎逻辑，属于某个特定用户的信息应该存在该用户的机器上。（由此网景公司提出了cookie）</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今天，cookie只是在客户端存储数据的其中一种方式。</p>
            <p class="kongxi"></p>
            <h2>1.Cookie </h2>
            <p class="kongxi"></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP Cookie，通常直接叫做cookie，它是一种客户端管理技术</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该标准要求服务器对任意HTTP请求发送Set-Cookie HTTP头作为响应的一部分。浏览器会储存这样的会话信息，并在这之后，通过为每个请求添加Cookie HTTP头将信息发送到服务器。发送回服务器的额外信息可以用于唯一验证客户来自于发送的哪个请求。</p>
            <p class="kongxi"></p>
            <h3>1.1限制</h3>
            <p class="kongxi"></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cookie在性质上市绑定在特定的域名下的。当设定了一个cookie后，再给创建它的域名发送请求时，都会包含这个cookie。这个限制确保了储存在cookie中的信息只能让批准的接受者访问，为无法被其他域访问。</p>
            <p class="kongxi"></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于cookie是存在于客户端计算机上的，还加入了一些限制确保cookie不会被恶意使用，同时不会占用太多磁盘空间。每个域的cookie总数是有限的，有浏览器差异。一般最多保存20个。并且每个cookie的尺寸也有限制，一般在4096b以内。</p>
            <p class="kongxi"></p>
            <h31.2 cookie的构成</h3>
            <p class="kongxi"></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cookie由浏览器保存的以下几块信息构成</p>
            <p class="kongxi"></p>
            <h4>1.1.1名称</h4>
            <p class="kongxi"></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个唯一确定cookie的名称。Cookie名称不区分大小写，但最好一致。Cookie的名称必须经过URL编码。</p>
            <p class="kongxi"></p>
            <h4>1.1.2值</h4>
            <p class="kongxi"></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;储存在cookie中的字符串值。值必须被URL编码。</p>
            <p class="kongxi"></p>
            <h4>1.1.3域</h4>
            <p class="kongxi"></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cookie对于哪个域有效的。所有向该域发送的请求中都会包含这个cookie信息。这个值可以包含子域，也可以不包含它。如果没有明确设定，那么这个域将会被认作来自设置cookie的那个域。</p>
            <p class="kongxi"></p>
            <h4>1.1.4路径</h4>
            <p class="kongxi"></p>
            <p>对于指定域中的那个路径，应该向服务器发送cookie。例如你可以指定cookie只有从https：//xiaozhqq.cn/first中才能访问，那么https://xiaozhqq.cn的页面就不会发送cookie信息，即使请求都是来自同一个域。</p>
            <p class="kongxi"></p>
            <h4>1.1.5失效时间</h4>
            <p class="kongxi"></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;表示cookie何时应该被删除的时间戳。默认情况下，浏览器会话结束时即将所有的cookie删除；不过也可以自己设置删除时间。这个值是个GMT格式的日期（wdy， DD-Mon-YYYY HH：MM：SS GMT），用于指定应该删除cookie的准确时间。</p>
            <p class="kongxi"></p>
            <h4>1.1.6安全标志</h4>
            <p class="kongxi"></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;指定后，cookie只有在使用SSL连接的时候才发送到服务器。例如，cookie信息只能发送给https://xiaozhqq.cn，而http://xiaozhqq.cn的请求就不能发送cookie。</p>
            <p class="kongxi"></p>
            <p class="kongxi"></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每一段信息都作为Set-Cookie头的一部分，而使用分号加空格分割每一段，如下例所示。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set-Cookie: name=value; expire=Mon, 22-Jan-07 07:10:24 GMT; domian=xiaozhqq.cn; secure</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;secure标志是cookie中唯一一个非键值对的部分，直接包含一个secure单词。 </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "client_dst"
    }
</script>

<style scoped>
    .page{
        background-color: rgb(241,241,241);
        width: 100%;
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
