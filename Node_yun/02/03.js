var http = require('http');
var formidable = require('formidable');
var util = require('util');
var fs = require("fs");
var sd = require("silly-datetime");
var path = require("path");

http.createServer((req, res) => {
    if(req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        var form = new formidable.IncomingForm();

        form.uploadDir = "./uploads";

        form.parse(req, (err, fields, files) => {
            if(err){
                throw err;
            }
            console.log(files);
            
            var ttt = sd.format(new Date(), 'YYYYMMDDHHmmss');
            var ran = parseInt(Math.random() * 89999 + 10000);
            var extname = path.extname(files.img.name);

            var oldpath = __dirname + '/' + files.img.path;
            var newpath = __dirname + "/uploads/" + ttt + ran + extname;
            //改名
            fs.rename(oldpath,newpath,function(err){
                if(err){
                    throw Error("改名失败");
                }
                res.writeHead(200, {'content-type': 'text/plain;charset=UTF-8'});
                res.end("成功");
            });
        });
    }
}).listen(3000);