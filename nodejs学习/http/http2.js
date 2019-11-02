let http = require("http");
let fs = require("fs");

//创建服务器
let server = http.createServer((req, res)=>{
    if(req.url === "/test1"){
        fs.readFile("./test1.html", (err, data)=>{
            if(!err){
                res.writeHead(200, {"Content-Type": "text/html;charset=Utf-8"});
                res.end(data);
            }
        })
    }else if(req.url === "/test2"){
        fs.readFile("./test2.html", (err, data)=>{
            if(!err){
                res.writeHead(200, {"Content-Type": "text/html;charset=Utf-8"});
                res.end(data);
            }
        })
    }else if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
        res.end("Hello World!")
    }else{
        res.writeHead(404, {"Content-Type": "text/html;charset=UTF-8"});
        res.end("访问的页面不存在")
    }
});


//监听
server.listen(80, "127.0.0.1");