//1.引入模块
let fs = require("fs");

//2.打开文件
fs.open("fd_2.txt", "a", (err, fd)=>{
    //2.1判断是否出错
    if(!err){
        //2.2写入文件
        fs.writeFile(fd, "这是一个神奇的网站：xiaozhqq.cn", (err)=>{
            //2.2.1判断是否写入成功
            if(!err){
                console.log("写入文件成功");
            }else{
                throw err
            }

            //2.3关闭文件
            fs.close(fd, err=>{
                if(!err){
                    console.log("关闭文件成功！")
                }else{
                    throw err
                }
            })
        })
    }else{
        throw err
    }
});
