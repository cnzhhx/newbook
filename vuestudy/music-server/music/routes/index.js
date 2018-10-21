let express = require('express');
const router = express.Router();

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


module.exports = router;
