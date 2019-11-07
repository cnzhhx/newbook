//buffer 缓冲区   存放二进制
//Buffer的结构和数组很像，操作的方法也和数组类似
//Buffer中是以二进制的方式存储数据的
//Buffer是Node自带，不需要引入，直接使用即可

/* 废弃的方法
let buffer = new Buffer(10);
console.log(buffer);
*/

// Buffer.from()将一个字符串转成buffer
// 一个字符在buffer中占据1个bit   中文字符占3bit
let str = "xiaozh";
let buffer = Buffer.from(str);
console.log(buffer);
console.log(buffer.toString())


// Buffer.alloc(size[, fill[, encoding]])
//size为必须值，确定Buffer长度
let buffer2 = Buffer.alloc(20);
buffer2[0] = 10;
buffer2[1] = 12;
buffer2[2] = 0xfc;//可以直接放入非10进制数据
buffer2[19] = 11;
buffer2[20] = 11;//溢出不做处理
console.log(buffer2);
buffer2.forEach((item, index) => {
    console.log(index+ ':' + item);
    console.log(index+ ':' + item);
});

