const express = require('express');
const router = express.Router();
const conn = require('./../db/db');

let users = {};  //用户信息

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//根据session中的用户id获取选课数据
router.get('/api/get_selection', (req, res)=>{
    let number = req.query.number;

    let sqlStr = "select * from courses where name not in (select name from garde where number =  '" + number + "')";
    conn.query(sqlStr, (error, results, fields) => {
            results = JSON.parse(JSON.stringify(results));
            res.json({
                success_code: 200,
                message: results
            });
    });
});

/*
*  根据session中的用户id获取选课数据结果
* */
router.get('/api/get_selection_result', (req, res)=>{
    let number = req.query.number;

    let sqlStr = "select * from courses where name in (select name from garde where number =  '" + number + "')";

    conn.query(sqlStr, (error, results, fields) => {
        results = JSON.parse(JSON.stringify(results));
        res.json({
            success_code: 200,
            message: results
        });
    });
});

//手机密码登录
router.post('/api/login', (req, res) => {

    const user_name = req.body.username;
    const pwd = req.body.password;

    let sqlStr = "SELECT * FROM users WHERE number = '" + user_name + "'LIMIT 1";
    conn.query(sqlStr, (error, results, fields) => {
        if (error) {
            console.log(results);

            res.json({err_code: 0, message: '用户名不正确!'});
        } else {
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {  // 用户已经存在
                // 验证密码是否正确
                if (results[0].password != pwd) {
                    console.log(typeof results[0].password);
                    console.log(typeof pwd);
                    res.json({err_code: 0, message: '密码不正确!'});
                } else {
                    req.session.userId = results[0].id;
                    req.session.type = results[0].type;
                    // 返回数据给客户端
                    res.json({
                        success_code: 200,
                        message: {
                            id: results[0].id,
                            number: results[0].number,
                            type: results[0].type,
                            name: results[0].name,
                        },
                        info: '登录成功!'
                    });
                }
            }
        }

    });


});


/**
 * 退出登录
 */
router.get('/api/logout', (req, res) => {
    // 1. 清除session中userId
    delete  req.session.userId;
    // 2. 提示用户
    res.json({
        success_code: 200,
        message: "退出登录成功"
    });
});

module.exports = router;
