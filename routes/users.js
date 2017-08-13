var express = require('express');
var router = express.Router();
//引入数据文件
// var data = require('../data.json');
//
// /* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// router.get('/daowei', function(req, res, next) {
//   res.send(data)
// });

module.exports = router;
