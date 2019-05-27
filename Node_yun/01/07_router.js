var http = require('http');
var url = require('url');

http.createServer((req, res) => {
    var userurl = req.url;
    res.writeHead(200, {'Content-type': 'text/html;charset=UTF-8'})
    //substr函数来判断开头
    if(userurl.substr(0,9) == '/student/'){
        var studentid = userurl.substr(9);
        if(/^\d{10}$/.test(studentid)){
            res.end('查询学生信息，ID为'+ studentid);
        }else {
            res.end('学生ID不对');
        }
    }else if(userurl.substr(0,9) == '/teacher/'){
        var teacherid = userurl.substr(9);
        if(/^\d{6}$/.test(teacherid)){
            res.end('查询老师信息，ID为'+ teacherid);
        }else {
            res.end('老师ID不对');
        }
    }else{
        res.end("404");
    }
}).listen(3000)