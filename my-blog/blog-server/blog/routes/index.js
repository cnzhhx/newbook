var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//请求首页推荐数据

router.get('/api/hotRecommends', (req, res)=> {
   const data = require('../data/hotReommends');
   res.json({success_code: 200, message: data})
});



module.exports = router;
