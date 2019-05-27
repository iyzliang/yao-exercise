var http = require('http');
var url = require('url');

http.createServer((req, res) => {
    if(req.url != '/favicon.ico'){
        var pathname = url.parse(req.url).pathname;
        var query = url.parse(req.url, true).query;
        console.log('pathname',pathname);
        console.log('query', query);
    }
    res.end();
}).listen(3000);