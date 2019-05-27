var http = require("http");
var url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html;charset=UTF-8'});
    var queryObj = url.parse(req.url, true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    var sex = queryObj.sex;
    res.end(`参数${name},${age},${sex}`);
}).listen(3000,'127.0.0.1');