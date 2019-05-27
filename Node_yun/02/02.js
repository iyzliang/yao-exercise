var http = require('http');
var formidable = require('formidable');
var util = require('util');

http.createServer((req, res) => {
    if(req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        var form = new formidable.IncomingForm();
        form.uploadDir = "./uploads";
        form.parse(req, (err, fields, files) => {
            if(err){
                throw err;
            }
            console.log('=====');
            console.log(fields);
            console.log('=====');
            console.log(files);
            res.writeHead(200, {'Cented-type': 'text/plain'});
            res.end('success');
        });
    }
}).listen(3000);