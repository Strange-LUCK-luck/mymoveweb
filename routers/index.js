var express = require('express')
var router = express.Router()

router.get('/index', function (req, res) {
    if(!req.session.isLogin){
        res.redirect('login');
        return;
    }
    res.render('index');
    // res.send('adddd')
})
router.get('/welcome', function (req, res) {
    res.render('welcome');
    // res.send('adddd')
})

router.get('/logout', function (req, res) {
    req.session.isLogin = false;
    res.redirect('login');
    return;
})

module.exports = router;