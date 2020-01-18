let http = require("http");
let url = require("url");


http.createServer((req, res)=>{
    if(req.url === "/postmsg" && req.method.toLowerCase() === "post"){
        console.log("zhhx");
    }
    console.log(req.url);
    console.log(req.method);
    res.end("hello world!");
}).listen(80, "127.0.0.1");