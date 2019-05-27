var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var mime = require('./mime.json');
http.createServer((req,res) => {
    var pathname = url.parse(req.url).pathname;
    if(pathname == '/'){
        pathname = '/index.html';
    }
    var extname = path.extname(pathname);
    fs.readFile(`./static/${pathname}`, (err, data) => {
        if(err){
            fs.readFile(`./static/404.html`, (err, data) => {
                res.writeHead(404, {'Content-type': 'text/html;charset=UTF-8'});
                res.end(data);
            });
            return;
        }
        res.writeHead(200, {'Content-type': `${mime[extname]};charset=UTF-8`});
        res.end(data);
    });
    
}).listen(3000);