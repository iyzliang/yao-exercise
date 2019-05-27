var http = require('http');
var querystring = require('querystring');

http.createServer((req, res) => {
    if(req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        var alldata = "";
        
        req.addListener('data',(chunk) => {
            alldata += chunk;
        });

        req.addListener('end', () => {
            var data = querystring.parse(alldata.toString());
            console.log(data);
            res.end('success');
        });
    }
}).listen(3000);