var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico'){
        return;
    }
    fs.readdir('./album', (err, filles) => {
        console.log(filles);
    });
    res.end();
});

server.listen(3000);