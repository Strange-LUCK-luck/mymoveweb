// 后台首页与电影相关的路由信息
var express = require('express')
var router = express.Router()

var MovieController = require('../controllers/MovieController.js');
var movieobj = new MovieController();



// 1. 路由定好完成电影list
router.get('/movie/add', movieobj.add)

router.post('/movie/savemoviemsg', movieobj.savemoviemsg)

// 路由定好完成电影列表
router.get('/movie/list', movieobj.list)

module.exports = router