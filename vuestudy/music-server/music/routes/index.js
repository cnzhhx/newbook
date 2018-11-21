const express = require('express');
const router = express.Router();
const conn = require('./../db/db');
const svgCaptcha = require("svg-captcha");
const sms_util = require('./../util/sms_util');

let users = {};  //用户信息

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//请求首页热门推荐
router.get('/api/hotRecommends', (req, res)=>{
    const data = require('../data/hotRecommends');
    res.json({success_code: 200, message: data})
});


//请求首页热门推荐
router.get('/api/images', (req, res)=>{
    const data = require('../data/images');
    res.json({success_code: 200, message: data})
});

//请求推荐歌手
router.get('/api/singer', (req, res)=>{
    const data = require('../data/singer');
    res.json({success_code: 200, message: data})
});

//请求歌单首页数据
router.get('/api/GeRecommends', (req, res)=>{
    const data = require('../data/GeRecommends');
    res.json({success_code: 200, message: data})
});


// const albumArr = require('./../data/albums').albums;
//请求首页专辑
router.get('/api/albums', (req, res, next)=>{
    // //1.定义临时数组
    // let temp_arr_all = [];
    // //2.遍历
    // for(let i=0; i<albumArr.length; i++){
    //     //2.1取出单个数据对象
    //     let oldItem = albumArr[i];
    //     //2.2取出数据表中对应的字段
    //     let temp_arr = [];
    //     temp_arr.push(oldItem.img);
    //     temp_arr.push(oldItem.singer);
    //     temp_arr.push(oldItem.name);
    //     //2.3合并到大的数组
    //     temp_arr_all.push(temp_arr);
    // }
    //
    // //3批量插入数据库表
    // //3.1数据库查询语言
    // let sqlStr = "INSERT INTO album(`img`,`singer`,`name`) VALUES ?";
    // //3.2执行语句
    // conn.query(sqlStr, [temp_arr_all], (error, results, fields) => {
    //     if (error) {
    //         console.log(error);
    //         console.log('插入失败');
    //     } else {
    //         console.log('插入成功');
    //     }
    // });
    //1.1 数据库查询的语句
    let sqlStr2 = 'SELECT * FROM album';
    // 1.2 执行语句
    conn.query(sqlStr2, (error, results, fields) => {
        if (error) {
            res.json({err_code: 0, message: '请求数据失败'});
        } else {
            res.json({success_code: 200, message: results});
        }
    });
});

//一次性图形验证码
router.get('/api/captcha', (req, res)=>{
    let captcha = svgCaptcha.create({
        color: true,
        noise: 2,
        ignorechars: "0oli",
        size: 4
    });
    // console.log(captcha);

    req.session.captchaText = captcha.text.toLocaleLowerCase();
    console.log(req.session);



    res.type("svg");
    res.send(captcha.data);
});

//发送验证码短信
router.get('/api/send_code', (req, res)=>{
    let phone = req.query.phone;

    let code = sms_util.randomCode(6);

    // sms_util.sendCode(phone, code, function (success) {
    //
    // })

    users[phone] = code;
    res.json({success_code: 200, message: code});
});

//手机验证码登录
router.post('/api/login_code', (req, res) => {
    // 1. 获取数据
    const phone = req.body.phone;
    const code = req.body.code;

    // 2. 验证验证码是否正确
    if (users[phone] !== code) {
        res.json({err_code: 0, message: '验证码不正确!'});
    }

    // 3. 查询数据
    delete  users[phone];

    let sqlStr = "SELECT * FROM zhhx_user_info WHERE user_phone = '" + phone + "' LIMIT 1";

    conn.query(sqlStr, (error, results, fields) => {
        if (error) {
            res.json({err_code: 0, message: '请求数据失败'});
        } else {
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {  // 用户已经存在
                // console.log(results[0]);
                req.session.userId = results[0].id;
                // 返回数据给客户端
                res.json({
                    success_code: 200,
                    message: {id: results[0].id, user_name: results[0].user_name, user_phone: results[0].user_phone}
                });
            } else { // 新用户
                const addSql = "INSERT INTO zhhx_user_info(user_name, user_phone) VALUES (?, ?)";
                const addSqlParams = [phone, phone];
                conn.query(addSql, addSqlParams , (error, results, fields) => {
                    results = JSON.parse(JSON.stringify(results));
                    console.log(results);
                    if (!error) {
                        req.session.userId = results.insertId;
                        let sqlStr = "SELECT * FROM zhhx_user_info WHERE id = '" + results.insertId + "' LIMIT 1";
                        conn.query(sqlStr, (error, results, fields) => {
                            if (error) {
                                res.json({err_code: 0, message: '请求数据失败'});
                            } else {
                                results = JSON.parse(JSON.stringify(results));
                                // 返回数据给客户端
                                res.json({
                                    success_code: 200,
                                    message: {
                                        id: results[0].id,
                                        user_name: results[0].user_name,
                                        user_phone: results[0].user_phone
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }
    });

});


//手机密码登录
router.post('/api/login_pwd', (req, res) => {
    // 1. 获取数据
    const user_name = req.body.name;
    const user_pwd = req.body.pwd;
    const captcha = req.body.captcha.toLowerCase();


    console.log(req.session);

    // 2. 验证图形验证码是否正确
    // console.log(req.session.captcha);
    if (captcha !== req.session.captcha) {
        res.json({err_code: 0, message: '图形验证码不正确!'});
        return;
    }
    delete req.session.captcha;


    // 3. 查询数据
    let sqlStr = "SELECT * FROM pdd_user_info WHERE user_name = '" + user_name + "' LIMIT 1";
    conn.query(sqlStr, (error, results, fields) => {
        if (error) {
            res.json({err_code: 0, message: '用户名不正确!'});
        } else {
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {  // 用户已经存在
                // 验证密码是否正确
                if (results[0].user_pwd !== user_pwd) {
                    res.json({err_code: 0, message: '密码不正确!'});
                } else {
                    req.session.userId = results[0].id;
                    // 返回数据给客户端
                    res.json({
                        success_code: 200,
                        message: {
                            id: results[0].id,
                            user_name: results[0].user_name,
                            user_phone: results[0].user_phone
                        },
                        info: '登录成功!'
                    });
                }
            } else { // 新用户
                const addSql = "INSERT INTO pdd_user_info(user_name, user_pwd) VALUES (?, ?)";
                const addSqlParams = [user_name, user_pwd];
                conn.query(addSql, addSqlParams, (error, results, fields) => {
                    results = JSON.parse(JSON.stringify(results));
                    // console.log(results);
                    if (!error) {
                        req.session.userId = results.insertId;
                        let sqlStr = "SELECT * FROM pdd_user_info WHERE id = '" + results.insertId + "' LIMIT 1";
                        conn.query(sqlStr, (error, results, fields) => {
                            if (error) {
                                res.json({err_code: 0, message: '请求数据失败'});
                            } else {
                                results = JSON.parse(JSON.stringify(results));
                                // 返回数据给客户端
                                res.json({
                                    success_code: 200,
                                    message: {
                                        id: results[0].id,
                                        user_name: results[0].user_name,
                                        user_phone: results[0].user_phone
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }
        console.log(req.session);
    });
});


module.exports = router;
