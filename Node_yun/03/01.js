var express = require('express'),
    app = express();
      
app.get('/', (req, res) => {
    res.send('你好s');
});

app.get(/^\/student\/([\d]{3})\/([\d]{4})$/, (req, res) => {
    console.log(req.params);
    
    res.send('学生信息：' + req.params[0] + req.params[1]);
});

app.get('/teacher/:name', (req, res) => {
    console.log(req.params);
    res.send('老师名字:' + req.params['name']);
});

app.listen(3000);