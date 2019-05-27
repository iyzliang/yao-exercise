var http = require('http');

http.createServer((req, res) => {
    console.log(req.url);
    res.end();
    
}).listen(3000);