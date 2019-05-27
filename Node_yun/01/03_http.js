var http = require('http');

var server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.writeHead(200,{"Content-type": "text/json;charset=UTF-8"});
        console.log('服务器启动');
        res.end("{'data': 'a'}");
    }
});

server.listen(3000);