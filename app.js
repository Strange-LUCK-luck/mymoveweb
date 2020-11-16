const express = require('express')
var bodyParser = require('body-parser')
const loginrouter = require('./routers/login.js')
const indexrouter = require('./routers/index.js')
const movietouter = require('./routers/movie.js')
const memberrouter = require('./routers/member.js')
const cookieSession = require('cookie-session')
const path = require('path')
const app = express()
const port = 9999
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
app.use('/admin', loginrouter);
app.use('/admin', indexrouter);
app.use('/admin', movietouter);
app.use('/admin', memberrouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))