// 后台首页与电影相关的路由信息
var express = require('express')
var router = express.Router()

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/movieCms',{ useNewUrlParser: true , useUnifiedTopology: true});

// const MoviesCms = mongoose.model('MoviesCms', { moviename: String , moviecontent: String , yanyuan: String , doayan: String});


// 1. 路由定好完成电影list
router.get('/member/add', function (req, res) {
    res.render('member/add');
})

// 路由定好完成电影删除
router.get('/member/list', function (req, res) {
    res.render('member/list');
})

module.exports = router