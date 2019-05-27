var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
    res.end('<h1>欢迎来到我的主页</h1>');
}).listen(3000);
console.log('Server running at http://139.162.73.159:8081');
