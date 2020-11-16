// // 链接数据库
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/movieCms', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// // 数据库的构造函数
// const MoviesCms = mongoose.model('MoviesCms', {
//     moviename: String,
//     doayan: String,
//     yanyuan: String,
//     moviecontent: String
// }, 'MoviesCms');

var MovieModel = require('../models/MovieModel.js');
var mov = new MovieModel();

class MovieController {
    constructor() {

    }
    add(req, res) {
        res.render('movie/add');
    }
    async list(req, res) {
        let movielist = await mov.list();
        // console.log(movielist);
        res.render('movie/list', {
            movielist
        })
    }
    async savemoviemsg(req, res) {
        var {
            moviename,
            doayan,
            yanyuan,
            moviecontent
        } = req.body && req.body;
        //判断是否存在

        // console.log(moviename, doayan, yanyuan, moviecontent);

        if (!moviename || !yanyuan || !doayan) {
            res.send('http://localhost:9999/admin/movie/add'); //跳转填写路由
            return;
        }
        // 数据库实例,传入参数
        await mov.savemsg({
            moviename,
            doayan,
            yanyuan,
            moviecontent
        })
        res.send('http://localhost:9999/admin/movie/list');
    }
}

module.exports = MovieController;