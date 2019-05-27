var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico'){
        return;
    }
    var wj = [];
    fs.readdir('./album', (err, filles) => {
        filles.forEach(item => {
            var stats = fs.statSync(`./album/${item}`)
            if(stats.isDirectory()){
                wj.push(item);
            }
        });
        console.log(wj);
    });
    
    res.end();
});

server.listen(3000); 