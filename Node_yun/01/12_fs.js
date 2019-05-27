var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico'){
        return;
    }
    var wj = [];
    fs.readdir('./album', (err, filles) => {
        // 迭代器
        (function iterator(i) {
            if(i == filles.length){
                console.log(wj);
                return;
            }
            fs.stat('./album/'+ filles[i], (err, stats) => {
                if(stats.isDirectory()){
                    wj.push(filles[i]);
                }
                iterator(i+1);
            });
        })(0);
    });
    res.end();
});

server.listen(3000);