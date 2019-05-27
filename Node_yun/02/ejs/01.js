var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer((req, res) => {
    fs.readFile('./index.ejs', (err, data) => {
        var template = data.toString();
        var dictionary = {name: '姚正亮'};
        var html = ejs.render(template, dictionary);

        res.writeHead(200, {'Content-type': 'text/html;charset=UTF-8'});
        res.end(html);
    });
}).listen(3000);