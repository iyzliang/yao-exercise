var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico'){
        return;
    }
    res.writeHead(200,{"Content-type": "text/json;charset=UTF-8"});
    var userid = parseInt(Math.random() * 89999) + 10000;
    console.log('欢迎' + userid);
    
    fs.readFile('../node_yun.txt', (err, data) => {
        if(err){
            throw err;
        }
        console.log(userid + '文件读取完毕');
        res.end(data);
    });
});

server.listen(3000);