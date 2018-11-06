const express = require('express');
const router = express.Router();
const conn = require('./../db/db');
const svgCaptcha = require("svg-captcha");

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
});

module.exports = router;
