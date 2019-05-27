// node.js 中的session
var express = require('express'),
    app = express(),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    db = require('./model/dao'),
    crypto = require('crypto');

// md5 编码

// var md5 = crypto.createHash('md5');
// var result = md5.update('a').digest('hex');


app.use(express.static('../html'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.get('/1', (req, res) => {
    if(req.session.login){
        res.send('你已经登录' + req.session.username);
    } else {
        res.send('没有登录');
    }
});

app.post('/api/login', (req, res) => {
    var body = req.body;
    db.find('userDB', 'login', {'username': body.username}, (err, result) => {
        if(err){
            res.send(err);
        }
        if(result.length == 0){
            res.send({"static": "err", "data": "账号错误"});
        } else {
            if(result[0].password == body.password){
                req.session.login = true;
                req.session.username = body.username;
                res.send({"static": "ok", "data": "登录成功"});
            }else{
                res.send({"static": "err", "data": "密码错误"});
            }
        }
    });
});

app.listen(3000);