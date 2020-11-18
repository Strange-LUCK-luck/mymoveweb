// 登录页面相关信息
let express = require('express')
let router = express.Router()
const LoginContorller = require('../controllers/LoginContorller.js');
let loginctrlobj = new LoginContorller();
// 登录页面路由
router.get('/login', loginctrlobj.login)
// 登录选项
router.post('/loginchick', loginctrlobj.loginchick)

module.exports = router