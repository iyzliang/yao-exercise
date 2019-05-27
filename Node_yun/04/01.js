var express = require('express'),
// post 获取body 从req.body中获取数据
    bodyParser = require('body-parser'),
    app = express(),
    data = [
        {
            "name": "yzl",
            "age": 25
        }
    ];

app.use(express.static('../html'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/news', (req, res) => {
    res.send(data);
});

app.post('/add', (req, res) => {
    console.log(req.body);
    data.push(req.body);
    res.send('ok');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('http://localhost:3000/api/v1/url')
});