//1.引入模块
let fs = require("fs");

//2.创建读入写出流
let rs = fs.createReadStream("../ScreenCapture_2019-6-19 19.58.05.mp4");
let ws = fs.createWriteStream("mp.mp4");

//3.监听流的打开和关闭
ws.once("open", ()=>{
    console.log("写入通道已经打开！");
})

ws.once("close", ()=>{
    console.log("写入通道已经关闭！");
})

rs.once("open", ()=>{
    console.log("读出通道已经打开！");
})

rs.once("close", ()=>{
    console.log("读出通道已经关闭！");
})

//4.绑定data
rs.on("data", (data)=>{
    ws.write(data);
});

//简便方法
// rs.pipe(ws);

let http = require("http");


let server = http.createServer((req, res)=>{
    res.writeHead()
})