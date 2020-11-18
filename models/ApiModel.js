// 链接数据库
const mongoose = require('mongoose');

require('../db/mgdb.js')

// 数据库的构造函数
// const MoviesCms = mongoose.model('movies', 'movies');

var movies = mongoose.model('movies', {

}, 'movies');


class LoginModel{
    constructor(){

    }
    FindMovie(){
        return new Promise((resolve, reject) => {
            movies.find().exec((error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        })
    }
}

module.exports = LoginModel;