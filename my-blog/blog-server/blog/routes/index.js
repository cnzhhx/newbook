var express = require('express');
var router = express.Router();
const conn = require('./../db/db');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//请求首页推荐数据

router.get('/api/hotRecommends', (req, res)=> {
   const data = require('../data/hotReommends');
   res.json({success_code: 200, message: data})
});

router.post("/api/liuyan", (req, res) => {
    // 1. 上传留言
    const content = req.body.content;
    const time = req.body.time;
    res.json({success_code: 200, message:content,time});

    let sqlStr = 'SELECT * FROM zhhx_liuyan';

    const addSqlParams = [content, time];
    const addSql = "INSERT INTO zhhx_liuyan(liuyan, time) VALUES (?, ?)";
    conn.query(addSql, addSqlParams, (error, results, fields) => {
            if (error) {
                console.log(error);
                console.log('插入失败');
            } else {
                console.log('插入成功');
            }
    });



});

router.get('/api/liuyanDatas', (req, res, next)=>{
    //1.1 数据库查询的语句
    let sqlStr2 = 'SELECT * FROM zhhx_liuyan';
    // 1.2 执行语句
    conn.query(sqlStr2, (error, results, fields) => {
        if (error) {
            res.json({err_code: 0, message: '请求数据失败'});
        } else {
            res.json({success_code: 200, message: results});
        }
    });
});

//所有的note
router.get('/api/allNotes', (req, res)=> {
    const data = require('../data/allNotes');
    res.json({success_code: 200, message: data})
});


module.exports = router;
