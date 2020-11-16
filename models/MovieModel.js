// 链接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movieCms', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// 数据库的构造函数
const MoviesCms = mongoose.model('MoviesCms', {
    moviename: String,
    doayan: String,
    yanyuan: String,
    moviecontent: String
}, 'MoviesCms');

class MovieModel {
    constructor() {

    }
    list() {
        return new Promise((resolve, reject) => {
            MoviesCms.find().exec((error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        })
    }
    savemsg(obj) {
        let {
            moviename,
            doayan,
            yanyuan,
            moviecontent
        } = obj;
        // 数据库实例,传入参数
        var movie = new MoviesCms({
            moviename,
            doayan,
            yanyuan,
            moviecontent
        });
        // 调用方法
        return movie.save();
    }
}

module.exports = MovieModel;