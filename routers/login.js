// 登录页面相关信息
var express = require('express')
var router = express.Router()
const LoginContorller = require('../controllers/LoginContorller.js');
var loginctrlobj = new LoginContorller();
// 登录页面路由
router.get('/login', loginctrlobj.login)

router.post('/loginchick', loginctrlobj.loginchick)

module.exports = router