/**
 * Created by 19251 on 2017.7.13.
 */
var express = require('express');
var router = express.Router();
var crypto = require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('reg', { title: 'Express' });
    res.send('reg /(get) js running');
    next();
});
router.use('/',function(req,res,next){
    if(req.body['rePwd'] !== req.body['pwd'])
    {
        res.send('两次输入的口令不一致');
        return res.redirect('/reg');
    }

    var md5 = crypto.createHash('md5');
    var pwd = md5.update(req.body.pwd).digest('base64');

    res.send(pwd);
});
module.exports = router;
