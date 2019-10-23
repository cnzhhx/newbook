//1.引入模块
let fs = require("fs")


//2.打开文件
/*
fs.openSync(path, flags[, mode])
*/

let fd = fs.openSync("fd.txt", "w")//没有该文件会自动创建

// console.log(fd)

//3.写入内容
fs.writeFileSync(fd, "今天天气很好，快来学习！")

//4.保存并退出
fs.closeSync(fd);