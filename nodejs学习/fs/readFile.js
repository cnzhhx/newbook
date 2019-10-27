//1.引入模块
let fs = require("fs");

//2.读取文件
fs.readFile("fd_2.txt", (err, data)=>{
    //2.1判断
    if(!err){
        console.log(data);
        console.log(data.toString());
    }else{
        throw err;
    }
});

//图片
fs.readFile("../1569041040_980932.jpg", (err, data)=>{
    if(!err){
        //写入本层文件夹
        fs.writeFile('img.jpg', data, (err)=>{
            if(!err){
                console.log("写入成功");
            }else{
                throw err; 
            }
        });
    }else{
        throw err;
    }
});