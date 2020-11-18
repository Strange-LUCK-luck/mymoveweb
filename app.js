// 基于express开发
const express = require('express')
// 处理post请求模块
const bodyParser = require('body-parser')
// 引入外置路由文件
const loginrouter = require('./routers/login.js')
const indexrouter = require('./routers/index.js')
const movietouter = require('./routers/movie.js')
const memberrouter = require('./routers/member.js')
// api文件
const api_router = require('./routers/api/api.js')
// session登录验证
const cookieSession = require('cookie-session')
// 允许跨域
const cors = require('cors')

// 模板引擎需要path模块
const path = require('path')
const app = express()
const port = 9999
app.use(cors())
// 配置session
app.use(cookieSession({
    name: 'session',
    keys: ['of;sghioj;fja9avm//'],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))
// 处理post
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 静态资源
app.use(express.static('public'))
// 配置模板引擎
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// 外置路由对象
// 登录相关
app.use('/admin', loginrouter);
// 首页
app.use('/admin', indexrouter);
// 电影相关
app.use('/admin', movietouter);
// 会员相关
app.use('/admin', memberrouter);
// api路由
app.use('/api', api_router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))