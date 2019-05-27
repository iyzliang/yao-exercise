const http = require('http');
const fs = require('fs');

var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html;charset=UTF-8'});
    if(req.url == '/'){
        fs.readFile('./index.html', (err, data) => {
            res.end(data);
        })
    }
});

var io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('客户端连接了');
    socket.on('tiwen',(msg) => {
        console.log(msg);
        socket.emit('huida', "吃了");
        io.emit('huida', "我不吃");
    })
})

server.listen(3000);