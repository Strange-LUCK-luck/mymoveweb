const express = require('express')
let router = express.Router()

let ApiModel = require('../../controllers/ApiContorller.js');
let movieapidata = new ApiModel();

router.get('/findmovie', movieapidata.movieapilist)
router.get('/findpinglun', function (req, res) {
    res.render('welcome');
    // res.send('adddd')
})

router.get('/userlogin', function (req, res) {
    req.session.isLogin = false;
    res.redirect('login');
    return;
})

module.exports = router;