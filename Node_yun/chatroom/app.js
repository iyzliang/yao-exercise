const express = require('express');
const session = require('express-session');
const app = express();

const http  = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('../html'));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

var userlist = [];
app.get('/api/check', (req, res, next) => {
    var username = req.query.username;
    if(!username) {
        res.send({'static': "error", "data": '必须输入用户名'})
    }else if(userlist.indexOf(username) > 0){
        res.send({'static': "error", "data": '用户名重复'})
    }else {
        userlist.push(username);
        req.session.login = true;
        req.session.username = username;
        res.send({'static': "ok", "data": username})
    }
});

io.on('connection', (socket) => {
    console.log('客户端连接了');
    socket.on('liaotian', (msg) => {
        io.emit('xf',{'user': username, "msg": msg});
    })
})

http.listen(3000);