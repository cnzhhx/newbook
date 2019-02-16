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
    // 1. 获取数据
    const content = req.body.content;
    const time = req.body.time;
    res.json({success_code: 200, message:content,time})
});



module.exports = router;
