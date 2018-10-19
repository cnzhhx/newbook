let express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/homecasual', (req, res)=>{

    const data = require('../data/GeRecommends');
    res.json({success_code: 200, message: data})
});

module.exports = router;
