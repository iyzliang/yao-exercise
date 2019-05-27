var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico'){
        return;
    }
    fs.stat('./album/aaa', (err, data) => {
        console.log(data.isDirectory());
    });
    res.end();
});

server.listen(3000);