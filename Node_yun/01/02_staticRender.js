var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    if(req.url == '/lv'){
        fs.readFile('./test2.html', function(err, data){
            res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
            res.end(data);
        });
    }else if (req.url == '/hong'){
        fs.readFile('./test.html', function(err, data){
            res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
            res.end(data);
        });
    }else if (req.url == '/taolu.png'){
        fs.readFile('./taolu.png', function(err, data){
            res.writeHead(200, {"Content-type": "image/png"});
            res.end(data);
        });
    }else if (req.url == '/aaaa.css'){
        fs.readFile('./css.css', function(err, data){
            // res.writeHead(200, {"Content-type": "image/png"});
            res.end(data);
        });
    }else{
        res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
        res.end('<h1>没有这个页面</h1>');
    }
});

server.listen(3000);