const mysql = require('mysql');

const  conn = mysql.createConnection({
    host: '127.0.0.1', //数据库的地址
    user: 'root',//账号
    password: 'root',//密码
    database: 'zhhx',//数据库名称
});
conn.connect();

module.exports = conn;