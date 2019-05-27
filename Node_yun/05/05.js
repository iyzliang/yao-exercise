// node.js 中的session
var express = require('express'),
    app = express(),
    session = require('express-session');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    if(req.session.login){
        res.send('你已经登录' + req.session.username);
    } else {
        res.send('没有登录');
    }
});

app.get('/login', (req, res) => {
    req.session.login = true;
    req.session.username = "yzliang";
    res.send('登录成功');
});

app.listen(3000);