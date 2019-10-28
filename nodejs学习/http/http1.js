let http = require("http");

//创建服务器
let server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-Type": "text/html;charset=UTF-8"});
    res.write("Hello, xiaozh sir");
    res.end("Hello!!!, zhhx");
});

//监听
server.listen(80, "127.0.0.1");