const LoginModel = require('../models/LoginModel.js');
var md5 = require('md5');
var logg = new LoginModel();

class LoginContorller{
    constructor() {

    }

    login(req, res){
        req.session.isLogin = false;
        res.render('login');
    }

    async loginchick(req, res){
        let { username, password } = req.body;
        let admindata = await logg.logindata();
        let nameinfo = admindata[0].username;
        let passinfo = admindata[0].password;
        // console.log(passinfo);
        // console.log(md5(`${password}`));
        if( ( username === nameinfo) && ( passinfo === md5(`${password}`))){
            req.session.isLogin = true;
            res.redirect('index');
            return;
        }else{
            res.redirect('login');
            return;
        }
    }
}

module.exports = LoginContorller;