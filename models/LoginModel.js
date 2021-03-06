// 链接数据库
const mongoose = require('mongoose');

require('../db/mgdb.js')

// 数据库的构造函数
const MoviesCms = mongoose.model('admins', {
    username: String,
    password: String
}, 'admins');


class LoginModel{
    constructor(){

    }
    logindata(){
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
}

module.exports = LoginModel;